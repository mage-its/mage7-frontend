<template>
  <div>
    <AdminIndexStage v-if="user.roles.includes('admin')" />
    <ParticipantIndexStage v-if="user.roles.includes('participant')" />
  </div>
</template>
<script>
import AdminIndexStage from "./../../../components/dashboard/admin/stage/IndexStage.vue";
import ParticipantIndexStage from "./../../../components/dashboard/participant/stage/IndexStage.vue";

export default {
  name: "IndexStage",
  components: {
    AdminIndexStage,
    ParticipantIndexStage,
  },
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
    event() {
      return JSON.parse(localStorage.getItem("event"));
    },
  },
  updated() {
  }
};
</script>
<style scoped>
.header {
  min-height: 90px;
  min-width: 100%;
  padding: 30px;
}
</style>
