<template>
  <div id="working-page">
    <b-container class="bg-white p-3 rounded shadow-sm mb-4" v-if="step == 0">
      <b-container class="border">
        <vue-tabs>
          <v-tab title="Data Peserta">
            <table class="table table-border">
              <tr class="border">
                <td><b>Status Pembayaran</b></td>
                <td v-if="stageInformationOfParticipant.number.length == 0">
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
            </table>
          </v-tab>
          <v-tab title="Jadwal">
            <table class="table table-border">
              <tr class="border">
                <td><b>Mulai pengerjaan</b></td>
                <td v-if="stage.started_at != null">
                  {{ getDateTime("datetime", started_at) }}
                </td>
                <td v-else>-</td>
              </tr>
              <tr class="border">
                <td><b>Selesai pengerjaan</b></td>
                <td v-if="stage.finished_at != null">
                  {{ getDateTime("datetime", finished_at) }}
                </td>
                <td v-else>-</td>
              </tr>
            </table>
          </v-tab>
          <v-tab title="Pakta Integritas"
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
                @change="addFile()"
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
            <div v-else>
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
          </v-tab>
          <v-tab title="Dokumen">
            <b-container class="text-left p-3 border mt-2">
              <b-container class="bg-white p-3 rounded shadow-sm border">
                <a
                  target="blank"
                  href="http://anavaugm.com/THE ONE/guidebook.pdf"
                >
                  <i class="fa fa-download fa-3x text-dark"></i>
                  <h2 class="d-inline ml-4">Guidebook</h2>
                </a>
              </b-container>
              <b-container class="bg-white p-3 rounded shadow-sm border">
                <a
                  target="blank"
                  href="http://anavaugm.com/THE ONE/petunjuk.pdf"
                >
                  <i class="fa fa-download fa-3x text-dark"></i>
                  <h2 class="d-inline ml-4">Petunjuk The One Babak Gugur</h2>
                </a>
              </b-container>
              <b-container class="bg-white p-3 rounded shadow-sm border">
                <a
                  target="blank"
                  href="http://anavaugm.com/THE ONE/pembagian-room.pdf"
                >
                  <i class="fa fa-download fa-3x text-dark"></i>
                  <h2 class="d-inline ml-4">Pembagian Room</h2>
                </a>
              </b-container>
              <b-container class="bg-white p-3 rounded shadow-sm border mt-3">
                <a
                  target="blank"
                  href="http://anavaugm.com/THE ONE/pakta-integritas.pdf"
                >
                  <i class="fa fa-download fa-3x text-dark"></i>
                  <h2 class="d-inline ml-4">Pakta Integritas</h2>
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

        <button class="btn btn-primary mb-2" @click="reset()">Reset</button>
      </b-container>
      <input
        type="submit"
        value="Mulai"
        class="btn btn-purple mt-3"
        @click="nextStep()"
      />
    </b-container>
    <b-row v-if="step == 1">
      <!-- soal -->
      <b-col col cols="9" md="9">
        <b-card-group deck>
          <b-card
            border-variant="secondary"
            header="featured"
            header-tag="header"
            header-bg-variant="white"
            header-text-variant="black"
            align="center"
          >
            <template #header>
              <b-row class="text-left">
                <b-col md="5">Soal No. {{ currentNumber + 1 }}</b-col>
                <b-col md="7" class="text-right">
                  <b-button-group size="sm">
                    <b-button variant="secondary">Sisa Waktu</b-button>
                    <b-button variant="success"
                      ><b-row class="mt-0" style="font-size: 16px">
                        <b-col
                          ><small>{{ displayHours }}</small></b-col
                        >
                        :
                        <b-col
                          ><small>{{ displayMinutes }}</small></b-col
                        >
                        :
                        <b-col
                          ><small>{{ displaySeconds }}</small></b-col
                        >:
                      </b-row></b-button
                    >
                  </b-button-group>
                </b-col>
              </b-row>
            </template>
            <b-card-text class="text-left">
              <div
                v-html="answerForm.questions[currentNumber].content"
                style="max-width: 800px; overflow-x: scroll"
              />
              <br />
              <b-form-radio-group
                class="mt-2"
                v-model="answerForm.answers[currentNumber]"
              >
                <b-form-radio
                  name="some-radios"
                  value="A"
                  @change="selectAnswer('A')"
                  ><div
                    v-html="
                      answerForm.questions[currentNumber].options[0].content
                    "
                  ></div></b-form-radio
                ><br />

                <b-form-radio
                  name="some-radios"
                  value="B"
                  @change="selectAnswer('B')"
                  ><div
                    v-html="
                      answerForm.questions[currentNumber].options[1].content
                    "
                  ></div></b-form-radio
                ><br />

                <b-form-radio
                  name="some-radios"
                  value="C"
                  @change="selectAnswer('C')"
                  ><div
                    v-html="
                      answerForm.questions[currentNumber].options[2].content
                    "
                  ></div></b-form-radio
                ><br />

                <b-form-radio
                  name="some-radios"
                  value="D"
                  @change="selectAnswer('D')"
                  ><div
                    v-html="
                      answerForm.questions[currentNumber].options[3].content
                    "
                  ></div></b-form-radio
                ><br />

                <b-form-radio
                  name="some-radios"
                  value="E"
                  @change="selectAnswer('E')"
                  ><div
                    v-html="
                      answerForm.questions[currentNumber].options[4].content
                    "
                  ></div
                ></b-form-radio>
              </b-form-radio-group>
            </b-card-text>
          </b-card>
        </b-card-group>
        <b-row>
          <b-col id="nav-btn" cols="2" md="3">
            <b-button
              class="mt-3"
              block
              variant="primary"
              @click="back()"
              :disabled="currentNumber == 0"
            >
              <i class="fas fa-arrow-left mr-2"></i>
              <p>Sebelumnya</p>
            </b-button>
          </b-col>
          <b-col cols="6 offset-1" md="4 offset-1"> </b-col>
          <b-col id="nav-btn" cols="2 offset-1" md="3 offset-1">
            <b-button
              class="mt-3 mb-4"
              block
              variant="primary"
              @click="next()"
              :disabled="currentNumber == answerForm.disable.length - 1"
            >
              <p>Selanjutnya</p>
              <i class="fas fa-arrow-right ml-2"></i>
            </b-button>
          </b-col>
        </b-row>
      </b-col>
      <!-- nomor soal -->
      <b-col col md="3">
        <b-card-group deck>
          <b-card header="Nomor Soal" align="center">
            <b-card-text>
              <b-row>
                <b-col
                  cols="2"
                  md="2 mr-1 mb-2"
                  v-for="(question, index) in answerForm.questions"
                  :key="question._id"
                >
                  <div
                    v-if="
                      answerForm.disable[index] != true &&
                      answerForm.answers[index] != null
                    "
                    class="btn btn-primary number-question"
                    @click="selectNumber(index)"
                  >
                    <p>{{ index + 1 }}</p>
                  </div>
                  <div
                    v-if="answerForm.disable[index] == true"
                    class="btn btn-light number-question"
                    disabled="disabled"
                    @click="selectNumber(index)"
                  >
                    <p>{{ index + 1 }}</p>
                  </div>
                  <div
                    v-if="
                      answerForm.disable[index] != true &&
                      answerForm.answers[index] == null
                    "
                    class="btn btn-secondary number-question"
                    @click="selectNumber(index)"
                  >
                    <p>{{ index + 1 }}</p>
                  </div>
                </b-col>
              </b-row>
            </b-card-text>
          </b-card>
        </b-card-group>
        <b-button
          class="mt-3 mb-5"
          block
          variant="success"
          @click="submitAnswerForm()"
          >Selesai</b-button
        >
      </b-col>
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
  name: "BabakGugurTheOne",
  data() {
    return {
      //started_at: new Date(2021, 0, 23, 20, 0, 0),
      //finished_at: new Date(2021, 0, 23, 21, 20, 0),
      started_at: new Date(2021, 0, 23, 20, 0, 0),
      finished_at: new Date(2021, 0, 23, 21, 20, 0),
      step: 0,
      data: [],
      answerForm: {},
      currentNumber: 0,
      stageInformationOfParticipant: {},
      itemsTab1: [],
      itemsTab2: [{ "Nomor pendaftaran": 0, "Terdaftar pada": 0 }],
      displayHours: 0,
      displayMinutes: 0,
      displaySeconds: 0,
      disable: [],
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
      changeEventDocument: 0,
      loading: false,
      fileName: {
        event_document: "Unggah pakta integritas (*.pdf)",
      },
    };
  },
  computed: {
    totalQuestion() {
      return this.$store.state.question.questions;
    },
    stage() {
      return JSON.parse(
        localStorage.getItem("stage" + this.$route.params.idStage)
      );
    },
    events() {
      return this.$store.state.event.events;
    },
    event() {
      return JSON.parse(localStorage.getItem("event"));
    },
    participant() {
      return JSON.parse(localStorage.getItem("user"));
    },
    stageAnnouncements() {
      return this.$store.state.announcement.participantAnnouncements;
    },
    answerFormByParticipantAndStage() {
      return JSON.parse(
        localStorage.getItem("answerForm2" + this.$route.params.idStage)
      );
    },
    time() {
      var today = new Date();
      today.setHours(today.getHours() + 7);

      return today > this.started_at;
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
    reset() {
      if (
        localStorage.getItem("answerForm2" + this.$route.params.idStage) != null
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
          localStorage.clear();
          this.$router.go();
        });
    },
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
    addFile() {
      this.fileName.event_document = this.$refs.event_document.files[0].name.toString();
      var fileExtension = /[.]/.exec(this.fileName.event_document)
        ? /[^.]+$/.exec(this.fileName.event_document)
        : undefined;
      if (fileExtension != "pdf") {
        Swal.fire({
          title: "Format file tidak sesuai",
          icon: "error",
          showConfirmButton: true,
        }).then();
        this.fileName.event_document = "Unggah pakta integritas (*.pdf)";
      }
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
        },
        () => {}
      );
    },
    nextStep() {
      if (this.time) {
        if (this.stageInformationOfParticipant.document == 1) {
          this.step = 1;
          if (this.answerFormByParticipantAndStage == null) {
            this.createAnswerForm();
          }
        } else {
          Swal.fire({
            title: "Pakta integritas belum diunggah",
            icon: "error",
            showConfirmButton: true,
          });
        }
      } else {
        Swal.fire({
          title: "Waktu pengerjaan belum dimulai",
          icon: "error",
          showConfirmButton: true,
        });
      }
    },
    selectNumber(number) {
      if (this.answerForm.disable[number] == null) {
        this.currentNumber = number;
        this.answerForm.currentNumber = this.currentNumber;
        this.setDisable();
      }
    },
    next() {
      //this.setDisable();
      if (this.answerForm.disable[this.currentNumber + 1] == null) {
        this.setDisable();
        if (this.currentNumber < this.answerForm.questions.length - 1)
          this.currentNumber++;
        this.answerForm.currentNumber = this.currentNumber;
        this.answerForm();
      }
    },
    back() {
      //this.setDisable();
      if (this.answerForm.disable[this.currentNumber - 1] == null) {
        this.setDisable();
        if (this.currentNumber > 0) this.currentNumber--;
        this.answerForm.currentNumber = this.currentNumber;
        this.answerForm();
      }
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
    setDisable() {
      var _answerForm = this.answerForm;
      if (_answerForm.disable[this.currentNumber] != true) {
        _answerForm.disable[this.currentNumber] = true;
      }
      var number = this.currentNumber;
      this.currentNumber = -1;
      this.currentNumber = number;

      this.saveAnswerForm(_answerForm);
    },
    selectAnswer(letter) {
      var _answerForm = this.answerForm;
      _answerForm.answers[this.currentNumber] = letter;
      this.saveAnswerForm(_answerForm);
    },
    saveAnswerForm(_answerForm) {
      localStorage.setItem(
        "answerForm2" + this.$route.params.idStage,
        JSON.stringify(_answerForm)
      );
    },
    createAnswerForm() {
      var _answerForm = {};

      _answerForm.stageId = this.$route.params.idStage;
      _answerForm.participantId = this.participant.id;

      this.$store
        .dispatch("answerForm/createAnswerForm", _answerForm)
        .then((answerForm) => {
          var _answerForm = JSON.parse(JSON.stringify(answerForm));

          if (!_answerForm.session) {
            var today = new Date();
            var started_at = new Date(this.stage.started_at);
            var finished_at = new Date(this.stage.finished_at);

            started_at = new Date(
              started_at.getTime() + today.getTimezoneOffset() * 60 * 1000
            );
            finished_at = new Date(
              finished_at.getTime() + today.getTimezoneOffset() * 60 * 1000
            );

            started_at.setHours(
              started_at.getHours() +
                parseInt(this.stageInformationOfParticipant.session)
            );
            finished_at.setHours(
              finished_at.getHours() +
                parseInt(this.stageInformationOfParticipant.session)
            );

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

            var disable = [];
            _answerForm.answers = [];

            _answerForm.questions.forEach(() => {
              disable.push(null);
              _answerForm.answers.push(null);
            });

            _answerForm.disable = disable;

            localStorage.setItem(
              "answerForm2" + this.$route.params.idStage,
              JSON.stringify(_answerForm)
            );

            this.answerForm = _answerForm;

            this.step = 1;
          }
        });
    },
    submitAnswerForm() {
      new Swal({
        title: "Apakah anda yakin untuk menyelesaikan saat ini?",
        showDenyButton: true,
        buttons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          this.answerForm.eventName = "The One";
          this.answerForm.stageName = "preliminary";
          var index = 0;
          this.answerForm.questions.forEach(() => {
            this.answerForm.questions[index].content = null;
            this.answerForm.questions[index].answers = null;
            index++;
          });
          this.$store
            .dispatch("answerForm/submitAnswerForm", this.answerForm)
            .then((response) => {
              this.answerForm = response;
              this.saveAnswerForm(response);
              this.step = 0;
            });
        }
      });
    },
    getAllQuestionByStage() {
      this.$store.dispatch(
        "question/getAllQuestionByStage",
        this.$route.params.idStage
      );
    },
    updateQuestion() {
      this.$store.dispatch("question/updateQuestion", this.question);
    },
    getDateTime: function (type, date) {
      return datetime.getDateTime(type, date);
    },
    getStage() {
      this.$store.dispatch("stage/getStage", this.$route.params.idStage);
    },
    getAnswerFormByParticipantAndStage() {
      if (this.answerFormByParticipantAndStage == null) {
        this.$store.dispatch(
          "answerForm/getAnswerFormByParticipantAndStage",
          this.answerForm
        );
      }
    },
    getStageInformationOfParticipant() {
      this.participant.participant.events.forEach((event) => {
        event.stages.forEach((stage) => {
          if (stage.id == this.$route.params.idStage) {
            this.stageInformationOfParticipant = stage;
            this.stageInformationOfParticipant.number = event.number;
            this.stageInformationOfParticipant.document = event.document;

            this.stageInformationOfParticipant.started_at = this.started_at.toISOString();
            this.stageInformationOfParticipant.finished_at = this.finished_at.toISOString();
          }
        });
      });
    },
    showRemaining() {
      const timer = setInterval(() => {
        var now = new Date();
        now.setHours(now.getHours() + 7);

        const distance = this.finished_at.getTime() - now.getTime();

        if (this.answerForm.disable != null) this.setDisable();

        if (this.answerForm.correct != 0 && this.answerForm.wrong != 0) {
          if (this.step == 1) this.step = 0;
        }

        if (distance < 0) {
          clearInterval(timer);
          this.show = false;
          if (this.step == 1) this.step = 0;
          return;
        }

        if (distance < 0) {
          this.answerForm.eventName = "The One";
          this.answerForm.stageName = "preliminary";
          this.$store
            .dispatch("answerForm/submitAnswerForm", this.answerForm)
            .then((response) => {
              this.step = 0;
              this.answerForm = response;
              this.saveAnswerForm(response);
            });
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
    getAnswerForm() {
      this.timer = setInterval(() => {
        if (
          this.answerForm.stage == this.$route.params.idStage ||
          this.answerForm.stageId == this.$route.params.idStage
        ) {
          if (this.answerFormByParticipantAndStage != null) {
            if (this.answerFormByParticipantAndStage.score != null)
              clearInterval(this.timer);
          }

          if (this.answerFormByParticipantAndStage != null)
            this.answerForm = JSON.parse(
              localStorage.getItem("answerForm2" + this.$route.params.idStage)
            );

          if (this.answerForm != null && this.answerForm.finished_at != null) {
            const format = this.answerForm.finished_at.split("-");
            this.year = parseInt(format[0]);
            this.month = parseInt(format[1]);
            const time = format[2].split("T");
            this.date = parseInt(time[0]);
            const clock = time[1].split(":");
            this.hour = parseInt(clock[0]);
            this.minute = parseInt(clock[1]);

            this.showRemaining();
          }
        } else {
          this.answerForm.stageId = this.$route.params.idStage;
          this.answerForm.participantId = this.participant.id;

          this.getStage();
          this.showRemaining();
          this.getAnswerFormByParticipantAndStage();

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
      }, 200);
    },
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  created() {
    this.answerForm.stageId = this.$route.params.idStage;
    this.answerForm.participantId = this.participant.id;

    this.getStage();
    this.showRemaining();
    this.getAllAnnouncementByStage();
    this.getAnswerFormByParticipantAndStage();
    this.getAnswerForm();

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
