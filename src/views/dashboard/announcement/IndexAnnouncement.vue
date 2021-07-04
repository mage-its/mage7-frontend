<template>
  <div>
    <!--AdminIndexAnnouncement v-if="user.roles.includes('admin')" />
    <ParticipantIndexAnnouncement v-if="user.roles.includes('participant')" /-->
    <ParticipantIndexAnnouncement/>
  </div>
</template>
<script>
import AdminIndexAnnouncement from "./../../../components/dashboard/admin/announcement/IndexAnnouncement.vue";
import ParticipantIndexAnnouncement from "./../../../components/dashboard/participant/announcement/IndexAnnouncement.vue";

export default {
  name: "IndexAnnouncement",
  components: {
    AdminIndexAnnouncement,
    ParticipantIndexAnnouncement,
  },
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
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
