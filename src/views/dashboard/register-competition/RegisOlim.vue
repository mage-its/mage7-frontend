<template>
  <div class="m-4">
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(onSubmit)">
        <ValidationProvider name="Nama Tim" rules="required|alpha" v-slot="{ errors }">
          <div class="form-group">
            <label>Nama Tim</label>
            <input type="text" class="form-control" v-model="formData.nama_tim">
            <span class="error-msg">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="Nama Ketua Tim" rules="required|alpha" v-slot="{ errors }">
          <div class="form-group">
            <label>Nama Ketua Tim</label>
            <input type="text" class="form-control" v-model="formData.nama_ketua_tim">
            <span class="error-msg">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="Nama Anggota 1" v-slot="{ errors }">
          <div class="form-group">
            <label>Nama Anggota 1</label>
            <input type="text" class="form-control" v-model="formData.nama_anggota_1">
            <span class="error-msg">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="Nama Anggota 2" v-slot="{ errors }">
          <div class="form-group">
            <label>Nama Anggota 2</label>
            <input type="text" class="form-control" v-model="formData.nama_anggota_2">
            <span class="error-msg">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="Nomor HP Ketua" rules="required|numeric" v-slot="{ errors }">
          <div class="form-group">
            <label>Nomor HP Ketua</label>
            <input type="tel" class="form-control" v-model="formData.nomor_hp" placeholder="contoh : 081234567890">
            <br>
            <span class="error-msg">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="Nomor WhatsApp Ketua" rules="required|numeric" v-slot="{ errors }">
          <div class="form-group">
            <label>Nomor WhatsApp Ketua</label>
            <input type="tel" class="form-control" v-model="formData.nomor_wa" placeholder="contoh : 081234567890">
            <br>
            <span class="error-msg">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="ID Line" rules="required|alpha" v-slot="{ errors }">
          <div class="form-group">
            <label>ID Line</label>
            <input type="text" class="form-control" v-model="formData.id_line">
            <span class="error-msg">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="Nama Sekolah / Instansi " rules="required|alpha" v-slot="{ errors }">
          <div class="form-group">
            <label>Nama Sekolah / Instansi </label>
            <input type="text" class="form-control" v-model="formData.nama_sekolah">
            <span class="error-msg">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="Alamat Sekolah / Instansi" rules="required|alpha" v-slot="{ errors }">
          <div class="form-group">
            <label>Alamat Sekolah / Instansi</label>
            <input type="text" class="form-control" v-model="formData.alamat_sekolah">
            <span class="error-msg">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="Kota" rules="required|alpha" v-slot="{ errors }">
          <div class="form-group">
            <label>Kota</label>
            <input type="text" class="form-control" v-model="formData.kota">
            <span class="error-msg">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="Asal Informasi Mage 7" rules="required|alpha" v-slot="{ errors }">
          <div class="form-group">
            <label>Darimana Anda Tahu Informasi Mengenai MAGE 7 :</label>
            <input type="text" class="form-control" v-model="formData.informasi_mage" placeholder="contoh : twitter, instagram dll">
            <span class="error-msg">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="Foto Identitas Ketua Tim" rules="required|image|size:1000" v-slot="{ errors, validate }">
          <div class="form-group">
            <label>Foto Identitas Ketua Tim (KTP atau SIM atau yang lain) :</label>
            <input type="file" class="form-control" @change="{ validate(); onUpload(); }" id="identitasKetua">
            <span class="error-msg">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="Foto Identitas Anggota 1" rules="required|image" v-slot="{ errors, validate }">
          <div class="form-group">
            <label>Foto Identitas Anggota 1 (KTP atau SIM atau yang lain) :</label>
            <input type="file" class="form-control" @change="{ validate(); onUpload(); }" id="identitasAnggota1">
            <span class="error-msg">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="Foto Identitas Anggota 2" rules="required|image" v-slot="{ errors, validate }">
          <div class="form-group">
            <label>Foto Identitas Anggota 2 (KTP atau SIM atau yang lain) :</label>
            <input type="file" class="form-control" @change="{ validate(); onUpload(); }" id="identitasAnggota2">
            <span class="error-msg">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <!-- <ValidationProvider name="Accept Terms" rules="required" v-slot="{ errors }">
          <div class="form-check">
            <input type="checkbox" class="form-check-input" v-model="formData.accept_terms"/>
            <label class="form-check-label">Accept Terms</label>
          </div>
          <span class="error-msg">{{ errors[0] }}</span>
        </ValidationProvider> -->
        <input type="submit" class="btn btn-primary" tect="Submit"/>
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
      formData: {
        nama_tim: '',
        nama_ketua_tim: '',
        nama_anggota_1: '',
        nama_anggota_2: '',
        nomor_hp: '',
        nomor_wa: '',
        id_line: '',
        nama_sekolah: '',
        alamat_sekolah: '',
        kota: '',
        informasi_mage: '',
        accept_terms: '',
        identitas_ketua: null,
        identitas_anggota_1: null,
        identitas_anggota_2: null,
      },
    };
  },
  methods: {
    onSubmit() {
      console.log(this.formData);
    },
    onUpload() {
      // Masukin file ke formData.identitas_ketua, formData.identitas_anggota_1, formData.identitas_anggota_2
    },
  },
};
</script>

<style scoped>
.error-msg {
  color: red;
}
</style>
