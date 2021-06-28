<template>
  <div id="working-page">
    <b-container class="bg-white p-3 rounded shadow-sm mb-4" v-if="step == 0">
      <b-container class="border">
        <vue-tabs>
          <v-tab title="Data Peserta">
            <table class="table table-border">
              <tr class="border">
                <td><b>Status Pembayaran</b></td>
                <td v-if="stageInformationOfParticipant.number == null">-</td>
                <td v-if="stageInformationOfParticipant.number > 0">
                  <i class="fas fa-check text-success"></i>
                </td>
              </tr>
              <tr class="border">
                <td><b>Nomor Peserta</b></td>
                <td v-if="stageInformationOfParticipant.number == null">-</td>
                <td v-if="stageInformationOfParticipant.number != null">
                  {{ stageInformationOfParticipant.number }}
                </td>
              </tr>
            </table>
          </v-tab>
          <v-tab title="Jadwal">
            <table class="table table-border">
              <tr class="border">
                <td><b>Mulai pengerjaan</b></td>
                <td v-if="stage.started_at != null">
                  {{ getDateTime("datetime", getTime(startedAt)) }}
                </td>
                <td v-else>-</td>
              </tr>
              <tr class="border">
                <td><b>Selesai pengerjaan</b></td>
                <td v-if="stage.finished_at != null">
                  {{ getDateTime("datetime", getTime(finishedAt)) }}
                </td>
                <td v-else>-</td>
              </tr>
            </table>
          </v-tab>
          <v-tab title="Pengumuman">
            <div class="mt-3" v-if="stageAnnouncements">
              <b-row
                class="bg-white p-2 mb-2 shadow-sm rounded"
                no-gutters
                v-for="announcement in stageAnnouncements"
                :key="announcement._id"
              >
                <b-col md="9" class="text-left p-3">
                  <h4 class="text-bold">{{ announcement.title }}</h4>
                  <p v-if="announcement"></p>

                  <p class="text-secondary">
                    {{ getDateTime("datetime", announcement.created_at) }}
                  </p>
                </b-col>
                <b-col md="3" class="p-3">
                  <a
                    class="btn btn-primary"
                    @click="showAnnouncement(announcement)"
                  >
                    <i class="fas fa-search"></i>&nbsp;Detail
                  </a>
                </b-col>
              </b-row>
            </div>
            <div v-else>
              <div
                class="container bg-white p-3 text-center text-dark rounded-lg mt-2 mb-2"
              >
                <p>
                  <i class="fas fa-exclamation-triangle fa-2x"></i>
                  <br />
                  Belum ada pengumuman
                </p>
              </div>
            </div>
          </v-tab>
          <v-tab title="Dokumen">
            <b-container class="text-left p-3 border mt-2">
              <b-container class="bg-white p-3 rounded shadow-sm border">
                <a
                  target="blank"
                  href="http://anavaugm.com/STARTED/guidebook.pdf"
                >
                  <i class="fa fa-download fa-3x text-dark"></i>
                  <h2 class="d-inline ml-4">Guidebook</h2>
                </a>
              </b-container>
              <b-container class="bg-white p-3 rounded shadow-sm border">
                <a
                  target="blank"
                  href="http://anavaugm.com/OSM/petunjuk-final.pdf"
                >
                  <i class="fa fa-download fa-3x text-dark"></i>
                  <h2 class="d-inline ml-4">Petunjuk OSM Final</h2>
                </a>
              </b-container>
            </b-container>
          </v-tab>
        </vue-tabs>
        <br />

        <b>Catatan</b> : <br />Apabila telah memasuki waktu pengerjaan dan
        setelah menekan tombol mulai, lebih dari satu menit soal tidak muncul
        harap tekan tombol reset dan login kembali

        <br />
        <button class="btn btn-primary mt-2 mb-2" @click="reset()">
          Reset
        </button>
      </b-container>
      <input
        type="submit"
        value="Mulai"
        class="btn btn-purple mt-3"
        @click="nextStep()"
      />
    </b-container>
    <b-row class="pl-3 pr-3 mb-3" v-if="step == 1">
      <div v-if="mainStep == 1">
        <b-container class="bg-white p-4 shadow-sm">
          <h1>Soal</h1>
          <hr />
          <br />
          <b-row>
            <b-col cols="12" md="12">
              <b-col lg="12">
                <b-container class="bg-white p-3 rounded shadow-sm border">
                  <a
                    target="blank"
                    href="http://anavaugm.com/soal-final-osm.pdf"
                  >
                    <i class="fa fa-download fa-3x text-dark"></i>
                    <h2 class="d-inline ml-4">Soal Final OSM</h2>
                  </a>
                </b-container>
                <b-container class="bg-white p-3 rounded shadow-sm border">
                  <a
                    target="blank"
                    href="http://anavaugm.com/DATA FINAL PESERTA OSM.xlsx"
                  >
                    <i class="fa fa-download fa-3x text-dark"></i>
                    <h2 class="d-inline ml-4">Data Final Peserta OSM</h2>
                  </a>
                </b-container>
              </b-col>
            </b-col>
            <b-col cols="12" md="12">
              <h1 class="mt-3">Sisa Waktu</h1>
              <hr />
              <br />
              <b-col lg="12">
                <b-card>
                  <b-row class="h2 mt-4">
                    <b-col>{{ displayDays }}</b-col> :
                    <b-col>{{ displayHours }}</b-col> :
                    <b-col>{{ displayMinutes }}</b-col> :
                    <b-col>{{ displaySeconds }}</b-col>
                  </b-row>
                  <b-row>
                    <b-col>Hari</b-col>
                    <b-col>Jam</b-col>
                    <b-col>Menit</b-col>
                    <b-col>Detik</b-col>
                  </b-row>
                </b-card>
              </b-col>
            </b-col>
            <b-col class="mt-4" cols="12" md="12">
              <h1>Form Pengumpulan</h1>
              <hr />
              <br />
              <div v-if="answerFormByParticipantAndStage.answers != null">
                <div
                  id="dropFileForm"
                  v-if="
                    answerForm.answers[0].uploaded == false ||
                    changeStartedjawaban == 1
                  "
                >
                  <input
                    type="file"
                    id="fileStartedjawaban"
                    ref="started_jawaban"
                    @change="addFile('started_jawaban')"
                  />

                  <label for="fileStartedjawaban" id="fileLabel">
                    <i class="fa fa-upload fa-5x"></i>
                    <br />
                    <span
                      id="fileLabelText"
                      v-html="fileName.started_jawaban"
                    />
                  </label>

                  <button class="uploadButton" @click="uploadAnswer(1)">
                    <b-spinner v-if="loading" label="Spinning"></b-spinner>
                    <p v-if="!loading" class="d-inline">Unggah</p>
                  </button>
                </div>
                <div v-else>
                  <div class="p-4 border">
                    <embed
                      :src="
                        'http://anavaugm.com/answer_' +
                        answerFormByParticipantAndStage.answers[0]._id +
                        '.pdf'
                      "
                      style="height: 900px; width: 600px"
                    />
                    <button
                      class="btn-purple mt-3"
                      v-if="true"
                      @click="changeStartedjawaban = 1"
                    >
                      Ganti
                    </button>
                  </div>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <div v-if="mainStep == 2">
        <b-container class="bg-white p-4 shadow-sm">
          <h1>Jeda</h1>
          <hr />
          <br />
          <b-row>
            <b-col cols="12" md="12">
              <b-col lg="12">
                <b-card>
                  <b-row class="h2 mt-4">
                    <b-col>{{ displayDays }}</b-col> :
                    <b-col>{{ displayHours }}</b-col> :
                    <b-col>{{ displayMinutes }}</b-col> :
                    <b-col>{{ displaySeconds }}</b-col>
                  </b-row>
                  <b-row>
                    <b-col>Hari</b-col>
                    <b-col>Jam</b-col>
                    <b-col>Menit</b-col>
                    <b-col>Detik</b-col>
                  </b-row>
                </b-card>
              </b-col>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <div v-if="mainStep == 3">
        <b-container class="bg-white p-4 shadow-sm">
          <h1>Soal 2</h1>
          <hr />
          <br />
          <b-row>
            <b-col cols="12" md="12">
              <h1 class="mt-3">Sisa Waktu</h1>
              <hr />
              <br />
              <b-col lg="12">
                <b-card>
                  <b-row class="h2 mt-4">
                    <b-col>{{ displayDays }}</b-col> :
                    <b-col>{{ displayHours }}</b-col> :
                    <b-col>{{ displayMinutes }}</b-col> :
                    <b-col>{{ displaySeconds }}</b-col>
                  </b-row>
                  <b-row>
                    <b-col>Hari</b-col>
                    <b-col>Jam</b-col>
                    <b-col>Menit</b-col>
                    <b-col>Detik</b-col>
                  </b-row>
                </b-card>
              </b-col>
            </b-col>
            <b-col class="mt-4" cols="12" md="12">
              <h1>Form Pengumpulan</h1>
              <hr />
              <br />
              <div v-if="answerFormByParticipantAndStage.answers != null">
                <div
                  id="dropFileForm"
                  v-if="
                    answerForm.answers[1].uploaded == false ||
                    changeStartedjawaban == 1
                  "
                >
                  <input
                    type="file"
                    id="fileStartedjawaban"
                    ref="started_jawaban"
                    @change="addFile('started_jawaban2')"
                  />

                  <label for="fileStartedjawaban" id="fileLabel">
                    <i class="fa fa-upload fa-5x"></i>
                    <br />
                    <span
                      id="fileLabelText"
                      v-html="fileName.started_jawaban2"
                    />
                  </label>

                  <button class="uploadButton" @click="uploadAnswer(2)">
                    <b-spinner v-if="loading" label="Spinning"></b-spinner>
                    <p v-if="!loading" class="d-inline">Unggah</p>
                  </button>
                </div>
                <div v-else>
                  <div class="p-4 border">
                    <a
                      class="btn btn-primary ml-3 mt-3"
                      target="blank"
                      :href="
                        'http://anavaugm.com/answer_' +
                        answerFormByParticipantAndStage.answers[1]._id +
                        '.pptx'
                      "
                    >
                      <i class="fa fa-download" />&nbsp;Unduh File PPT
                    </a>
                    <button
                      class="btn-purple mt-3"
                      v-if="true"
                      @click="changeStartedjawaban = 1"
                    >
                      Ganti
                    </button>
                  </div>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </b-row>
    <b-row v-if="step == 2" class="pl-3 pr-3">
      <b-container class="bg-white p-4 shadow rounded text-left">
        <h2>{{ announcement.title }}</h2>
        <p
          v-if="announcement.stage == null && announcement.participant == null"
        >
          Umum
        </p>
        <p v-if="announcement.stage != null">
          {{ "Kepada peserta " + getEventName(announcement.stage._id) }}
        </p>
        <p v-if="announcement.participant != null">
          {{ "Kepada " + announcement.participant.username }}
        </p>
        <br />
        <small>{{ getDateTime("datetime", announcement.created_at) }}</small>
        <hr />
        <div class="mt-4" v-html="announcement.content" />
      </b-container>
    </b-row>
  </div>
</template>
<script>
import * as datetime from "./../../../../../services/datetime";
import Swal from "sweetalert2";

export default {
  name: "PenyisihanStarted",
  data() {
    return {
      now: new Date(),
      startedAt: new Date(2021, 0, 24, 15, 15, 0),
      finishedAt: new Date(2021, 0, 24, 17, 5, 0),
      started_at: new Date(2021, 0, 24, 8, 15, 0),
      finished_at: new Date(2021, 0, 24, 10, 5, 0),
      finished_at1: null,
      finished_at2: null,
      step: 0,
      mainStep: 0,
      data: [],
      answerForm: {},
      stageInformationOfParticipant: {},
      itemsTab1: [],
      itemsTab2: [{ "Nomor pendaftaran": 0, "Terdaftar pada": 0 }],
      displayDays: 0,
      displayHours: 0,
      displayMinutes: 0,
      displaySeconds: 0,
      doubtful: [],
      year: 0,
      month: 0,
      day: 0,
      hour: 0,
      minute: 0,
      timer: null,
      announcement: {},
      formParticipant: {
        firstname: "",
        lastname: "",
        grade: 10,
        birthDate: "",
        address: "",
        phoneNumber: "",
        schoolName: "",
        schoolAddress: "",
        region: 1,
      },
      document: {
        type: "",
      },
      changeStartedjawaban: 0,
      changeEventDocument: 0,
      initialCheck: 0,
      loading: false,
      uploaded: false,
      fileName: {
        started_jawaban: "Unggah file jawaban (*.pdf)",
        started_jawaban2: "Unggah file jawaban (*.pptx)",
        event_document: "Unggah surat orisinalitas (*.pdf)",
      },
    };
  },
  computed: {
    stage() {
      return JSON.parse(
        localStorage.getItem("stage" + this.$route.params.idStage)
      );
    },
    event() {
      return JSON.parse(localStorage.getItem("event"));
    },
    events() {
      return this.$store.state.event.events;
    },
    answerFormByParticipantAndStage() {
      return JSON.parse(
        localStorage.getItem("answerForm2" + this.$route.params.idStage)
      );
    },
    participant() {
      return JSON.parse(localStorage.getItem("user"));
    },
    stageAnnouncements() {
      return this.$store.state.announcement.participantAnnouncements;
    },
    time() {
      var today = new Date();

      return today > this.started_at && today < this.finished_at;
    },
    _seconds: () => 1000,
    _minutes() {
      return this._seconds * 60;
    },
    _hours() {
      return this._minutes * 60;
    },
    _days() {
      return this._hours * 24;
    },
    end() {
      return new Date(
        this.year,
        this.month - 1,
        this.date,
        this.hour,
        this.minute
      );
    },
  },
  methods: {
    getEventName(stageId) {
      var name = "";
      this.events.forEach((event) => {
        event.stages.forEach((stage) => {
          if (stageId == stage._id) {
            switch (event.name) {
              case "OSM":
                switch (stage.name) {
                  case "preliminary":
                    name = event.name + " Penyisihan";
                    break;
                  case "semifinal":
                    name = event.name + " Semifinal";
                    break;
                  case "final":
                    name = event.name + " Final";
                    break;
                }
                break;
              case "The One":
                switch (stage.name) {
                  case "preliminary":
                    name = event.name + " Babak Gugur";
                    break;
                  case "semifinal":
                    name = event.name + " Babak Championship";
                    break;
                }
                break;
              case "Started":
                switch (stage.name) {
                  case "preliminary":
                    name = event.name + " Pekan Kreativitas";
                    break;
                  case "semifinal":
                    name = event.name + " Final";
                    break;
                }
                break;
              case "Sigma":
                name = event.name;
                break;
              case "Open House":
                name = event.name;
                break;
            }
          }
        });
      });
      return name;
    },
    showAnnouncement(announcement) {
      this.announcement = announcement;
      this.step = 2;
    },
    getTime(_time) {
      var time = new Date(_time);

      return time;
    },
    nextStep() {
      var today = new Date();
      today.setHours(today.getHours());

      var isTime = today > new Date(this.started_at);

      if (isTime) {
        if (this.stageInformationOfParticipant.document == 1) {
          this.step = 1;
          this.createAnswerForm();
        } else {
          Swal.fire({
            title: "Anda belum mengunggah Surat Orisinalitas",
            icon: "error",
            showConfirmButton: true,
          }).then();
        }
      } else {
        Swal.fire({
          title: "Waktu pengerjaan belum dimulai",
          icon: "error",
          showConfirmButton: true,
        }).then();
      }
    },
    getDateTime: function (type, date) {
      return datetime.getDateTime(type, date);
    },
    addFile(type) {
      var fileExtension = "";
      if (type == "started_jawaban") {
        this.fileName.started_jawaban = this.$refs.started_jawaban.files[0].name.toString();

        fileExtension = /[.]/.exec(this.fileName.started_jawaban)
          ? /[^.]+$/.exec(this.fileName.started_jawaban)
          : undefined;

        if (fileExtension != "pdf") {
          Swal.fire({
            title: "Format file tidak sesuai",
            icon: "error",
            showConfirmButton: true,
          }).then();
          this.fileName.started_jawaban = "Unggah file jawaban (*.pdf)";
        }
      } else {
        this.fileName.started_jawaban2 = this.$refs.started_jawaban.files[0].name.toString();

        fileExtension = /[.]/.exec(this.fileName.started_jawaban2)
          ? /[^.]+$/.exec(this.fileName.started_jawaban2)
          : undefined;

        if (fileExtension == "ppt" || fileExtension == "pptx") {
          console.log();
        } else {
          Swal.fire({
            title: "Format file tidak sesuai",
            icon: "error",
            showConfirmButton: true,
          }).then();
          this.fileName.started_jawaban2 = "Unggah file jawaban (*.pptx)";
        }
      }
    },
    uploadAnswer(number) {
      this.loading = true;

      var document = new FormData();

      this.loading = true;

      document.append("eventName", "OSM");
      document.append("stageName", "final");
      document.append("number", number);
      document.append("file", this.$refs.started_jawaban.files[0]);

      var formAnswer = {
        id: this.answerForm.answers[number - 1]._id,
        data: document,
      };

      this.$store.dispatch("answer/uploadAnswer", formAnswer).then(
        () => {
          Swal.fire({
            icon: "success",
            title: "File berhasil diunggah",
            showConfirmButton: true,
          }).then(() => {});
          this.answerForm.answers[number - 1].uploaded = 1;

          localStorage.setItem("answerForm2", JSON.stringify(this.answerForm));
          this.loading = false;
          this.uploaded = true;
          this.changeStartedJawaban;
        },
        () => {
          alert("error");
        }
      );
    },
    reset() {
      new Swal({
        title:
          "Anda akan log out dan jika anda telah mengerjakan sebelumnya maka data tersebut akan ikut terhapus, anda yakin?",
        showDenyButton: true,
        buttons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          if (
            localStorage.getItem("answerForm2" + this.$route.params.idStage) !=
            null
          ) {
            localStorage.removeItem("answerForm2" + this.$route.params.idStage);
          }

          var answerForm = {
            idParticipant: this.participant.id,
            idStage: this.$route.params.idStage,
          };

          this.$store
            .dispatch("answerForm/deleteAnswerForm", answerForm)
            .then(() => {
              this.$router.go();
            });
        }
      });
    },
    uploadFile() {
      var document = new FormData();

      this.loading = true;
      document.append("file", this.$refs.event_document.files[0]);
      document.append("participantId", this.participant.id);

      var formParticipant = {
        id: this.event._id,
        document: document,
        participantId: this.participant.id,
      };

      this.$store.dispatch("event/uploadEvent", formParticipant).then(
        (response) => {
          Swal.fire({
            title: "Berhasil mengunggah dokumen",
            icon: "success",
            showConfirmButton: true,
          }).then();
          this.loading = false;
          const participant = response.data.data;
          var user = JSON.parse(localStorage.getItem("user"));
          user.participant = participant.participant;
          localStorage.setItem("user", JSON.stringify(user));
          this.getStageInformationOfParticipant();
        },
        () => {}
      );
    },
    getStage() {
      this.$store.dispatch("stage/getStage", this.$route.params.idStage);
    },
    getAllAnnouncementByStage() {
      this.$store
        .dispatch(
          "announcement/getAllAnnouncementByStage",
          this.$route.params.idStage
        )
        .then((response) => {
          console.log(response);
        });
    },
    getStageInformationOfParticipant() {
      this.participant.participant.events.forEach((event) => {
        event.stages.forEach((stage) => {
          if (stage.name == this.stage.name && event.name == this.event.name) {
            this.stageInformationOfParticipant = stage;
            this.stageInformationOfParticipant.number = event.number;
            this.stageInformationOfParticipant.document = event.document;
          }
        });
      });
    },
    getAnswerFormByParticipantAndStage() {
      var answerForm = {};

      answerForm.stageId = this.$route.params.idStage;
      answerForm.participantId = this.participant.id;

      this.$store
        .dispatch("answerForm/getAnswerFormByParticipantAndStage", answerForm)
        .then((result) => {
          localStorage.setItem("answerForm2", JSON.stringify(result));
        });
    },
    saveAnswerForm(_answerForm) {
      localStorage.setItem("answerForm2", JSON.stringify(_answerForm));
    },
    createAnswerForm() {
      if (this.stageInformationOfParticipant.document == 1) {
        var _answerForm = {};
        _answerForm.stageId = this.$route.params.idStage;
        _answerForm.participantId = this.participant.id;

        this.$store
          .dispatch("answerForm/createAnswerForm", _answerForm)
          .then((answerForm) => {
            var started_at = new Date(this.started_at);
            var finished_at = new Date(this.finished_at);
            var _answerForm = null;
            if (answerForm != null) {
              _answerForm = JSON.parse(JSON.stringify(answerForm));

              if (!_answerForm.session) {
                _answerForm.started_at = started_at.toISOString();
                _answerForm.finished_at = finished_at.toISOString();

                _answerForm.session = this.stageInformationOfParticipant.session;

                const format = _answerForm.finished_at.split("-");
                this.year = parseInt(format[0]);
                this.month = parseInt(format[1]);
                const time = format[2].split("T");
                this.date = parseInt(time[0]);
                const clock = time[1].split(":");
                this.hour = parseInt(clock[0]);
                this.minute = parseInt(clock[1]);

                this.showRemaining();

                localStorage.setItem(
                  "answerForm2" + this.$route.params.idStage,
                  JSON.stringify(_answerForm)
                );
              }
            } else {
              _answerForm = this.answerFormByParticipantAndStage;

              _answerForm.started_at = started_at.toISOString();
              _answerForm.finished_at = finished_at.toISOString();

              _answerForm.session = this.stageInformationOfParticipant.session;

              const format = _answerForm.finished_at.split("-");
              this.year = parseInt(format[0]);
              this.month = parseInt(format[1]);
              const time = format[2].split("T");
              this.date = parseInt(time[0]);
              const clock = time[1].split(":");
              this.hour = parseInt(clock[0]);
              this.minute = parseInt(clock[1]);

              this.showRemaining();
            }
          });
      } else {
        Swal.fire({
          icon: "error",
          title: "Surat orisinalitas belum diunggah",
          text: this.message,
          showConfirmButton: true,
        }).then(() => {});
      }
    },
    submitAnswerForm() {
      this.answerForm.eventName = "OSM";
      this.answerForm.stageName = "final";
      this.$store
        .dispatch("answerForm/submitAnswerForm", this.answerForm)
        .then((response) => {
          console.log("submitResponse" + JSON.stringify(response));
        });
    },
    showRemaining() {
      const timer = setInterval(() => {
        this.answerForm = this.answerFormByParticipantAndStage;

        var distance = 0;

        this.now = new Date();

        if (this.now > this.finished_at) {
          this.step = 0;
        } else if (this.now > this.finished_at2) {
          this.mainStep = 3;
          distance = this.finished_at.getTime() - this.now.getTime();
        } else if (this.now > this.finished_at1) {
          this.mainStep = 2;
          distance = this.finished_at2.getTime() - this.now.getTime();
        } else if (this.now > this.started_at) {
          this.mainStep = 1;
          distance = this.finished_at1.getTime() - this.now.getTime();
        }

        if (!this.time) {
          clearInterval(timer);
          this.step = 0;
          this.submitAnswerForm();
        }

        const days = Math.floor(distance / this._days);
        const hours = Math.floor((distance % this._days) / this._hours);
        const minutes = Math.floor((distance % this._hours) / this._minutes);
        const seconds = Math.floor((distance % this._minutes) / this._seconds);

        this.displaySeconds = seconds < 10 ? "0" + seconds : seconds;
        this.displayMinutes = minutes < 10 ? "0" + minutes : minutes;
        this.displayHours = hours < 10 ? "0" + hours : hours;
        this.displayDays = days < 10 ? "0" + days : days;
      }, 1000);
    },
  },
  updated() {},
  created() {
    this.answerForm.stageId = this.$route.params.idStage;
    this.answerForm.participantId = this.participant.id;

    var finished_at2 = new Date(this.finished_at);
    var finished_at1 = new Date(this.finished_at);
    finished_at2 = finished_at2.setMinutes(this.finished_at.getMinutes() - 40);
    finished_at1 = finished_at1.setMinutes(this.finished_at.getMinutes() - 60);

    this.finished_at2 = new Date(finished_at2);
    this.finished_at1 = new Date(finished_at1);

    this.getStage();
    this.getAllAnnouncementByStage();
    this.getAnswerFormByParticipantAndStage();

    this.items = [
      {
        "Mulai pengerjaan": this.getDateTime("datetime", this.stage.started_at),
        "Selesai pengerjaan": this.getDateTime(
          "datetime",
          this.stage.finished_at
        ),
        "Pengumuman lolos": this.getDateTime("datetime", this.stage.started_at),
      },
    ];
    this.getStageInformationOfParticipant();
  },
};
</script>
<style scoped>
#working-page {
  height: 100%;
}

#number-question {
  width: 40px;
  height: 40px;
}

#number-question p {
  font-size: 11px;
  margin-top: 5px;
}

#nav-btn p {
  display: inline;
}

@media (max-width: 767px) {
  #nav-btn p {
    display: none;
  }
  #number-question {
    width: 45px;
    height: 45px;
    margin-left: 15px;
  }
  #number-question p {
    font-size: 15px;
    margin-top: 5px;
  }
}
.btn-purple {
  border: 0;
  outline: 0;
  width: 30%;
  padding: 8px;
  background-color: #58427c;
  color: #fff;
  cursor: pointer;
}
#dropFileForm {
  margin: 16px;
  text-align: center;
  border-radius: 8px;
  overflow: hidden;
  transition: 0.5s;
}

#dropFileForm #fileLabel {
  background-color: rgba(200, 200, 200, 0.5);
  display: block;
  padding: 16px;
  position: relative;
  cursor: pointer;

  border: 2px dashed #555;
}

#dropFileForm #fileEventDocument {
  display: none;
}

#dropFileForm #fileStartedjawaban {
  display: none;
}

#dropFileForm #fileLabel:after,
#dropFileForm #fileLabel:before {
  position: absolute;
  content: "";
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  z-index: -2;
  border-radius: 8px 8px 0 0;
}

#dropFileForm #fileLabel:before {
  z-index: -1;
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 5%,
    black 5%,
    black 10%
  );
  opacity: 0;
  transition: 0.5s;
}

#dropFileForm.fileHover #fileLabel:before {
  opacity: 0.25;
}

#dropFileForm .uploadButton {
  border: 0;
  outline: 0;
  width: 100%;
  padding: 8px;
  background-color: #58427c;
  color: #fff;
  cursor: pointer;
}

#dropFileForm.fileHover {
  box-shadow: 0 0 16px limeGreen;
}

.btn-purple {
  border: 0;
  outline: 0;
  width: 100%;
  padding: 8px;
  background-color: #58427c;
  color: #fff;
  cursor: pointer;
}
</style>
