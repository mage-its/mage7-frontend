<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
    <!-- Nama -->
        <b-form-group id="team_name" label="Nama Tim :" label-for="team_name">
            <b-form-input
            id="team_name"
            v-model="form.team_name"
            placeholder="Masukkan Nama Tim Anda"
            required
            ></b-form-input>
        </b-form-group>

        <b-form-group id="head_team_name" label="Nama Ketua :" label-for="head_team_name">
            <b-form-input
            id="head_team_name"
            v-model="form.head_team_name"
            placeholder="Masukkan Nama Ketua Tim Anda"
            required
            ></b-form-input>
        </b-form-group>

        <b-form-group id="member1_name" label="Nama Anggota 1 :" label-for="member1_name">
            <b-form-input
            id="member1_name"
            v-model="form.member1_name"
            placeholder="Masukkan Nama Anggota 1 Tim Anda"
            required
            ></b-form-input>
        </b-form-group>

        <b-form-group id="member2_name" label="Nama Anggota 2 :" label-for="member2_name">
            <b-form-input
            id="member2_name"
            v-model="form.member2_name"
            placeholder="Masukkan Nama Anggota 2 Tim Anda"
            required
            ></b-form-input>
        </b-form-group>
        <!-- Kontak -->
        <b-form-group id="no_hp" label="No. HP Ketua :" label-for="no_hp">
            <b-form-input
            id="no_hp"
            v-model="form.no_hp"
            placeholder="Masukkan No. Hp Anda"
            required
            ></b-form-input>
        </b-form-group>
        <b-form-group id="no_wa" label="No. WhatsApp Ketua :" label-for="no_wa">
            <b-form-input
            id="no_wa"
            v-model="form.no_wa"
            placeholder="Masukkan No. WhatsApp Anda"
            required
            ></b-form-input>
        </b-form-group>
        <b-form-group id="id_line" label="Id Line Ketua :" label-for="id_line">
            <b-form-input
            id="id_line"
            v-model="form.id_line"
            placeholder="Masukkan Id Line Anda"
            required
            ></b-form-input>
        </b-form-group>
        <!-- informasi sekolah/instansi -->
        <b-form-group id="school_name" label="Nama Asal Sekolah / Instansi :" label-for="school_name">
            <b-form-input
            id="school_name"
            v-model="form.school_name"
            placeholder="Masukkan Nama Sekolah / Instansi Anda"
            required
            ></b-form-input>
        </b-form-group>
        <b-form-group id="school_address" label="Alamat Asal Sekolah / Instansi :" label-for="school_address">
            <b-form-input
            id="school_address"
            v-model="form.school_address"
            placeholder="Masukkan Alamat Sekolah / Instansi Anda"
            required
            ></b-form-input>
        </b-form-group>
        <b-form-group id="city" label="Asal Kota Anda :" label-for="city">
            <b-form-input
            id="city"
            v-model="form.city"
            placeholder="Masukkan Asal Kota Anda"
            required
            ></b-form-input>
        </b-form-group>
        <b-form-group id="information_from" label="Darimana Anda Tahu Informasi Mengenai MAGE 7 :" label-for="information_from">
            <b-form-input
            id="information_from"
            v-model="form.information_from"
            placeholder="contoh : Instagram, Facebook, Teman Sekolah dll"
            required
            ></b-form-input>
        </b-form-group>
        <!-- foto identitas -->
        <b-form-group id="identitasKetua" label="Foto Identitas Ketua (KTP atau SIM atau yang lain) :" label-for="identitasKetua">
            <b-form-file
            v-model="identitasKetua"
            :state="Boolean(identitasKetua)"
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."
            ></b-form-file>
        </b-form-group>
        <b-form-group id="identitasAnggota1" label="Foto Identitas Anggota 1 (KTP atau SIM atau yang lain) :" label-for="identitasAnggota1">
            <b-form-file
            v-model="identitasAnggota1"
            :state="Boolean(identitasAnggota1)"
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."
            ></b-form-file>
        </b-form-group>
        <b-form-group id="identitasAnggota2" label="Foto Identitas Anggota 2 (KTP atau SIM atau yang lain) :" label-for="identitasAnggota2">
            <b-form-file
            v-model="identitasAnggota2"
            :state="Boolean(identitasAnggota2)"
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."
            ></b-form-file>
        </b-form-group>
        <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
            <label class="form__label">Name</label>
            <input class="form__input" v-model.trim="form.name" @input="setName($event.target.value)"/>
        </div>
        <div class="error" v-if="!$v.name.required">Field is required</div>
        <div class="error" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
  import { required, minLength } from 'vuelidate/lib/validators'
  export default {
    data() {
      return {
        form: {
          name : '',
          team_name: '',
          head_team_name : '',
          member1_name : '',
          member2_name : '',
          no_hp : '',
          no_wa : '',
          id_line : '', 
          school_name : '',
          school_address : '',
          city : '',
          information_from : '',
          identitasKetua: null,
          identitasAnggota1 : null,
          identitasAnggota2 : null
        },
        show: true,
        url: window.location.href,
      }
    },
    validations: {
        name: {
            required,
            minLength: minLength(4)
        },
    },
    methods: {
      setName(value) {
        this.name = value
        this.$v.name.$touch()
      },
      getUrl() {
        return this.url.includes("registeriotdev");
      },
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.team_name = '',
        this.form.head_team_name = '',
        this.form.member1_name = '',
        this.form.member2_name = '',
        this.form.no_hp = '',
        this.form.no_wa = '',
        this.form.id_line = '', 
        this.form.school_name = '',
        this.form.school_address = '',
        this.form.city = '',
        this.form.information_from = '',
        this.form.identitasKetua= null,
        this.form.identitasAnggota1 = null,
        this.form.identitasAnggota2 = null
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>