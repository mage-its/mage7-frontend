<template>
  <b-container>
    <div class="bg-light text-dark mb-3 rounded shadow-sm header">
      <h3 class="text-left d-inline float-left">
        <i class="far fa-copy"></i>
        Administrasi
      </h3>
    </div>
    <hr />
    <router-view/>
  </b-container>
</template>
<script>
export default {
  computed: {
    /* user() {
      return JSON.parse(localStorage.getItem("user"));
    }, */
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
