<template>
  <div id="working-page">
    <b-container class="bg-white p-3 rounded shadow-sm mb-4" v-if="step == 0">
      <b-container class="border">
        <vue-tabs>
          <v-tab title="Data Peserta">
            <table class="table table-border">
              <tr class="border">
                <td><b>Status Pembayaran</b></td>
                <td v-if="stageInformationOfParticipant.number == null">
                  -
                </td>
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
              <tr class="border">
                <td><b>Terdaftar pada</b></td>
                <td v-if="stageInformationOfParticipant.pay_at == null">-</td>
                <td v-if="stageInformationOfParticipant.pay_at != null">
                  {{
                    getDateTime(
                      "datetime",
                      stageInformationOfParticipant.pay_at
                    )
                  }}
                </td>
              </tr>
            </table>
          </v-tab>
          <v-tab title="Jadwal">
            <table class="table table-border">
              <tr class="border">
                <td><b>Mulai pengerjaan</b></td>
                <td v-if="stage.started_at != null">
                  {{ getDateTime("datetime", getTime(started_at)) }}
                </td>
                <td v-else>-</td>
              </tr>
              <tr class="border">
                <td><b>Selesai pengerjaan</b></td>
                <td v-if="stage.finished_at != null">
                  {{ getDateTime("datetime", getTime(finished_at)) }}
                </td>
                <td v-else>-</td>
              </tr>
            </table>
          </v-tab>
          <v-tab title="Surat Orisinalitas"
            ><div
              id="dropFileForm"
              v-if="
                stageInformationOfParticipant.document == 0 ||
                  changeEventDocument == 1
              "
            >
              <input
                type="file"
                id="fileEventDocument"
                ref="event_document"
                @change="addFile('event_document')"
              />

              <label for="fileEventDocument" id="fileLabel">
                <i class="fa fa-upload fa-5x"></i>
                <br />
                <span id="fileLabelText" v-html="fileName.event_document" />
              </label>

              <button class="uploadButton" @click="uploadFile()">
                <b-spinner v-if="loading" label="Spinning"></b-spinner>
                <p v-if="!loading" class="d-inline">Unggah</p>
              </button>
            </div>
            <div>
              <embed
                :src="
                  'http://anavaugm.com/event_document_' +
                    event._id +
                    participant.id +
                    '.pdf'
                "
                width="700px"
                height="1800px"
              />
              <button
                class="btn-purple"
                v-if="true"
                @click="changeEventDocument = 1"
              >
                Ganti
              </button>
            </div>
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
              <b-container class="bg-white p-3 rounded shadow-sm border mt-3">
                <a
                  target="blank"
                  href="http://anavaugm.com/STARTED/surat-orisinalitas.pdf"
                >
                  <i class="fa fa-download fa-3x text-dark"></i>
                  <h2 class="d-inline ml-4">Surat Orisinalitas</h2>
                </a>
              </b-container>
              <b-container class="bg-white p-3 rounded shadow-sm border mt-3">
                <a
                  target="blank"
                  href="http://anavaugm.com/STARTED/tor-pekan-kreativitas.pdf"
                >
                  <i class="fa fa-download fa-3x text-dark"></i>
                  <h2 class="d-inline ml-4">TOR</h2>
                </a>
              </b-container>
              <b-container class="bg-white p-3 rounded shadow-sm border mt-3">
                <a
                  target="blank"
                  href="http://anavaugm.com/logo-anava.png"
                >
                  <i class="fa fa-download fa-3x text-dark"></i>
                  <h2 class="d-inline ml-4">Logo ANAVA</h2>
                </a>
              </b-container>
            </b-container>
          </v-tab>
        </vue-tabs>
      </b-container>
      <input
        type="submit"
        value="Mulai"
        class="btn btn-purple mt-3"
        @click="nextStep()"
      />
    </b-container>
    <b-row class="pl-3 pr-3 mb-3" v-if="step == 1">
      <b-container class="bg-white p-4 shadow-sm">
        <h1>Ketentuan Poster</h1>
        <hr />
        <br />
        <b-row>
          <b-col cols="12" md="12">
            <p class="text-left">
              1. Poster yang diikutsertakan dalam lomba merupakan hasil karya
              orisinil peserta yang belum pernah dipublikasikan sebelumnya di
              media manapun dan belum pernah diikutsertakan dalam perlombaan
              lain (dinyatakan dalam lembar pernyataan orisinilitas karya yang
              dapat diunduh di web ANAVA).<br />
              2. Peserta wajib membuat surat pernyataan orisinalitas poster yang
              ditandatangani oleh peserta (format terlampir) yang akan
              disertakan dalam pengunggahan berkas-berkas lainnya.<br />
              3. Poster dibuat sesuai topik utama dan dapat memilih satu
              sub-topik yang disediakan.<br />
              4. Topik umum Lomba Poster STARTED adalah “Implementasi Statistika
              dalam Kehidupan Sehari-hari”.<br />
              5. Sub topik dalam Lomba Poster STARTED antara lain :<br />
              a. Bidang Ekonomi<br />
              b. Bidang Pendidikan<br />
              c. Bidang Kesehatan<br />
              d. Bidang Sosial Budaya<br />
              e. Bidang Teknologi<br />
              6. Konten dalam poster dapat memuat Teori, Studi kasus, Analisis,
              dan/atau Penyajian Data.<br />
              7. Poster dibuat secara digital pada kanvas dengan rasio 6 : 9 ,
              resolusi 300 dpi, format .PNG dan ukuran file maksimal 10 MB.<br />
              8. Peserta diperbolehkan menggunakan aplikasi berjenis apapun
              (corel draw, adobe photoshop, dan sebagainya). <br />
              9. Ketentuan lebih rinci dapat dilihat pada ToR (Term of
              Reference).<br />
            </p>
          </b-col>
          <b-col cols="12" md="12">
            <h1>TOR</h1>
            <hr />
            <br />
            <b-col lg="12">
              <b-container class="bg-white p-3 rounded shadow-sm border">
                <a
                  target="blank"
                  href="http://anavaugm.com/STARTED/tor-pekan-kreativitas.pdf"
                >
                  <i class="fa fa-download fa-3x text-dark"></i>
                  <h2 class="d-inline ml-4">TOR</h2>
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
              <div id="dropFileForm" v-if="uploaded == false || changeStartedPoster == 1">
                <input
                  type="file"
                  id="fileStartedPoster"
                  ref="started_poster"
                  @change="addFile('started_poster')"
                />

                <label for="fileStartedPoster" id="fileLabel">
                  <i class="fa fa-upload fa-5x"></i>
                  <br />
                  <span id="fileLabelText" v-html="fileName.started_poster" />
                </label>

                <button class="uploadButton" @click="uploadAnswer()">
                  <b-spinner v-if="loading" label="Spinning"></b-spinner>
                  <p v-if="!loading" class="d-inline">Unggah</p>
                </button>
              </div>
              <div v-else>
                <div class="p-4 border">
                  <img
                    :src="
                      'http://anavaugm.com/answer_' +
                        answerFormByParticipantAndStage.answers[0]._id +
                        '.png'
                    "
                    style="height:900px; width:600px;"
                  />
                  <button
                    class="btn-purple mt-3"
                    v-if="true"
                    @click="changeStartedPoster = 1"
                  >
                    Ganti
                  </button>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
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
      started_at: new Date(2021, 0, 3, 8, 0, 0),
      finished_at: new Date(2021, 0, 16, 12, 0, 0),
      step: 0,
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
      changeStartedPoster: 0,
      changeEventDocument: 0,
      initialCheck: 0,
      loading: false,
      uploaded: false,
      fileName: {
        started_poster: "Unggah file poster (*.png)",
        event_document: "Unggah surat orisinalitas (*.pdf)",
      },
    };
  },
  computed: {
    stage() {
      return JSON.parse(localStorage.getItem("stage" + this.$route.params.idStage));
    },
    event() {
      return JSON.parse(localStorage.getItem("event"));
    },
    events() {
      return this.$store.state.event.events;
    },
    answerFormByParticipantAndStage() {
      return JSON.parse(localStorage.getItem("answerForm2"));
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
      if (this.time) {
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
    getDateTime: function(type, date) {
      return datetime.getDateTime(type, date);
    },
    addFile(type) {
      var fileExtension = "";
      if (type == "started_poster") {
        this.fileName.started_poster = this.$refs.started_poster.files[0].name.toString();
        fileExtension = /[.]/.exec(this.fileName.started_poster)
          ? /[^.]+$/.exec(this.fileName.started_poster)
          : undefined;
        if (fileExtension != "png") {
          Swal.fire({
            title: "Format file tidak sesuai",
            icon: "error",
            showConfirmButton: true,
          }).then();
          this.fileName.started_poster = "Unggah file poster (*.png)";
        }
      } else {
        this.fileName.event_document = this.$refs.event_document.files[0].name.toString();
        fileExtension = /[.]/.exec(this.fileName.event_document)
          ? /[^.]+$/.exec(this.fileName.event_document)
          : undefined;
        if (fileExtension != "pdf") {
          Swal.fire({
            title: "Format file tidak sesuai",
            icon: "error",
            showConfirmButton: true,
          }).then();
          this.fileName.event_document = "Unggah surat orisinalitas (*.pdf)";
        }
      }
    },
    uploadAnswer() {
      this.loading = true;

      var document = new FormData();

      this.loading = true;
      document.append("file", this.$refs.started_poster.files[0]);

      var formAnswer = {
        id: this.answerForm.answers[0]._id,
        data: document,
      };
      this.$store.dispatch("answer/uploadAnswer", formAnswer).then(
        () => {
          Swal.fire({
              icon: "success",
              title: "File berhasil diunggah",
              showConfirmButton: true,
            }).then(() => {
              
            });
          this.loading = false;
          this.uploaded = true;
        },
        () => {
          alert("errror");
        }
      );
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
          if (stage.name == this.stage.name &&  event.name == this.event.name) {
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
            var _answerForm = JSON.parse(JSON.stringify(answerForm));

            if (!_answerForm.session) {
              var started_at = new Date(this.started_at);
              var finished_at = new Date(this.finished_at);

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

              localStorage.setItem("answerForm2", JSON.stringify(_answerForm));
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
      this.answerForm.eventName = "Started";
      this.answerForm.stageName = "preliminary";
      this.$store
        .dispatch("answerForm/submitAnswerForm", this.answerForm)
        .then((response) => {
          console.log("submitResponse" + JSON.stringify(response));
        });
    },
    showRemaining() {
      const timer = setInterval(() => {
        var now = new Date();
        var end = this.finished_at;

        const distance = end.getTime() - now.getTime();

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
  updated() {
    if (this.answerForm != null) {
      if (this.stageInformationOfParticipant.id == this.$route.params.idStage) {
        if (this.step == 1) {
          if (this.answerFormByParticipantAndStage.score != null)
            clearInterval(this.timer);

          if(this.answerFormByParticipantAndStage.answers[0].uploaded == 1 && this.initialCheck == 0) {
            this.uploaded = true;
            this.initialCheck = 1;
          }
            
          this.answerForm = JSON.parse(localStorage.getItem("answerForm2"));

          if (this.answerForm != null) {
            this.step = 1;

            const format = this.stage.finished_at.split("-");
            this.year = parseInt(format[0]);
            this.month = parseInt(format[1]);
            const time = format[2].split("T");
            this.date = parseInt(time[0]);
            const clock = time[1].split(":");
            this.hour = parseInt(clock[0]);
            this.minute = parseInt(clock[1]);

            this.showRemaining();
          }
        }
      } else {
        this.getStage();
        this.answerForm.stageId = this.$route.params.idStage;
        this.answerForm.participantId = this.participant.id;
        this.items = [
          {
            "Mulai pengerjaan": this.getDateTime(
              "datetime",
              this.stage.started_at
            ),
            "Selesai pengerjaan": this.getDateTime(
              "datetime",
              this.stage.finished_at
            ),
            "Pengumuman lolos": this.getDateTime(
              "datetime",
              this.stage.started_at
            ),
          },
        ];
        this.getStageInformationOfParticipant();
      }
    }
  },
  created() {
    this.answerForm.stageId = this.$route.params.idStage;
    this.answerForm.participantId = this.participant.id;

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

#dropFileForm #fileStartedPoster {
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
