<template>
  <b-container>
    <div class="bg-light text-dark mb-3 rounded shadow-sm header">
      <h3 class="text-left d-inline float-left">
        <i class="fas fa-home"></i>
        Beranda
      </h3>
    </div>
    <hr />
    <b-row>
      <b-col lg="12">
        <div class="container bg-white p-3 mb-3 text-center rounded-lg shadow">
          <p>
            <br />
            <b>SELAMAT DATANG di Mage 7</b>
            Ini adalah Dashboard anda <br />
            berbagai jenis informasi terkait lomba dapat dilihat disini
          </p>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="12">
        <div
          class=" bg-white p-3 mb-3 text-center rounded-lg shadow border-red"
        >
          <b-row>
            <b-col lg="12">
              <b><i class="far fa-envelope fa-2x"></i></b
            ></b-col>

            <b-col lg="12" class="mt-2"><p>Email anda belum terverifikasi</p></b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>
    <router-link :to="{ name: 'MainDocument' }">
      <b-row>
        <b-col lg="12">
          <div
            class="bg-white p-3 mb-3 text-center rounded-lg shadow border-red"
          >
            <b-row>
              <b-col lg="12">
                <b><i class="fas fa-trophy fa-2x"></i></b
              ></b-col>

              <b-col lg="12" class="mt-2"><p>Anda belum terdaftar di salah satu divisi</p><p>Klik Disini Untuk Mendaftar</p></b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </router-link>
  </b-container>
</template>
<script>
import Swal from "sweetalert2";
export default {
  name: "DashboardMain",
  data() {
    return {
      user: ''
    }
  },
  mounted() {
    this.getProfile();
  },
  methods: {
    getProfile() {
      this.$store.dispatch("participant/getProfile").then(
        (response) => {
          this.user = response;
          console.log(this.user);
        },
        (error) => {
          console.log(error);
          // Swal.fire({
          // icon: "error",
          // title: "Upload Bukti Pembayaran gagal",
          // text: error.response.data.message,
          // showConfirmButton: true,
          // }).then(() => {});
        }
      );
    }
  }
};


</script>
<style scoped>
.header {
  min-height: 90px;
  min-width: 100%;
  padding: 30px;
}
.btn {
  padding: 10px 30px;
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(255, 255, 255);
}
.border-red {
  border: 1px solid red;
}
</style>
