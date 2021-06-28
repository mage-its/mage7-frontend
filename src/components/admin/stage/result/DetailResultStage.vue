<template>
  <div>
    <div v-if="event.name == 'OSM'">
      <b-container class="bg-white p-3 mt-3 shadow-sm rounded">
        <h1 class="mt-2">Data Peserta</h1>
        <hr />
        <br />
        <div class="p-3 border">
          <table class="table">
            <tr>
              <td><b>Nama Pengguna</b></td>
              <td>{{ answerForm.participant.username }}</td>
            </tr>
            <tr>
              <td><b>Nama Lengkap</b></td>
              <td>
                {{
                  answerForm.participant.firstname +
                  " " +
                  answerForm.participant.lastname
                }}
              </td>
            </tr>
            <tr>
              <td><b>Nomor Peserta</b></td>
              <td>{{ stageInformationOfParticipant.number }}</td>
            </tr>
            <tr>
              <td><b>Pakta Integritas</b></td>
              <td>
                <a
                  class="btn btn-primary ml-3 mt-3"
                  target="blank"
                  :href="
                    'http://anavaugm.com/event_document_' +
                    event._id +
                    answerForm.participant._id +
                    '.pdf'
                  "
                >
                  <i class="fa fa-download" />&nbsp;Unduh
                </a>
              </td>
            </tr>
          </table>
        </div>
        <h1 class="mt-3">Lembar Jawaban</h1>
        <hr />
        <br />
        <div class="p-3 border" v-if="stage.name == 'preliminary'">
          <b-row
            class="bg-white p-3 mb-2 shadow-sm rounded text-bold"
            no-gutters
          >
            <b-col class="text-center" md="3">
              <p>Nomor</p>
            </b-col>
            <b-col class="text-center" md="3">
              <p>Kunci</p>
            </b-col>
            <b-col class="text-center" md="3">
              <p>Jawaban</p>
            </b-col>
            <b-col class="text-center" md="3">
              <p>Status</p>
            </b-col>
          </b-row>
          <b-row
            class="bg-white p-3 mb-2 shadow-sm rounded"
            no-gutters
            v-for="(question, index) in questions"
            :key="question._id"
          >
            <b-col class="text-center" md="3">
              <p>{{ question.number }}</p>
              <br />
            </b-col>
            <b-col class="text-center" md="3">
              <p>{{ question.key }}</p>
            </b-col>
            <b-col class="text-center" md="3">
              <p v-if="answers[index] != null">
                {{ answers[index] }}
              </p>
              <p v-else>-</p>
            </b-col>
            <b-col
              class="text-center text-success"
              md="2"
              v-if="answers[index] == question.key"
            >
              <i class="fas fa-check"></i>
            </b-col>
            <b-col class="text-center text-danger" md="2" v-else>
              <i class="fas fa-times"></i>
            </b-col>
          </b-row>
        </div>
        <div class="p-3 border" v-if="stage.name == 'semifinal' && event.name == 'OSM'">
          <b-row
            class="bg-white p-3 mb-2 shadow-sm rounded text-bold"
            no-gutters
          >
            <b-col class="text-center" md="3">
              <p>Nomor</p>
            </b-col>
            <b-col class="text-center" md="3">
              <p>Jawaban</p>
            </b-col>
          </b-row>
          <b-row
            class="bg-white p-3 mb-2 shadow-sm rounded text-bold"
            no-gutters
          >
            <b-col class="text-center" md="3">
              <p>1</p>
            </b-col>
            <b-col class="text-center" md="3">
              <a
                class="btn btn-primary ml-3 mt-3"
                target="blank"
                :href="
                  'http://anavaugm.com/answer_' +
                  answerForm.answers[0]._id +
                  '.pdf'
                "
                v-if="answerForm.answers[0].uploaded == 1"
              >
                <i class="fa fa-download" />&nbsp;Unduh
              </a>
              <p v-else>-</p>
            </b-col>
          </b-row>
          <b-row
            class="bg-white p-3 mb-2 shadow-sm rounded text-bold"
            no-gutters
          >
            <b-col class="text-center" md="3">
              <p>2</p>
            </b-col>
            <b-col class="text-center" md="3">
              <a
                class="btn btn-primary ml-3 mt-3"
                target="blank"
                :href="
                  'http://anavaugm.com/answer_' +
                  answerForm.answers[1]._id +
                  '.pdf'
                "
                v-if="answerForm.answers[1].uploaded == 1"
              >
                <i class="fa fa-download" />&nbsp;Unduh
              </a>
              <p v-else>-</p>
            </b-col>
          </b-row>
        </div>
        <div class="p-3 border" v-if="stage.name == 'final' && event.name == 'OSM'">
          <b-row
            class="bg-white p-3 mb-2 shadow-sm rounded text-bold"
            no-gutters
          >
            <b-col class="text-center" md="3">
              <p>Nomor</p>
            </b-col>
            <b-col class="text-center" md="3">
              <p>Jawaban</p>
            </b-col>
          </b-row>
          <b-row
            class="bg-white p-3 mb-2 shadow-sm rounded text-bold"
            no-gutters
          >
            <b-col class="text-center" md="3">
              <p>1</p>
            </b-col>
            <b-col class="text-center" md="3">
              <a
                class="btn btn-primary ml-3 mt-3"
                target="blank"
                :href="
                  'http://anavaugm.com/answer_' +
                  answerForm.answers[0]._id +
                  '.pdf'
                "
                v-if="answerForm.answers[0].uploaded == 1"
              >
                <i class="fa fa-download" />&nbsp;Unduh
              </a>
              <p v-else>-</p>
            </b-col>
          </b-row>
          <b-row
            class="bg-white p-3 mb-2 shadow-sm rounded text-bold"
            no-gutters
          >
            <b-col class="text-center" md="3">
              <p>2</p>
            </b-col>
            <b-col class="text-center" md="3">
              <a
                class="btn btn-primary ml-3 mt-3"
                target="blank"
                :href="
                  'http://anavaugm.com/answer_' +
                  answerForm.answers[1]._id +
                  '.pptx'
                "
                v-if="answerForm.answers[1].uploaded == 1"
              >
                <i class="fa fa-download" />&nbsp;Unduh
              </a>
              <p v-else>-</p>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </div>
    <div v-if="event.name == 'The One'">
      <b-container
        class="bg-white p-3 mt-3 shadow-sm rounded"
        v-if="stage.name == 'preliminary'"
      >
        <h1 class="mt-2">Data Peserta</h1>
        <hr />
        <br />
        <div class="p-3 border">
          <table class="table">
            <tr>
              <td><b>Nama Pengguna</b></td>
              <td>{{ answerForm.participant.username }}</td>
            </tr>
            <tr>
              <td><b>Nama Lengkap</b></td>
              <td>
                {{
                  answerForm.participant.firstname +
                  " " +
                  answerForm.participant.lastname
                }}
              </td>
            </tr>
            <tr>
              <td><b>Nomor Peserta</b></td>
              <td>{{ stageInformationOfParticipant.number }}</td>
            </tr>
            <tr>
              <td><b>Pakta Integritas</b></td>
              <td>
                <a
                  class="btn btn-primary ml-3 mt-3"
                  target="blank"
                  :href="
                    'http://anavaugm.com/event_document_' +
                    event._id +
                    answerForm.participant._id +
                    '.pdf'
                  "
                >
                  <i class="fa fa-download" />&nbsp;Unduh
                </a>
              </td>
            </tr>
          </table>
        </div>

        <h1 class="mt-3">Lembar Jawaban</h1>
        <hr />
        <br />
        <div class="p-3 border">
          <b-row
            class="bg-white p-3 mb-2 shadow-sm rounded text-bold"
            no-gutters
          >
            <b-col class="text-center" md="2">
              <p>Nomor</p>
            </b-col>
            <b-col class="text-center" md="2">
              <p>Kunci</p>
            </b-col>
            <b-col class="text-center" md="2">
              <p>Jawaban</p>
            </b-col>
            <b-col class="text-center" md="2">
              <p>Status</p>
            </b-col>
            <b-col class="text-center" md="2">
              <p>Poin</p>
            </b-col>
          </b-row>
          <b-row
            class="bg-white p-3 mb-2 shadow-sm rounded"
            no-gutters
            v-for="(question, index) in questions"
            :key="question._id"
          >
            <b-col class="text-center" md="2">
              <p>{{ question.number }}</p>
            </b-col>
            <b-col class="text-center" md="2">
              <p>{{ question.key }}</p>
            </b-col>
            <b-col class="text-center" md="2">
              <p v-if="answers[index] != null">
                {{ answers[index] }}
              </p>
              <p v-else>-</p>
            </b-col>
            <b-col
              class="text-center text-success"
              md="2"
              v-if="answers[index] == question.key"
            >
              <i class="fas fa-check"></i>
            </b-col>
            <b-col class="text-center text-danger" md="2" v-else>
              <i class="fas fa-times"></i>
            </b-col>
            <b-col class="text-center" md="2">
              <p>{{ question.poin }}</p>
            </b-col>
          </b-row>
        </div>
        <h1 class="mt-3">Penilaian</h1>
        <hr />
        <br />
        <div class="p-3 border text-center">
          <p>
            Benar : <b>{{ answerForm.correct }}</b>
          </p>
          <br />
          <p>
            Salah : <b>{{ answerForm.wrong }}</b>
          </p>
          <br />
          <p>
            Kosong : <b>{{ answerForm.empty }}</b>
          </p>
          <br />
          <p>
            Nilai akhir : <b>{{ answerForm.score }}</b>
          </p>
          <br />
        </div>
      </b-container>
      <b-container
        class="bg-white p-3 mt-3 shadow-sm rounded"
        v-if="stage.name == 'semifinal'"
      >
        <h1 class="mt-2">Data Peserta</h1>
        <hr />
        <br />
        <div class="p-3 border">
          <table class="table">
            <tr>
              <td><b>Nama Pengguna</b></td>
              <td>{{ answerForm.participant.username }}</td>
            </tr>
            <tr>
              <td><b>Nama Lengkap</b></td>
              <td>
                {{
                  answerForm.participant.firstname +
                  " " +
                  answerForm.participant.lastname
                }}
              </td>
            </tr>
            <tr>
              <td><b>Nomor Peserta</b></td>
              <td>{{ stageInformationOfParticipant.number }}</td>
            </tr>
            <tr>
              <td><b>Pakta Integritas</b></td>
              <td>
                <a
                  class="btn btn-primary ml-3 mt-3"
                  target="blank"
                  :href="
                    'http://anavaugm.com/event_document_' +
                    event._id +
                    answerForm.participant._id +
                    '.pdf'
                  "
                >
                  <i class="fa fa-download" />&nbsp;Unduh
                </a>
              </td>
            </tr>
          </table>
        </div>
        <h1 class="mt-3">Lembar Jawaban</h1>
        <hr />
        <br />
       <div class="p-3 border" v-if="stage.name == 'semifinal'">
          <b-row
            class="bg-white p-3 mb-2 shadow-sm rounded text-bold"
            no-gutters
          >
            <b-col class="text-center" md="3">
              <p>Nomor</p>
            </b-col>
            <b-col class="text-center" md="3">
              <p>Jawaban</p>
            </b-col>
          </b-row>
          <b-row
            class="bg-white p-3 mb-2 shadow-sm rounded text-bold"
            no-gutters
            v-for="(answer, index) in answerForm.answers"
            :key="answer._id"
          >
            <b-col class="text-center" md="3">
              <p>{{ index + 1 }}</p>
            </b-col>
            <b-col class="text-center" md="3">
              <a
                class="btn btn-primary ml-3 mt-3"
                target="blank"
                :href="
                  'http://anavaugm.com/answer_' +
                  answerForm.answers[index]._id +
                  '.jpg'
                "
                v-if="answerForm.answers[index].uploaded == 1"
              >
                <i class="fa fa-download" />&nbsp;Unduh
              </a>
              <p v-else>-</p>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </div>
    <div v-if="event.name == 'Started'">
      <b-container
        class="bg-white p-3 mt-3 shadow-sm rounded"
      >
        <h1 class="mt-2">Data Peserta</h1>
        <hr />
        <br />
        <div class="p-3 border">
          <table class="table">
            <tr>
              <td><b>Nama Pengguna</b></td>
              <td>{{ answerForm.participant.username }}</td>
            </tr>
            <tr>
              <td><b>Nama Lengkap</b></td>
              <td>
                {{
                  answerForm.participant.firstname +
                  " " +
                  answerForm.participant.lastname
                }}
              </td>
            </tr>
            <tr>
              <td><b>Nomor Peserta</b></td>
              <td>{{ stageInformationOfParticipant.number }}</td>
            </tr>
            <tr>
              <td><b>Surat Orisinalitas</b></td>
              <td>
                <a
                  class="btn btn-primary ml-3 mt-3"
                  target="blank"
                  :href="
                    'http://anavaugm.com/event_document_' +
                    event._id +
                    answerForm.participant._id +
                    '.pdf'
                  "
                >
                  <i class="fa fa-download" />&nbsp;Unduh
                </a>
              </td>
            </tr>
          </table>
        </div>
        <h1 class="mt-3">Poster</h1>
        <hr />
        <br />
        <div class="p-3 border">
          <embed
            :src="
              'http://anavaugm.com/answer_' + answerForm.answers[0]._id + '.pdf'
            "
            style="height: 900px; width: 600px"
          />
        </div>
        <h1 class="mt-3">Penilaian</h1>
        <hr />
        <br />
        <div class="p-3 border">
          <b-form-input
            type="text"
            id="title"
            placeholder="Masukan Nilai"
            v-model="answerForm.score"
          ></b-form-input>
          <a
            href="#"
            @click="setAnswerFormScore()"
            class="btn btn-primary mt-3"
            type="submit"
          >
            <i class="far fa-save text-white"></i>
            Simpan
          </a>
        </div>
      </b-container>
    </div>
  </div>
</template>
<script>
import Swal from "sweetalert2";

export default {
  name: "DetailResultStage",
  data() {
    return {
      stageInformationOfParticipant: {},
    };
  },
  computed: {
    answerForm() {
      return this.$store.state.answerForm.answerForm;
    },
    questions() {
      var questions = JSON.parse(this.answerForm._questions);
      return questions;
    },
    answers() {
      var answers = JSON.parse(this.answerForm._answers);
      return answers;
    },
    stage() {
      return this.$store.state.stage.stage;
    },
    event() {
      return JSON.parse(localStorage.getItem("event"));
    },
  },
  methods: {
    getAnswerForm() {
      this.$store
        .dispatch("answerForm/getAnswerForm", this.$route.params.idResult)
        .then(() => {
          this.getStageInformationOfParticipant();
        });
    },
    setAnswerFormScore() {
      this.$store
        .dispatch("answerForm/setAnswerFormScore", this.answerForm)
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "Nilai berhasil diubah",
            showConfirmButton: true,
          }).then(() => {});
        });
    },
    getStageInformationOfParticipant() {
      this.answerForm.participant.participant.events.forEach((event) => {
        event.stages.forEach((stage) => {
          if (stage.id == this.$route.params.idStage) {
            this.stageInformationOfParticipant = stage;
            this.stageInformationOfParticipant.number = event.number;
            this.stageInformationOfParticipant.document = event.document;

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

            this.stageInformationOfParticipant.started_at = started_at.toISOString();
            this.stageInformationOfParticipant.finished_at = finished_at.toISOString();
          }
        });
      });
    },
  },
  created() {
    this.getAnswerForm();
  },
};
</script>
<style scoped>
p {
  display: inline;
}
.profile {
  height: 40px;
  width: 40px;
  border-radius: 20px;
}
</style>
