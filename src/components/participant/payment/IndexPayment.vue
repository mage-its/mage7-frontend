<template>
  <b-container>
    <div class="bg-light text-dark mb-3 rounded shadow-sm header">
      <h3 class="text-left d-inline float-left">
        <i style="font-size:30px" class="fas fa-money-bill-wave"></i>
        Pembayaran
      </h3>
    </div>
    <hr />
    <router-view v-if="user.verification == 1 && user.firstname != ''" />
    <b-row>
      <b-col v-if="user.verification == 0" lg="12">
        <div class="bg-white p-3 text-center text-dark rounded-lg shadow">
          <p>
            <i style="font-size:30px" class="far fa-envelope"></i>
            <br />
            Anda Belum Melakukan Verifikasi Email, Harap Lakukan Verifikasi
            Email Anda Terlebih Dahulu!
          </p>
        </div>
      </b-col>
      <b-col v-if="user.firstname == ''" lg="12" class="mt-3">
        <div class="bg-white p-3 text-center text-dark rounded-lg shadow">
          <p>
            <i style="font-size:30px" class="far fa-copy"></i>
            <br />
            Anda Belum Melengkapi Administrasi, Harap Lengkapi Dokumen
            dan Identitas yang Diperlukan
          </p>
        </div>
      </b-col>
    </b-row>
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
