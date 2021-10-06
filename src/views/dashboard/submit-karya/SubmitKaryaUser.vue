<template>
  <b-container>
    <div class="bg-light text-dark mb-3 rounded shadow-sm header">
      <h3 class="text-left d-inline float-left">
        <i class="fa fa-money-bill"></i>
        Karya dan Video
      </h3>
    </div>
    <hr />
    <b-card>
      <b-container class="bg-white p-3">
        <div class="form-group">
          <label for="kodepromo">Link Karya dan Video{{submitted ? ' (Anda sudah pernah submit, submit lagi untuk mengupdate)' : ''}}</label>
          <input
            id="karyadanvideo"
            type="text"
            class="form-control"
            v-model="linkKarya"
            placeholder="Masukkan url yang valid"
          />
          <b-button @click="submitLink" class="mt-3" variant="info"
            >Submit
          </b-button>
        </div>
      </b-container>
    </b-card>
  </b-container>
</template>
<script>
import axios from "axios";
import Swal from "sweetalert2";
import header from "../../../services/header";

export default {
  name: 'SubmitKaryaUser',
  data() {
    return {
      linkKarya: '',
      submitted: false,
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
    getUser() {
      const user = JSON.parse(localStorage.getItem("user"));
      axios
        .get(`${this.endpointAPI}api/v1/users/profile`, {
          headers: {
            "Content-Type": undefined,
            Authorization: `Bearer ${user.tokens.access.token}`,
          },
        })
        .then((response) => {
          this.submitted = !!response.data.compe.linkKaryaDanVideo;
          console.log(this.submitted);
        });
    },
    submitLink() {
      axios
        .post(
          `${this.endpointAPI}api/v1/compe/submit-karya`,
          {
            linkKarya: this.linkKarya,
          },
          header(),
        )
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "Berhasil submit",
            showConfirmButton: true,
          }).then(() => {
            this.$router.push("/dashboard");
          });
        })
        .catch((error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          if (error.response.data.code == 401) {
            this.refreshToken();
          } else {
            Swal.fire({
              icon: "error",
              title: "gagal submit link karya",
              text: this.message,
              showConfirmButton: true,
            }).then(() => {});
          }
        });
    },
    refreshToken() {
      const user = JSON.parse(localStorage.getItem("user"));
      axios
        .post(`${this.endpointAPI}api/v1/auth/refresh-tokens`, {
          refreshToken: user.tokens.refresh.token,
        })
        .then((response) => {
          user.tokens = response.data;
          localStorage.setItem("user", JSON.stringify(user));
        })
        .then(() => {
          this.submitLink();
        });
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
