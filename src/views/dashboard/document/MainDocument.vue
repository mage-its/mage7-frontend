<template>
  <div>
    <b-container class="bg-white p-5">
      <div class="form-group">
          <label>Pilih Divisi</label>
          <b-form-radio-group
            v-model="divition"
            :options="divitionOptions"
            class="mb-3"
            value-field="item"
            text-field="name"
            disabled-field="notEnabled"
          ></b-form-radio-group>
        </div>
      <RegisterApp v-if="divition == divitionOptions[0].item"/>
      <RegisterGame v-if="divition == divitionOptions[1].item"/>
      <RegisterIoT v-if="divition == divitionOptions[2].item"/>
      <RegisterOlim v-if="divition == divitionOptions[3].item"/>
    </b-container>
  </div>
</template>
<script>
import Swal from 'sweetalert2';
import {
  required,
  minLength,
  alphaNum,
  numeric,
} from 'vuelidate/lib/validators';
import RegisterApp from '@/views/dashboard/register-competition/RegisApp.vue';
import RegisterGame from '@/views/dashboard/register-competition/RegisGame.vue';
import RegisterIoT from '@/views/dashboard/register-competition/RegisIoT.vue';
import RegisterOlim from '@/views/dashboard/register-competition/RegisOlim.vue';

export default {
  name: 'MainDocument',
  components: {
    RegisterApp,
    RegisterGame,
    RegisterIoT,
    RegisterOlim,
  },
  data() {
    return {
      divition: 'App Dev',
      divitionOptions: [
        { item: 'App Dev', name: 'App Dev' },
        { item: 'Game Dev', name: 'Game Dev' },
        { item: 'IoT Dev', name: 'IoT Dev' },
        { item: 'Olimpiade Dev', name: 'Olimpiade Dev' },
      ],
    };
  },
  validations: {

  },
  computed: {
    participant() {
      return JSON.parse(localStorage.getItem('user'));
    },
  },
  methods: {
    addFile(type) {
      this.document.type = type;
      let fileExtension = '';
      if (type == 'osis_card') {
        this.fileName.osis_card = this.$refs.osis_card.files[0].name.toString();

        fileExtension = /[.]/.exec(this.fileName.osis_card)
          ? /[^.]+$/.exec(this.fileName.osis_card)
          : undefined;
        if (fileExtension != 'jpg') {
          Swal.fire({
            title: 'Format file tidak sesuai',
            icon: 'error',
            showConfirmButton: true,
          }).then();
          this.fileName.osis_card = 'Unggah scan kartu pelajar (*.jpg)';
        }
      } else {
        this.fileName.image = this.$refs.image.files[0].name.toString();
        this.fileName.osis_card = this.$refs.osis_card.files[0].name.toString();

        fileExtension = /[.]/.exec(this.fileName.image)
          ? /[^.]+$/.exec(this.fileName.image)
          : undefined;
        if (fileExtension != 'jpg') {
          Swal.fire({
            title: 'Format file tidak sesuai',
            icon: 'error',
            showConfirmButton: true,
          }).then();
          this.fileName.image = 'Unggah pas foto (*.jpg)';
        }
      }
    },
    uploadFile(type) {
      const document = new FormData();

      document.append('type', type);
      if (type == 'osis_card') {
        this.loading1 = true;
        document.append('file', this.$refs.osis_card.files[0]);
      } else {
        this.loading2 = true;
        document.append('file', this.$refs.image.files[0]);
      }

      const formParticipant = {
        document,
        id: this.participant.id,
      };

      console.log(formParticipant);

      this.$store
        .dispatch('participant/uploadParticipant', formParticipant)
        .then(
          (response) => {
            Swal.fire({
              title: 'Berhasil mengunggah dokumen',
              icon: 'success',
              showConfirmButton: true,
            }).then();
            if (this.loading1) this.loading1 = false;
            if (this.loading2) this.loading2 = false;
            const participant = response.data.data;
            const user = JSON.parse(localStorage.getItem('user'));
            user.participant = participant.participant;
            user.firstname = participant.firstname;
            user.lastname = participant.lastname;
            localStorage.setItem('user', JSON.stringify(user));
            this.formParticipant.id = this.participant.id;
            this.formParticipant.firstname = this.participant.firstname;
            this.formParticipant.lastname = this.participant.lastname;
            this.formParticipant.birthDate = this.participant.participant.birthDate;
            this.formParticipant.grade = this.participant.participant.grade;
            this.formParticipant.address = this.participant.participant.address;
            this.formParticipant.schoolName = this.participant.participant.school.name;
            this.formParticipant.schoolAddress = this.participant.participant.school.address;

            this.formParticipant.id = this.participant.id;
            this.formParticipant.firstname = this.participant.firstname;
            this.formParticipant.lastname = this.participant.lastname;
            this.formParticipant.birthDate = this.participant.participant.birth_date.substr(
              0,
              10,
            );
            this.formParticipant.phoneNumber = this.participant.participant.phone_number;
            this.formParticipant.grade = this.participant.participant.grade;
            this.formParticipant.address = this.participant.participant.address;
            this.formParticipant.schoolName = this.participant.participant.school.name;
            this.formParticipant.schoolAddress = this.participant.participant.school.address;

            if (this.participant.participant.document == null) {
              this.participant.participant.document.osis_card == 0;
              this.participant.participant.document.image == 0;
            }
          },
          () => {},
        );
    },
    updateParticipant() {
      this.$v.$touch();
      this.loading = true;
      this.$store
        .dispatch('participant/updateParticipant', this.formParticipant)
        .then(
          (response) => {
            this.loading = false;
            const participant = response;
            const user = JSON.parse(localStorage.getItem('user'));
            user.participant = participant.participant;
            user.firstname = participant.firstname;
            user.lastname = participant.lastname;
            localStorage.setItem('user', JSON.stringify(user));
            this.formParticipant.id = this.participant.id;
            this.formParticipant.firstname = this.participant.firstname;
            this.formParticipant.lastname = this.participant.lastname;
            this.formParticipant.birthDate = this.participant.participant.birthDate;
            this.formParticipant.grade = this.participant.participant.grade;
            this.formParticipant.address = this.participant.participant.address;
            this.formParticipant.schoolName = this.participant.participant.school.name;
            this.formParticipant.schoolAddress = this.participant.participant.school.address;

            Swal.fire({
              title: 'Berhasil memperbarui identitas',
              icon: 'success',
              showConfirmButton: true,
            }).then();
          },
          (err) => {
            console.log(err);
          },
        );
    },
  },
  created() {

  },
};
</script>
<style>
input {
  width: 100%;
  padding: 3px 3px;
}
#dropFileForm {
  margin: 16px;
  text-align: center;
  border-radius: 8px;
  overflow: hidden;
  transition: 0.5s;
}

#dropFileForm #fileLabel {
  background-color: rgba(200, 200, 200, 0.5);
  display: block;
  padding: 16px;
  position: relative;
  cursor: pointer;

  border: 2px dashed #555;
}

#dropFileForm #fileImage {
  display: none;
}

#dropFileForm #fileOsis {
  display: none;
}

#dropFileForm #fileLabel:after,
#dropFileForm #fileLabel:before {
  position: absolute;
  content: "";
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  z-index: -2;
  border-radius: 8px 8px 0 0;
}

#dropFileForm #fileLabel:before {
  z-index: -1;
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 5%,
    black 5%,
    black 10%
  );
  opacity: 0;
  transition: 0.5s;
}

#dropFileForm.fileHover #fileLabel:before {
  opacity: 0.25;
}

#dropFileForm .uploadButton {
  border: 0;
  outline: 0;
  width: 100%;
  padding: 8px;
  background-color: #58427c;
  color: #fff;
  cursor: pointer;
}

#dropFileForm.fileHover {
  box-shadow: 0 0 16px limeGreen;
}

.btn-purple {
  border: 0;
  outline: 0;
  width: 100%;
  padding: 8px;
  background-color: #58427c;
  color: #fff;
  cursor: pointer;
}

img {
  width: 500px;
  height: 300px;
}

.btn-red{
  color: white;
  background-color: #3f0d12;
  background-image: linear-gradient(315deg, #3f0d12 0%, #a71d31 74%);
}
</style>
