<template>
  <div>
    <div>
      <div v-if="stage.name == 'preliminary'">
        <h3 class="text-left mt-4">Hasil</h3>
        <b-row class="bg-white p-3 mb-2 shadow-sm rounded text-bold" no-gutters>
          <b-col class="text-left" md="4">
            <p>Peserta</p>
          </b-col>
          <b-col md="2">
            <p>Benar</p>
          </b-col>
          <b-col md="2">
            <p>Kosong</p>
          </b-col>
          <b-col md="2">
            <p>Salah</p>
          </b-col>
          <b-col md="2">
            <p>Nilai</p>
          </b-col>
        </b-row>
        <b-row
          class="bg-white p-2 mb-2 shadow-sm rounded"
          no-gutters
          v-for="(answerForm, index) in answerForms"
          :key="answerForm._id"
        >
          <b-col md="1">
            {{ index + 1 }}
          </b-col>
          <b-col md="3">
            <p class="text-bold">{{ answerForm.participant.username }}</p>
            <br />
            <p class="text-secondary">
              {{
                answerForm.participant.firstname +
                " " +
                answerForm.participant.lastname
              }}
            </p>
          </b-col>
          <b-col md="2">
            {{ answerForm.correct }}
          </b-col>
          <b-col md="2">
            {{ answerForm.empty }}
          </b-col>
          <b-col md="2">
            {{ answerForm.wrong }}
          </b-col>
          <b-col md="2">
            {{ answerForm.score }}
          </b-col>
        </b-row>
      </div>
      <div v-else>
        <h3 class="text-left mt-4">Hasil</h3>
        <b-row class="bg-white p-3 mb-2 shadow-sm rounded text-bold" no-gutters>
          <b-col class="text-left" md="4">
            <p>Peserta</p>
          </b-col>
        </b-row>
        <b-row
          class="bg-white p-2 mb-2 shadow-sm rounded"
          no-gutters
          v-for="(answerForm, index) in answerForms"
          :key="answerForm._id"
        >
          <b-col md="1">
            {{ index + 1 }}
          </b-col>
          <b-col md="3">
            <p class="text-bold">{{ answerForm.participant.username }}</p>
            <br />
            <p class="text-secondary">
              {{
                answerForm.participant.firstname +
                " " +
                answerForm.participant.lastname
              }}
            </p>
          </b-col>
          <b-col md="3">
            <router-link
              class="btn btn-primary"
              :to="'result/' + answerForm._id"
            >
              <i class="fas fa-search"></i>
              Detail
            </router-link>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ListParticipantStage",
  data() {
    return {
      outline: {
        participants: 0,
        pay: 0,
      },
      indexEvent: 0,
      indexStage: 0,
    };
  },
  computed: {
    answerForms() {
      var list = this.$store.state.answerForm.answerForms;
      var index = 0;
      list.forEach(() => {
        if (this.event.name == "OSM" && this.stage.name == "preliminary") {
          list[index].wrong = 60 - list[index].correct - list[index].empty;
          list[index].score = 4 * list[index].correct - list[index].wrong;
        } else if (
          this.event.name == "The One" &&
          this.stage.name == "preliminary"
        ) {
          list[index].wrong = 49 - list[index].correct - list[index].empty;
        }
        list[index].questions = null;
        list[index].answers = null;
        list[index]._questions = null;
        list[index]._answers = null;
        list[index].created_at = null;
        list[index].updated_at = null;

        index++;
      });
      list.sort((a, b) => b.score - a.score);

      return list;
    },
    participants() {
      var index = 0;
      var list = [];
      this.answerForms.forEach(() => {
        list.push({
          name:
            this.answerForms[index].participant.firstname +
            this.answerForms[index].participant.lastname,
          correct: this.answerForms[index].correct,
          empty: this.answerForms[index].empty,
          wrong: this.answerForms[index].wrong,
          score: this.answerForms[index].score,
        });
        index++;
      });

      return list;
    },
    stage() {
      return JSON.parse(
        localStorage.getItem("stage" + this.$route.params.idStage)
      );
    },
    event() {
      return JSON.parse(localStorage.getItem("event"));
    },
  },
  methods: {
    getAnswerForm() {
      this.$store.dispatch(
        "answerForm/getAnswerFormByStage",
        this.$route.params.idStage
      );
    },
    getPaymentStatus(participant) {
      var paymentStatus = 0;
      participant.participant.events.forEach((event) => {
        event.stages.forEach((stage) => {
          if (stage.id == this.stage._id && event.number) paymentStatus = true;
        });
      });
      return paymentStatus;
    },
    getNumberParticipant(participant) {
      participant.participant.events.forEach((event) => {
        if (event.name == this.event.name) {
          return event.number;
        }
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
