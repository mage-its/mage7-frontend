<template>
  <div>
    <b-container class="bg-white p-5">
      <b-input-group-append>
        <router-link :to="{ name: 'CreateKodePromoAdmin' }">
          <b-button variant="info">Tambah Kode Promo</b-button>
        </router-link>
      </b-input-group-append>
      <b-table
        class="mt-3"
        striped
        hover
        :items="dataKodePromo"
        :fields="fields"
        responsive
      >
        <template #cell(hapus)="data">
          <b-button variant="danger" @click="delKodePromo(data.item.id)"><i class="fa fa-trash"></i></b-button>
        </template>
      </b-table>
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
      dataKodePromo: [],
      fields: [
        {
          key: "kode",
          label: "nama kode",
        },
        {
          key: "category",
          label: "category",
        },
		{
          key: "discountPrice",
          label: "Besar Potongan",
        },
        {
          key: "usage",
          label: "Jumlah terpakai",
        },
        {
          key: "maxUsage",
          label: "Maksimal pemakaian",
        },
		{
          key: "active",
          label: "active",
        },
        {
          key: "hapus",
          label: "Hapus",
        },
      ],
    };
  },
  methods: {
    async getKodePromo() {
      let data = null;
      await axios
        .get(`${this.endpointAPI}api/v1/kodepromo?active=true`, header())
        .then((response) => {
          data = response.data.results;
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
            console.log(error.response.data.message);
          }
        });
      this.dataKodePromo = data;
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
          this.getKodePromo();
        });
    },
    delKodePromo(id) {
      axios
        .delete(`${this.endpointAPI}api/v1/kodepromo/${id}`, header())
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "Kode Promo berhasil dihapus",
            showConfirmButton: true,
          }).then(() => this.getKodePromo());
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "gagal menghapus kode promo",
            text: err.response || err,
            showConfirmButton: true,
          }).then(() => {});
        });
    },
  },
  async mounted() {
    this.getKodePromo();
  },
};
</script>
