<template>
  <b-container>
    <div class="bg-light text-dark mb-3 rounded shadow-sm header">
      <h3 class="text-left d-inline float-left">
        <i class="fa fa-money-bill"></i>
        Pembayaran
      </h3>
    </div>
    <hr />
    <b-card>
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
          (Penambahan 3 digit terakhir digunakan agar memudahkan dalam
          konfirmasi)
        </p>
      </div>
    </b-card>
    <hr />
    <!-- <label>Masukkan Kode Promo</label>
    <input
      id="kodePromo"
      type="text"
      class="form-control"
      v-model="kodePromo"
    /> -->
    <b-card v-if="!sudahUploadBuktiBayar">
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
    </b-card>
    <b-card v-else-if="!isVerified">
      <b-card-text>
        Anda sudah mengunggah bukti bayar, silahkan menunggu verifikasi :).
      </b-card-text>
    </b-card>
    <b-card v-else>
      <b-card-text>
        Anda sudah terverifikasi, silahkan menunggu agenda selanjutnya.
      </b-card-text>
    </b-card>
  </b-container>
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
      sudahUploadBuktiBayar: false,
      isVerified: false,
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
          this.sudahUploadBuktiBayar = response.data.compe.sudahUploadBuktiBayar;
          this.isVerified = response.data.compe.isVerified;
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
.error-msg {
  color: red;
}
.header {
  min-height: 90px;
  min-width: 100%;
  padding: 30px;
}
</style>
