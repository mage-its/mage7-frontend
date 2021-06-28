<template>
  <b-container>
    <div class="bg-light text-dark mb-3 rounded shadow-sm header">
      <h3 class="text-left d-inline float-left">
        <i class="far fa-copy"></i>
        Administrasi
      </h3>
    </div>
    <hr />
    <router-view v-if="this.user.verification == 1" />
    <div v-if="user.verification == 0">
        <div class="bg-white p-3 text-center text-dark rounded-lg shadow">
          <p>
            <i style="font-size:30px" class="far fa-envelope"></i>
            <br />
            Anda Belum Melakukan Verifikasi Email, Harap Lakukan Verifikasi
            Email Anda Terlebih Dahulu!
          </p>
        </div>
    </div>
  </b-container>
</template>
<script>
export default {
  computed: {
    user() {
      return JSON.parse(localStorage.getItem("user"));
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
