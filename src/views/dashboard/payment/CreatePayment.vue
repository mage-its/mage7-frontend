<template>
  <div class="m-4">
    <h3>Pembayaran</h3>
    <hr />
    <div class="center">
      <h6>
        Halo <strong>{{ profilUsernamaTim }}</strong
        >, kamu terdaftar sebagai peserta MAGE 7 dengan nomor pendaftaran
      </h6>
      <h4>
        <strong> {{ profilUsernoPeserta }} </strong>
      </h4>
      <h6>Silakan Lakukan Pembayaran ke Rekening</h6>
      <h5>6161 0102 1250 539 (BRI A.N. MOH. IQBAL FATCHUROZI)</h5>
      <h6>Dengan Jumlah Transfer Sebesar</h6>
      <h3>Rp. {{ profilUserPrice }}</h3>
      <p>
        (Penambahan 3 digit terakhir digunakan agar memudahkan dalam konfirmasi)
      </p>
    </div>
    <hr />
    <label>Masukkan Kode Promo</label>
    <input
      id="kodePromo"
      type="text"
      class="form-control"
      v-model="kodePromo"
    />
    <ValidationObserver v-slot="{ handleSubmit }">
      <form
        @submit.prevent="handleSubmit(onSubmit)"
        enctype="multipart/form-data"
      >
        <ValidationProvider
          name="Nama Pengirim Transfer"
          rules="required"
          v-slot="{ errors }"
        >
          <div class="form-group">
            <label>Nama Pengirim Transfer</label>
            <input
              id="namaTim"
              type="text"
              class="form-control"
              v-model="namaBayar"
            />
            <span class="error-msg">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider
          name="Bukti Pembayaran"
          rules="required|ext:jpeg,jpg,png,pdf"
          v-slot="{ validate, errors }"
        >
          <div class="form-group">
            <label>Bukti Pembayaran</label>
            <input
              type="file"
              accept="image/*,application/pdf"
              class="form-control"
              @change="
                {
                  onUpload($event) || validate($event);
                }
              "
              id="identitasKetua"
            />
            <span class="error-msg">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <p>
          Catatan : harap mengunggah bukti yang jelas terlihat nama pengirim,
          nama penerima, nominal, dan tanggal pembayaran.
        </p>
        <input type="submit" class="btn btn-red mb-5" tect="Submit" />
      </form>
    </ValidationObserver>
  </div>
</template>
<script>
import { ValidationProvider } from "vee-validate/dist/vee-validate.full.esm";
import { ValidationObserver } from "vee-validate";
import Swal from "sweetalert2";
import axios from "axios";

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      kodePromo: "",
      namaBayar: "",
      buktiBayar: null,
      profilUserPrice: "",
      profilUsernoPeserta: "",
      profilUsernamaTim: "",
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
          this.profilUserPrice = response.data.compe.price;
          this.profilUsernoPeserta = response.data.compe.noPeserta;
          this.profilUsernamaTim = response.data.compe.namaTim;
        });
    },
    onUpload(e) {
      this.buktiBayar = e.target.files[0];
    },
    onSubmit() {
      const document = new FormData();
      document.append("namaBayar", this.namaBayar);
      document.append("buktiBayar", this.buktiBayar);
      const formData = {
        data: document,
      };
      this.$store.dispatch("payment/createPayment", formData).then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Upload Bukti Pembayaran berhasil",
            showConfirmButton: true,
          }).then(() => {
            this.$router.push("/dashboard");
          });
        },
        (error) => {
          if (error.response.data.code == 401) {
            this.refreshToken();
          } else {
            Swal.fire({
              icon: "error",
              title: "Upload Bukti Pembayaran gagal",
              text: error.response.data.message,
              showConfirmButton: true,
            }).then(() => {});
          }
        }
      );
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
          this.onSubmit();
        });
    },
  },
};
</script>
<style scoped>
.center {
  margin: auto;
  width: 50%;
  padding: 10px;
  text-align: center;
}
</style>
