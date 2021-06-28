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
                <td>-</td>
              </tr>
              <tr class="border">
                <td><b>Selesai pengerjaan</b></td>
                <td>-</td>
              </tr>
            </table>
          </v-tab>
          <v-tab title="Meet">
            <div
              class="container bg-white p-3 text-center text-dark rounded-lg mt-2 mb-2"
            >
              <p>
                <i class="fas fa-exclamation-triangle fa-2x"></i>
                <br />
                Link meet belum diunggah
              </p>
            </div>
          </v-tab>
          <v-tab title="Pengumuman">
            <div
              class="container bg-white p-3 text-center text-dark rounded-lg mt-2 mb-2"
            >
              <p>
                <i class="fas fa-exclamation-triangle fa-2x"></i>
                <br />
                Belum ada pengumuman
              </p>
            </div>
          </v-tab>
        </vue-tabs>
      </b-container>

      <input
      type="submit"
        value="Mulai"
        class="btn btn-purple mt-3"
        @click="nextStep()"
        disabled
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
                <b-col md="8">Soal No. 25</b-col>
                <b-col md="4" class="text-right">
                  <b-button-group size="sm">
                    <b-button variant="secondary">Sisa Waktu</b-button>
                    <b-button variant="success">01:00:02</b-button>
                  </b-button-group>
                </b-col>
              </b-row>
            </template>
            <b-card-text class="text-left">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusantium porro quas ea iusto voluptas ullam quisquam quis
              nostrum nemo ipsam obcaecati, nam illum hic. Unde ipsam nostrum
              debitis delectus nobis. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quod, esse ab? Amet minima quaerat facilis,
              ratione corrupti odio! Nam deleniti accusamus reiciendis sit vero
              accusantium minus autem placeat voluptatibus sunt.
              <br />
              <b-form-group class="mt-2">
                <b-form-radio name="some-radios" value="A"
                  >Option A</b-form-radio
                >
                <b-form-radio name="some-radios" value="B"
                  >Option B</b-form-radio
                >
                <b-form-radio name="some-radios" value="C"
                  >Option C</b-form-radio
                >
                <b-form-radio name="some-radios" value="D"
                  >Option D</b-form-radio
                >
                <b-form-radio name="some-radios" value="E"
                  >Option E</b-form-radio
                >
              </b-form-group>
            </b-card-text>
          </b-card>
        </b-card-group>
        <b-row>
          <b-col id="nav-btn" cols="2" md="3">
            <b-button class="mt-3" block variant="primary">
              <i class="fas fa-arrow-left"></i>
              <p>Sebelumnya</p>
            </b-button>
          </b-col>
          <b-col cols="6 offset-1" md="4 offset-1">
            <b-button class="mt-3" block variant="warning">
              <b-form-checkbox
                id="checkbox-1"
                v-model="status"
                name="checkbox-1"
                value="accepted"
                unchecked-value="not_accepted"
              >
                Ragu-Ragu
              </b-form-checkbox>
            </b-button>
          </b-col>
          <b-col id="nav-btn" cols="2 offset-1" md="3 offset-1">
            <b-button class="mt-3 mb-4" block variant="primary">
              <p>Selanjutnya</p>
              <i class="fas fa-arrow-right"></i>
            </b-button>
          </b-col>
        </b-row>
      </b-col>

      <!-- nomor soal -->
      <b-col col md="3">
        <b-card-group deck>
          <b-card
            border-variant="secondary"
            header="Nomor Soal"
            header-bg-variant="white"
            header-text-variant="black"
            align="center"
          >
            <b-card-text>
              <b-row>
                {{ JumlahSoal() }}
                <b-col
                  cols="2"
                  md="2 mr-1 mb-2"
                  v-for="number in data"
                  :key="number"
                >
                  <b-button id="number-question">
                    <p>{{ number }}</p>
                  </b-button>
                </b-col>
              </b-row>
            </b-card-text>
          </b-card>
        </b-card-group>
        <b-button class="mt-3 mb-5" block variant="danger"
          >Hentikan Ujian</b-button
        >
      </b-col>
    </b-row>
  </div>
</template>
<script>
import * as datetime from "./../../../../../services/datetime";

export default {
  name: "PenyisihanTheOne",
  data() {
    return {
      step: 0,
      data: [],
      answerForm: {},
      stageInformationOfParticipant: {},
      itemsTab1: [],
      itemsTab2: [{ "Nomor pendaftaran": 0, "Terdaftar pada": 0 }],
    };
  },
  computed: {
    questions() {
      return this.$store.state.question.questions;
    },
    stage() {
      return this.$store.state.stage.stage;
    },
    participant() {
      return JSON.parse(localStorage.getItem("user"));
    },
  },
  methods: {
    nextStep() {
      this.step = 1;
    },
    createAnswerForm() {
      let answerForm = new FormData();

      answerForm.append("participantId", this.answerForm.participantId);
      answerForm.append("stageId", this.answerForm.stageId);
      answerForm.append("file", this.$refs.file.files[0]);

      this.$store.dispatch("answerForm/createAnswerForm", answerForm);
    },
    getQuestion() {
      this.$store.dispatch(
        "question/getAllQuestionByStage",
        this.$route.params.idStage
      );
    },
    updateQuestion() {
      this.$store.dispatch("question/updateQuestion", this.question);
    },
    getDateTime: function(type, date) {
      return datetime.getDateTime(type, date);
    },
    getStage() {
      this.$store.dispatch("stage/getStage", this.$route.params.idStage);
    },
    getStageInformationOfParticipant() {
      this.participant.participant.events.forEach((event) => {
        event.stages.forEach((stage) => {
          if (stage.id == this.stage._id) {
            this.stageInformationOfParticipant = stage;
          }
        });
      });
    },
    JumlahSoal() {
      for (let i = 0; i < 60; i++) {
        this.data[i] = i + 1;
      }
    },
  },
  created() {
    this.getStage();
    this.answerForm.stageId = this.$route.params.idStage;
    this.answerForm.participantId = this.participant.id;
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

#dropFileForm #fileInput {
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
