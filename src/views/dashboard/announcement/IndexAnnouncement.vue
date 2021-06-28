<template>
  <div>
    <AdminIndexAnnouncement v-if="user.roles.includes('admin')" />
    <ParticipantIndexAnnouncement v-if="user.roles.includes('participant')" />
    <div v-if="user.roles.includes('participant')">
      <b-col lg="12" v-if="user.verification == 0">
        <div class="container bg-white p-3 text-center rounded-lg shadow">
          <p>
            <i style="font-size:30px" class="far fa-envelope"></i>
            <br />
            Anda Belum Melakukan Verifikasi Email, Harap Lakukan Verifikasi
            Email Anda Terlebih Dahulu!
          </p>
        </div>
      </b-col>
    </div>
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
