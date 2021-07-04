<template>
  <div class="m-4">
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(onSubmit)"  enctype="multipart/form-data" >    
        <ValidationProvider name="Nama Tim" rules="required|alpha_space" v-slot="{ errors }">
          <div class="form-group">
            <label>Nama Tim</label>
            <input id="namaTim" type="text" class="form-control" v-model="namaTim">
            <span class="error-msg">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="Nama Ketua Tim" rules="required|alpha_space" v-slot="{ errors }">
          <div class="form-group">
            <label>Nama Ketua Tim</label>
            <input id="namaKetua" type="text" class="form-control" v-model="namaKetua">
            <span class="error-msg">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="Nama Anggota 1" v-slot="{ errors }">
          <div class="form-group">
            <label>Nama Anggota 1</label>
            <input id="namaAnggota1" type="text" class="form-control" v-model="namaAnggota1">
            <span class="error-msg">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="Nama Anggota 2" v-slot="{ errors }">
          <div class="form-group">
            <label>Nama Anggota 2</label>
            <input id="namaAnggota2" type="text" class="form-control" v-model="namaAnggota2">
            <span class="error-msg">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="Nomor HP Ketua" rules="required|numeric" v-slot="{ errors }">
          <div class="form-group">
            <label>Nomor HP Ketua</label>
            <input id="hpKetua" type="text" class="form-control" v-model="hpKetua" placeholder="contoh : 081234567890">
            <br>
            <span class="error-msg">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="Nomor WhatsApp Ketua" rules="required|numeric" v-slot="{ errors }">
          <div class="form-group">
            <label>Nomor WhatsApp Ketua</label>
            <input id="waKetua" type="text" class="form-control" v-model="waKetua" placeholder="contoh : 081234567890">
            <br>
            <span class="error-msg">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="ID Line" rules="required|alpha_space" v-slot="{ errors }">
          <div class="form-group">
            <label>ID Line</label>
            <input id="lineKetua" type="text" class="form-control" v-model="lineKetua">
            <span class="error-msg">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="Nama Pembimbing" v-slot="{ errors }">
          <div class="form-group">
            <label>Nama Pembimbing (Optional)</label>
            <input type="text" class="form-control" v-model="namaPembimbing">
            <span class="error-msg">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="Nomor HP Pembimbing" rules="numeric" v-slot="{ errors }">
          <div class="form-group">
            <label>Nomor HP Pembimbing (Optional)</label>
            <input type="tel" class="form-control" v-model="hpPembimbing" placeholder="contoh : 081234567890">
            <br>
            <span class="error-msg">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="Nomor WhatsApp Pembimbing" rules="numeric" v-slot="{ errors }">
          <div class="form-group">
            <label>Nomor WhatsApp Pembimbing (Optional)</label>
            <input type="tel" class="form-control" v-model="waPembimbing" placeholder="contoh : 081234567890">
            <br>
            <span class="error-msg">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="Kota" rules="required|alpha_space" v-slot="{ errors }">
          <div class="form-group">
            <label>Kota</label>
            <input id="asalKota" type="text" class="form-control" v-model="asalKota">
            <span class="error-msg">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="Nama Sekolah / Instansi " rules="required|alpha_space" v-slot="{ errors }">
          <div class="form-group">
            <label>Nama Sekolah / Instansi </label>
            <input id="asalInstansi" type="text" class="form-control" v-model="asalInstansi">
            <span class="error-msg">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="Alamat Sekolah / Instansi" rules="required|alpha_space" v-slot="{ errors }">
          <div class="form-group">
            <label>Alamat Sekolah / Instansi</label>
            <input id="alamatInstansi" type="text" class="form-control" v-model="alamatInstansi">
            <span class="error-msg">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="Asal Informasi Mage 7" rules="required|alpha_space" v-slot="{ errors }">
          <div class="form-group">
            <label>Darimana Anda Tahu Informasi Mengenai MAGE 7 :</label>
            <input id="asalInfo" type="text" class="form-control" v-model="asalInfo" placeholder="contoh : twitter, instagram dll">
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
        <input @click="onSubmit()" type="submit" class="btn btn-primary" tect="Submit"/>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
import { ValidationObserver } from 'vee-validate';
import Swal from "sweetalert2";

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
        namaTim: '',
        namaKetua: '',
        waKetua: '',
        lineKetua: '',
        hpKetua: '',
        namaAnggota1: '',
        namaAnggota2: '',
        namaPembimbing: '',
        hpPembimbing: '',
        waPembimbing: '',
        asalKota: '',
        asalInstansi: '',
        asalInfo: '',
        identitasKetua: null,
        identitasAnggota1: null,
        identitasAnggota2: null,
        alamatInstansi: '',
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

      var document = new FormData();
      this.loading = true;
      if(this.identitasAnggota1 != null) {
        document.append("identitasAnggota1", this.identitasAnggota1);
      }
      if(this.identitasAnggota2 !=null) {
        document.append("identitasAnggota2", this.identitasAnggota2);
      }
      if(this.namaAnggota1 !=null) {
        document.append("namaAnggota1", this.namaAnggota1);
      }
      if(this.namaAnggota2 !=null) {
        document.append("namaAnggota2", this.namaAnggota2);
      } 
      if(this.namaPembimbing !=null) {
        document.append("namaPembimbing", this.namaPembimbing);
      }
      if(this.hpPembimbing !=null) {
        document.append("hpPembimbing", this.hpPembimbing);
      }
      if(this.waPembimbing !=null) {
        document.append("waPembimbing", this.waPembimbing);
      }
      document.append("identitasKetua", this.identitasKetua);
      document.append("namaTim", this.namaTim);
      document.append("namaKetua", this.namaKetua);
      document.append("waKetua", this.waKetua);
      document.append("lineKetua", this.lineKetua);
      document.append("hpKetua", this.hpKetua);
      document.append("asalKota", this.asalKota);
      document.append("asalInstansi", this.asalInstansi);
      document.append("asalInfo", this.asalInfo);
      document.append("alamatInstansi", this.alamatInstansi);

      var formData = {
        data: document,
      };

      this.$store.dispatch("regisCompetition/registerIot", formData).then(
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
          Swal.fire({
            icon: "error",
            title: "Register gagal",
            text: error.response.data.message,
            showConfirmButton: true,
          }).then(() => {});
        }
      );
    },
  },
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
