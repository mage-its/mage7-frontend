<template>
  <div>
    <div v-if="user.roles.includes('admin')">
      <AdminListQuestionStage />
    </div>
    <div v-if="user.roles.includes('participant')">
      <div v-if="event.name == 'OSM'">
        <ParticipantPenyisihanOSM v-if="stage.name == 'semifinal'" />
        <ParticipantSemifinalOSM v-if="stage.name == 'semifinal'" />
        <ParticipantFinalOSM />
      </div>
      <UploadAnswerFile />

      <div v-if="event.name == 'Poster'">
        <ParticipantPekanFinalPoster :title="'Pekan Final Poster'" v-if="stage.name == 'preliminary'" />
        <ParticipantPekanKreativitasPoster
          :title="'Pekan Kreativitas Poster'"
        v-if="stage.name == 'final'" />
      </div>

      
    </div>
  </div>
</template>
<script>
import AdminListQuestionStage from "./../../../../components/dashboard/admin/stage/question/ListQuestionStage.vue";

import UploadAnswerFile from "./../../../../components/dashboard/participant/stage/UploadFileAnswer.vue";
import ParticipantPenyisihanOSM from "./../../../../components/dashboard/participant/stage/osm/PenyisihanOSM.vue";
import ParticipantSemifinalOSM from "./../../../../components/dashboard/participant/stage/osm/SemifinalOSM.vue";
import ParticipantFinalOSM from "./../../../../components/dashboard/participant/stage/osm/FinalOSM.vue";

import ParticipantPekanFinalPoster from "./../../../../components/dashboard/participant/stage/poster/IndexPoster.vue";
import ParticipantPekanKreativitasPoster from "./../../../../components/dashboard/participant/stage/poster/IndexPoster.vue";

export default {
  name: "ListQuestionStage",
  components: {
    AdminListQuestionStage,
    UploadAnswerFile,
    ParticipantPenyisihanOSM,
    ParticipantSemifinalOSM,
    ParticipantFinalOSM,
    ParticipantPekanKreativitasPoster,
    ParticipantPekanFinalPoster,
  },
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
    event() {
      return this.$store.state.event.event;
    },
    stage() {
      return this.$store.state.stage.stage;
    },
  },
};
</script>
<style scoped>
.btn {
  padding: 10px 30px;
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(255, 255, 255);
}
</style>
