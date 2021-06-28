<template>
  <div>
    <div v-if="user.roles.includes('admin')">
      <AdminDetailResultStage />
    </div>
  </div>
</template>
<script>
import AdminDetailResultStage from "./../../../../components/dashboard/admin/stage/result/DetailResultStage.vue";

export default {
  name: "DetailResultStage",
  components: {
    AdminDetailResultStage,
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
