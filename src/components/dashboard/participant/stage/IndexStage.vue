<template>
  <b-container>
    <div class="bg-light text-dark mb-3 rounded shadow-sm header">
      <h3 class="text-left d-inline float-left">
        <i class="fas fa-trophy"></i>
        {{ event.name }}
        <small> {{ getStageName(stage.name) }}</small>
      </h3>
      <br />
    </div>
    <hr />
    <router-view :key="$route.fullPath" />
  </b-container>
</template>
<script>
export default {
  name: "IndexStage",
  data() {
    return {
      event: {},
    };
  },
  computed: {
    stage() {
      return this.$store.state.stage.stage;
    },
  },
  methods: {
    getStage() {
      this.$store.dispatch("stage/getStage", this.$route.params.idStage);
    },
    getStageName(name) {
      switch (this.event.name) {
        case "OSM":
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
          break;
        case "The One":
          switch (name) {
            case "preliminary":
              name = "Babak Gugur";
              break;
            case "semifinal":
              name = "Babak Championship";
              break;
          }
          break;
        case "Started":
          switch (name) {
            case "preliminary":
              name = "Pekan Kreativitas";
              break;
            case "semifinal":
              name = "Final";
              break;
          }
          break;
        case "Sigma":
          name = "";
          break;
        case "Open House":
          name = "";
          break;
      }
      return name;
    },
  },
  created() {
    this.getStage();

    const that = this;

    setInterval(() => {
      that.event = JSON.parse(localStorage.getItem("event"));
    }, 100);
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
