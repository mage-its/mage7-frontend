<template>
  <div>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(onSubmit)">
        <ValidationProvider name="Nama Tim" rules="required|alpha_space" v-slot="{ errors }">
          <div class="form-group">
            <label>Nama Tim</label>
            <input id="namaTim" type="text" class="form-control" v-model="user.namaTim">
            <span class="error-msg">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="Nama Ketua Tim" rules="required|alpha_space" v-slot="{ errors }">
          <div class="form-group">
            <label>Nama Ketua Tim</label>
            <input id="namaKetua" type="text" class="form-control" v-model="user.namaKetua">
            <span class="error-msg">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="Nama Anggota 1" v-slot="{ errors }">
          <div class="form-group">
            <label>Nama Anggota 1</label>
            <input id="namaAnggota1" type="text" class="form-control" v-model="user.namaAnggota1">
            <span class="error-msg">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="Nama Anggota 2" v-slot="{ errors }">
          <div class="form-group">
            <label>Nama Anggota 2</label>
            <input id="namaAnggota2" type="text" class="form-control" v-model="user.namaAnggota2">
            <span class="error-msg">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="Nomor HP Ketua" rules="required|numeric" v-slot="{ errors }">
          <div class="form-group">
            <label>Nomor HP Ketua</label>
            <input id="hpKetua" type="tel" class="form-control" v-model="user.hpKetua" placeholder="contoh : 081234567890">
            <br>
            <span class="error-msg">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="Nomor WhatsApp Ketua" rules="required|numeric" v-slot="{ errors }">
          <div class="form-group">
            <label>Nomor WhatsApp Ketua</label>
            <input id="waKetua" type="tel" class="form-control" v-model="user.waKetua" placeholder="contoh : 081234567890">
            <br>
            <span class="error-msg">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="ID Line" rules="required|alpha_space" v-slot="{ errors }">
          <div class="form-group">
            <label>ID Line</label>
            <input id="lineKetua" type="text" class="form-control" v-model="user.lineKetua">
            <span class="error-msg">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="Kota" rules="required|alpha_space" v-slot="{ errors }">
          <div class="form-group">
            <label>Kota</label>
            <input id="asalKota" type="text" class="form-control" v-model="user.asalKota">
            <span class="error-msg">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="Nama Sekolah / Instansi " rules="required|alpha_space" v-slot="{ errors }">
          <div class="form-group">
            <label>Nama Sekolah / Instansi </label>
            <input id="asalInstansi" type="text" class="form-control" v-model="user.asalInstansi">
            <span class="error-msg">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="Alamat Sekolah / Instansi" rules="required|alpha_space" v-slot="{ errors }">
          <div class="form-group">
            <label>Alamat Sekolah / Instansi</label>
            <input id="alamatInstansi" type="text" class="form-control" v-model="user.alamatInstansi">
            <span class="error-msg">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="Asal Informasi Mage 7" rules="required|alpha_space" v-slot="{ errors }">
          <div class="form-group">
            <label>Darimana Anda Tahu Informasi Mengenai MAGE 7 :</label>
            <input id="asalInfo" type="text" class="form-control" v-model="user.asalInfo" placeholder="contoh : twitter, instagram dll">
            <span class="error-msg">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="Foto Identitas Ketua Tim" rules="required|image|size:1000" v-slot="{ validate, errors }">
          <div class="form-group">
            <label>Foto Identitas Ketua Tim (KTP atau SIM atau yang lain) :</label>
            <img v-if="previewImage1" :src="previewImage1" class="uploading-image" />
            <input type="file" accept="image/*" class="form-control" @change="{ onUpload1($event) || validate($event) }" id="identitasKetua">
            <span class="error-msg">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="Foto Identitas Anggota 1" rules="image" v-slot="{ validate, errors }">
          <div class="form-group">
            <label>Foto Identitas Anggota 1 (KTP atau SIM atau yang lain) :</label>
            <img v-if="previewImage2" :src="previewImage2" class="uploading-image" />
            <input type="file" accept="image/*" class="form-control" @change="{ onUpload2($event) || validate($event) }" id="identitasAnggota1">
            <span class="error-msg">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="Foto Identitas Anggota 2" rules="image" v-slot="{ validate, errors }">
          <div class="form-group">
            <label>Foto Identitas Anggota 2 (KTP atau SIM atau yang lain) :</label>
            <img v-if="previewImage3" :src="previewImage3" class="uploading-image" />
            <input type="file" accept="image/*" class="form-control" @change="{ onUpload3($event) || validate($event) }" id="identitasAnggota2">
            <span class="error-msg">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="Surat Keterangan Siswa" rules="required|image" v-slot="{ validate, errors }">
          <div class="form-group">
            <label>Surat Keterangan Siswa :</label>
            <img v-if="previewImage4" :src="previewImage4" class="uploading-image" />
            <input type="file" accept="image/*" class="form-control" @change="{ onUpload4($event) || validate($event) }" id="suratKeteranganSiswa">
            <span class="error-msg">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <input @click="onSubmit()" type="submit" class="btn btn-red" tect="Submit"/>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
import { ValidationObserver } from 'vee-validate';

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      previewImage1:null,
      previewImage2:null,
      previewImage3:null,
      previewImage4:null,
      user: {
        namaTim: 'lala',
        namaKetua: 'lala',
        waKetua: '081234567890',
        lineKetua: 'lala',
        hpKetua: '081234567890',
        namaAnggota1: 'lala',
        namaAnggota2: 'lala',
        asalKota: 'lala',
        asalInstansi: 'lala',
        asalInfo: 'lala',
        identitasKetua: null,
        identitasAnggota1: null,
        identitasAnggota2: null,
        suratKeteranganSiswa: null,
        alamatInstansi: 'lala',
        id: ''
      },
    };
  },
  methods: {
    onUpload1(e) {
      this.identitasKetua = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(this.identitasKetua);
      reader.onload = e =>{
          this.previewImage1 = e.target.result;
      };
    },
    onUpload2(e) {
      this.identitasAnggota1 = e.target.files[0];
      const reader1 = new FileReader();
      reader1.readAsDataURL(this.identitasAnggota1);
      reader1.onload = e =>{
          this.previewImage2 = e.target.result;
      };
    },
    onUpload3(e) {
      this.identitasAnggota2 = e.target.files[0];
      const reader2 = new FileReader();
      reader2.readAsDataURL(this.identitasAnggota2);
      reader2.onload = e =>{
          this.previewImage3 = e.target.result;
      };
    },
    onUpload4(e) {
      this.suratKeteranganSiswa = e.target.files[0];
      const reader2 = new FileReader();
      reader2.readAsDataURL(this.suratKeteranganSiswa);
      reader2.onload = e =>{
          this.previewImage4 = e.target.result;
      };
    },
    onSubmit() {
      this.id = localStorage.id;
      this.$store.dispatch("regisCompetition/registerOlim", this.user).then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Register berhasil",
            showConfirmButton: true,
          }).then(() => {
            this.$router.push("/dashboard");
          });
        },
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          Swal.fire({
            icon: "error",
            title: "Register gagal",
            text: this.message,
            showConfirmButton: true,
          }).then(() => {});
        }
      );
    },
  },
  // mounted() {
  //   // For saving data:
  //   window.onbeforeunload = function() {
  //       var namaTim = document.getElementById("namaTim");
  //       // ...
  //       localStorage.setItem("namaTim", namaTim.value);
  //       // ...
  //   }
  //   // For loading data:
  //   window.onload = function() {
  //       var namaTim = localStorage.getItem(namaTim);
  //       if (namaTim !== null) document.getElemenyById("namaTim").value = namaTim;
  //       // ...
  //   }
  // }
};
</script>

<style scoped>
.error-msg {
  color: red;
}

.uploading-image{
     display:flex;
   }
</style>
