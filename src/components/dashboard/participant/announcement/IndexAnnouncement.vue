<template>
  <b-container>
    <div class="bg-light text-dark mb-3 rounded shadow-sm header">
      <h3 class="text-left d-inline float-left">
        <i class="fas fa-bullhorn"></i>
        Pengumuman
      </h3>
    </div>
    <hr />
    <router-view v-if="user.verification == 1" />
  </b-container>
</template>

<script>
export default {
  name: "IndexAnnouncement",
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
