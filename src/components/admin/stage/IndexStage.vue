<template>
  <b-container>
    <div class="bg-light text-dark mb-3 rounded shadow-sm header">
      <h3
        v-if="stage.name == 'preliminary'"
        class="text-left d-inline float-left">
        <i class="fas fa-trophy"></i>
        {{ getStageName(stage.name) }}
      </h3>
      <div class="float-right">
        <router-link :to="{ name: 'ListParticipantStage' }">
          <button class="btn btn-secondary active">Peserta</button>
        </router-link>
        <router-link :to="{ name: 'MainQuestionStage' }">
          <button class="btn btn-secondary ml-2">Soal</button>
        </router-link>
        <router-link :to="{ name: 'ListResultStage' }">
          <button class="btn btn-secondary active ml-2">Hasil</button>
        </router-link>
      </div>
    </div>
    <hr />
    <router-view />
  </b-container>
</template>
<script>
export default {
  name: "IndexStage",
  computed: {
    stage() {
      return JSON.parse(localStorage.getItem('stage'+this.$route.params.idStage));
    },
  },
  methods: {
    getStage() {
      this.$store.dispatch("stage/getStage", this.$route.params.idStage);
    },
    getStageName(name) {
      switch (name) {
        case "preliminary":
          name = "Penyisihan";
          break;
        case "semifinal":
          name = "Semifinal";
          break;
        case "final":
          name = "Final";
          break;
      }
      return name;
    },
  },
  created() {
    this.getStage();
  },
};
</script>
<style scoped>
.header {
  min-height: 90px;
  min-width: 100%;
  padding: 30px;
}
</style>
