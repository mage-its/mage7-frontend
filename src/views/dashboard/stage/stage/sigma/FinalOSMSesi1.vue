<template>
  <div>
    <ParticipantSemifinalOSMSesi1 v-if="user.roles.includes('participant')" />
    <ParticipantSemifinalOSMSesi2 v-if="user.roles.includes('participant')" />
    <ParticipantFinalOSMSesi1 v-if="user.roles.includes('participant')" />
    <ParticipantFinalOSMSesi2 v-if="user.roles.includes('participant')" />
    <ParticipantPenyisihanOSM v-if="user.roles.includes('participant')" />
    <UploadAnswerFile />

    <ParticipantPekanFinalPoster
      :title="'Pekan Final Poster'"
      v-if="user.roles.includes('participant')"
    />
    <ParticipantPekanKreativitasPoster
      :title="'Pekan Kreativitas Poster'"
      v-if="user.roles.includes('participant')"
    />

    <ParticipantPaketBabakChampionRangking1
      v-if="user.roles.includes('participant')"
    />
  </div>
</template>
<script>
import UploadAnswerFile from "./../../../../components/dashboard/participant/stage/UploadFileAnswer.vue";
import ParticipantPenyisihanOSM from "./../../../../components/dashboard/participant/stage/osm/PenyisihanOSM.vue";
import ParticipantSemifinalOSMSesi2 from "./../../../../components/dashboard/participant/stage/osm/SemifinalOSMSesi2.vue";
import ParticipantSemifinalOSMSesi1 from "./../../../../components/dashboard/participant/stage/osm/SemifinalOSMSesi1.vue";
import ParticipantFinalOSMSesi1 from "./../../../../components/dashboard/participant/stage/osm/FinalOSMSesi1.vue";
import ParticipantFinalOSMSesi2 from "./../../../../components/dashboard/participant/stage/osm/FinalOSMSesi2.vue";

import ParticipantPekanFinalPoster from "./../../../../components/dashboard/participant/stage/poster/IndexPoster.vue";
import ParticipantPekanKreativitasPoster from "./../../../../components/dashboard/participant/stage/poster/IndexPoster.vue";

import ParticipantBabakChampionRangking1 from "./../../../../components/dashboard/participant/stage/rangking1/MainBabakChampionRangking1.vue";

export default {
  name: "FinalOSMSesi1",
  components: {
    UploadAnswerFile,
    ParticipantPenyisihanOSMSesi,
    ParticipantSemifinalOSMSesi1,
    ParticipantSemifinalOSMSesi2,
    ParticipantFinalOSMSesi1,
    ParticipantFinalOSMSesi2,
  },
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
  },
  created() {
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
