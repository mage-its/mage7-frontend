<template>
  <div>
    <b-container class="bg-white p-5">
      <div class="form-group">
        <label for="kodepromo">Kode Promo</label>
        <input
          id="kodepromo"
          type="text"
          class="form-control"
          v-model="kodePromo"
          placeholder="Masukkan Angka atau huruf terserah kalian"
        />
        <label class="mt-3" for="category">Kategori</label>
        <b-form-radio-group
          v-model="category"
          :options="options"
          class="mb-3"
          value-field="item"
          text-field="name"
          required
        ></b-form-radio-group>
        <label class="mt-3" for="category"
          >Maksimal dapat dipakai berapa user</label
        >
        <input
          id="maxUsage"
          type="text"
          class="form-control"
          v-model="maxUsage"
          placeholder="Misal : 100"
        />
        <label class="mt-3" for="discountPrice">Besar Potongan Harga (Ketik tanpa titik atau koma, misal : 10000 untuk potongan Rp.10.000)</label>
        <input
          id="discountPrice"
          type="text"
          class="form-control"
          v-model="discountPrice"
          placeholder="Ketik tanpa titik atau koma"
        />
        <b-button @click="createKodePromo" class="mt-3" variant="info"
          >Buat kode Promo</b-button
        >
      </div>
    </b-container>
  </div>
</template>
<script>
import axios from "axios";
import Swal from "sweetalert2";
import header from "../../../services/header";

export default {
  data() {
    return {
      kodePromo: "",
      options: [
        { item: "all", name: "all" },
        { item: "olim", name: "olim" },
        { item: "devcom", name: "devcom" },
      ],
      maxUsage: null,
      discountPrice: null,
      message: "",
    };
  },
  methods: {
    createKodePromo() {
      axios
        .post(
          `${this.endpointAPI}api/v1/kodepromo`,
          {
            kode: this.kodePromo,
            category: this.category,
            maxUsage: this.maxUsage,
            discountPrice: this.discountPrice/1000,
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
      const user = JSON.parse(localStorage.getItem('user'));
      axios.post(`${this.endpointAPI}api/v1/auth/refresh-tokens`, {
        refreshToken: user.tokens.refresh.token,
      }).then((response) => {
        user.tokens = response.data;
        localStorage.setItem('user', JSON.stringify(user));
      }).then(() => {
        this.createKodePromo();
      });
    },
  },
};
</script>
