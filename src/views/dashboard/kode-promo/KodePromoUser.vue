<template>
  <b-container>
    <div class="bg-light text-dark mb-3 rounded shadow-sm header">
      <h3 class="text-left d-inline float-left">
        <i class="fa fa-money-bill"></i>
        Kode Promo
      </h3>
    </div>
    <hr />
    <b-card>
      <b-container class="bg-white p-3">
        <div class="form-group">
          <label for="kodepromo">Kode Promo</label>
          <input
            id="kodepromo"
            type="text"
            class="form-control"
            v-model="kodePromo"
            placeholder="Contoh: WBMAGEJUARA"
          />
          <b-button @click="claimKodePromo" class="mt-3" variant="info"
            >Klaim Kode Promo
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
  name: "KodePromoUser",
  data() {
	  return {
		  kodePromo: ''
	  }
  },
  methods: {
    claimKodePromo() {
      axios
        .post(
          `${this.endpointAPI}api/v1/kodepromo/apply-kode`,
          {
            kode: this.kodePromo,
          },
          header()
        )
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "Kode Promo berhasil ditambah",
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
              title: "gagal menambahkan kode promo",
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
          this.claimKodePromo();
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
