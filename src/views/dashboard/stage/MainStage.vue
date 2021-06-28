<template>
  <div v-if="user.roles.includes('participant')">
    <div v-if="event.name == 'OSM'">
      <ParticipantPenyisihanOSM v-if="stage.name == 'preliminary'" />
      <ParticipantSemifinalOSM v-if="stage.name == 'semifinal'" />
      <ParticipantFinalOSM v-if="stage.name == 'final'" />
    </div>

    <div v-if="event.name == 'Started'">
      <ParticipantPekanFinalPoster
        :title="'Pekan Final Poster'"
        v-if="stage.name == 'preliminary'"
      />
      <ParticipantPekanKreativitasPoster
        :title="'Pekan Kreativitas Poster'"
        v-if="stage.name == 'final'"
      />
    </div>

    <div v-if="event.name == 'The One'">
      <ParticipantPenyisihanRangking1 
        :title="'Penyisihan Ranking 1'"
        v-if="stage.name == 'preliminary'"/>
      <ParticipantSemifinalRangking1 
        :title="'Semifinal Ranking 1'"
        v-if="stage.name == 'semifinal'"/>
      <ParticipantFinalRangking1 
        :title="'Final Ranking 1'"
        v-if="stage.name == 'final'"/>
    </div>

    <div v-if="event.name == 'Sigma'">
      <ParticipantSigma 
        :title="'Sigma'"
        v-if="stage.name == 'preliminary'"/>
    </div>

    <div v-if="event.name == 'Open House'">
      <ParticipantOpenHouse 
        :title="'Open House'"
        v-if="stage.name == 'preliminary'"/>
    </div>
  </div>
</template>
<script>
import ParticipantPenyisihanOSM from "./../../../components/dashboard/participant/stage/osm/PenyisihanOSM.vue";
import ParticipantSemifinalOSM from "./../../../components/dashboard/participant/stage/osm/SemifinalOSM.vue";
import ParticipantFinalOSM from "./../../../components/dashboard/participant/stage/osm/FinalOSM.vue";

import ParticipantPekanFinalPoster from "./../../../components/dashboard/participant/stage/poster/IndexPoster.vue";
import ParticipantPekanKreativitasPoster from "./../../../components/dashboard/participant/stage/poster/FinalPoster.vue";

import ParticipantPenyisihanRangking1 from "./../../../components/dashboard/participant/stage/rangking1/PenyisihanRangking1.vue";
import ParticipantSemifinalRangking1 from "./../../../components/dashboard/participant/stage/rangking1/SemifinalMainRangking1.vue";
import ParticipantFinalRangking1 from "./../../../components/dashboard/participant/stage/rangking1/FinalRanking1.vue";

import ParticipantSigma from "./../../../components/dashboard/participant/stage/sigma/IndexSigma.vue";

import ParticipantOpenHouse from "./../../../components/dashboard/participant/stage/openhouse/IndexOpenHouse.vue";

export default {
  name: "IndexStage",
  components: {
    ParticipantPenyisihanOSM,
    ParticipantSemifinalOSM,
    ParticipantFinalOSM,
    ParticipantPekanKreativitasPoster,
    ParticipantPekanFinalPoster,
    ParticipantPenyisihanRangking1,
    ParticipantSemifinalRangking1,
    ParticipantFinalRangking1,
    ParticipantSigma,
    ParticipantOpenHouse
  },
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
    stage() {
      return this.$store.state.stage.stage;
    },
    event() {
      return JSON.parse(localStorage.getItem("event"));
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
