<template>
  <div>
    <div class="background"></div>
    <div class="center" v-if="verified">
      <h1 class="text-white">Email Anda Telah <br />Terverifikasi</h1>
      <br />
      <input
        @click="$store.dispatch('ui/changeWelcomeComponent', 'login')"
        type="submit"
        name="Login"
        class="btn btn-white"
        value="Login Kembali"
      />
    </div>
    <div class="center" v-else>
      <h1 class="text-white">
        Terjadi Kesalahan Saat <br />
        Verifikasi
      </h1>
      <br />
      <input
        @click="$store.dispatch('ui/changeWelcomeComponent', 'login')"
        type="submit"
        name="Login"
        class="btn btn-white"
        value="Login Kembali"
      />
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "ConfirmEmail",
  data() {
    return {
      verified: true,
    };
  },
  methods: {
    confirmEmail() {
      axios
        .post(
          `${this.endpointAPI}api/v1/auth/verify-email?token=${this.$route.query.token}`
        )
        .then((response) => {
          if (response.status === 204) {
            this.verified = true;
          }
        })
        .catch(() => {
          //   console.log(error);
          this.verified = false;
        });
    },
  },
  created() {
    this.confirmEmail();
  },
};
</script>
<style scoped>
.background {
  background-image: url("/img/bg1.svg");
  background-size: cover;
  width: 100%;
  height: 600px;
  margin-top: -200px;
  box-sizing: border-box;
  position: absolute;
}
.center {
  width: 400px;
  margin: auto;
  margin-top: 200px;
  margin-bottom: 180px;
  text-align: center;
  color: white;
  position: relative;
}
@media only screen and (max-width: 767px) {
  .text-white {
    font-size: 30px;
  }
}
</style>
