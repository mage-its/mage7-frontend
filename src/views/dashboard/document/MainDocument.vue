<template>
  <div>
    <b-container class="bg-white p-4">
      <vue-tabs>
        <v-tab title="Dokumen">
          <b-container class="bg-white p-4 mt-3">
            <h2 class="text-left ml-3">Kartu Pelajar</h2>
            <hr />
            <div
              v-if="
                participant.participant.document.osis_card == 0 ||
                  changeOsisCard == 1
              "
            >
              <div id="dropFileForm">
                <input
                  type="file"
                  id="fileOsis"
                  ref="osis_card"
                  @change="addFile('osis_card')"
                />

                <label for="fileOsis" id="fileLabel">
                  <i class="fa fa-upload fa-5x"></i>
                  <br />
                  <span id="fileLabelText" v-html="fileName.osis_card" />
                </label>

                <button class="uploadButton" @click="uploadFile('osis_card')">
                  <b-spinner v-if="loading1" label="Spinning"></b-spinner>
                  <p v-if="!loading1" class="d-inline">Unggah</p>
                </button>
              </div>
            </div>
            <div v-else>
              <b-card
                :img-src="
                  'http://anavaugm.com/osis_card_' + participant.id + '.jpg'
                "
                style="width: 500px;"
                ><button class="btn-purple" @click="changeOsisCard = 1">
                  Ganti
                </button>
              </b-card>
            </div>
            <h2 class="text-left ml-3 mt-5">Pas Foto</h2>
            <hr />
            <div
              v-if="
                participant.participant.document.image == 0 || changeImage == 1
              "
            >
              <div id="dropFileForm">
                <input
                  type="file"
                  ref="image"
                  id="fileImage"
                  @change="addFile('image')"
                />

                <label for="fileImage" id="fileLabel">
                  <i class="fa fa-upload fa-5x"></i>
                  <br />
                  <span id="fileLabelText">
                    {{ fileName.image }}
                  </span>
                  <br />
                  <span id="uploadStatus"></span>
                </label>

                <button class="uploadButton" @click="uploadFile('image')">
                  <b-spinner v-if="loading2" label="Spinning"></b-spinner>
                  <p v-if="!loading2" class="d-inline">Unggah</p>
                </button>
              </div>
            </div>
            <div v-else>
              <b-card
                :img-src="
                  'http://anavaugm.com/image_' + participant.id + '.jpg'
                "
                style="width: 500px;"
              >
                <button class="btn-purple" @click="changeImage = 1">
                  Ganti
                </button>
              </b-card>
            </div>
          </b-container>
        </v-tab>
        <v-tab title="Identitas">
          <b-container class="text-left p-3 border mt-3">
            <div class="mt-3">
              <label>Nama depan</label><br />
              <input
                type="text"
                name="email"
                placeholder="Ketik disini..."
                v-model="formParticipant.firstname"
                :class="[
                  $v.formParticipant.firstname.$error
                    ? 'red-border'
                    : 'black-border',
                ]"
              />
            </div>
            <div class="mt-3">
              <label>Nama belakang</label><br />
              <input
                type="text"
                name="email"
                placeholder="Ketik disini..."
                v-model="formParticipant.lastname"
                :class="[
                  $v.formParticipant.lastname.$error
                    ? 'red-border'
                    : 'black-border',
                ]"
              />
            </div>
            <div class="mt-3">
              <label>Tanggal lahir</label><br />
              <b-form-input
                type="date"
                id="started_date"
                v-model="formParticipant.birthDate"
                :class="[
                  $v.formParticipant.birthDate.$error
                    ? 'red-border'
                    : 'black-border',
                ]"
              ></b-form-input>
            </div>
            <div class="mt-3">
              <label>Nomor HP</label><br />
              <input
                type="text"
                name="school"
                placeholder="Ketik disini..."
                v-model="formParticipant.phoneNumber"
                :class="[
                  $v.formParticipant.phoneNumber.$error
                    ? 'red-border'
                    : 'black-border',
                ]"
              />
            </div>
            <div class="mt-3">
              <label>Alamat</label><br />
              <textarea
                type="text"
                name="school"
                row="8"
                class="w-100"
                placeholder="Ketik disini..."
                v-model="formParticipant.address"
                :class="[
                  $v.formParticipant.address.$error
                    ? 'red-border'
                    : 'black-border',
                ]"
              />
            </div>
            <div class="mt-3">
              <label>Kelas</label><br />
              <select class="custom-select" v-model="formParticipant.grade">
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </div>
            <div class="mt-3">
              <label>Nama Sekolah/Instansi</label><br />
              <input
                type="text"
                name="school"
                placeholder="Ketik disini..."
                v-model="formParticipant.schoolName"
                :class="[
                  $v.formParticipant.schoolName.$error
                    ? 'red-border'
                    : 'black-border',
                ]"
              />
            </div>
            <div class="mt-3">
              <label>Alamat Sekolah/Instansi</label><br />
              <textarea
                type="text"
                row="8"
                name="school"
                class="w-100"
                placeholder="Ketik disini..."
                v-model="formParticipant.schoolAddress"
                :class="[
                  $v.formParticipant.schoolAddress.$error
                    ? 'red-border'
                    : 'black-border',
                ]"
              />
            </div>
            <div class="mt-3">
              <label>Region</label><br />
              <select class="custom-select" v-model="formParticipant.region">
                <option value="1"
                  >1 (Jawa Tengah, Daerah Istimewa Yogyakarta)</option
                >
                <option value="2">2 (Banten, Jakarta, Jawa Barat)</option>
                <option value="3">3 (Jawa Timur, Bali, NTT, NTB)</option>
                <option value="4">4 (Sumatra, Kalimantan)</option>
                <option value="5">5 (Sulawesi, Maluku, Papua)</option>
              </select>
            </div>
            <button
              class="btn-purple rounded mt-3"
              @click="updateParticipant()"
            >
              <b-spinner v-if="loading" label="Spinning"></b-spinner>
              <p v-if="!loading" class="d-inline">Submit</p>
            </button>
          </b-container>
        </v-tab>
      </vue-tabs>
    </b-container>
  </div>
</template>
<script>
import Swal from "sweetalert2";
import {
  required,
  minLength,
  alphaNum,
  numeric,
} from "vuelidate/lib/validators";

export default {
  name: "MainDocument",
  data() {
    return {
      formParticipant: {
        firstname: "",
        lastname: "",
        grade: 10,
        birthDate: "",
        address: "",
        phoneNumber: "",
        schoolName: "",
        schoolAddress: "",
        region: 1,
      },
      document: {
        type: "",
      },
      changeImage: 0,
      changeOsisCard: 0,
      loading: false,
      loading1: false,
      loading2: false,
      fileName: {
        osis_card: "Unggah scan kartu pelajar (*.jpg)",
        image: "Unggah pas foto (*.jpg)",
      },
    };
  },
  validations: {
    formParticipant: {
      firstname: {
        required,
        alphaNum,
        minLength: minLength(2),
      },
      lastname: {
        required,
        alphaNum,
        minLength: minLength(2),
      },
      birthDate: {
        required,
      },
      address: {
        required,
        minLength: minLength(10),
      },
      phoneNumber: {
        required,
        numeric,
        minLength: minLength(11),
      },
      schoolName: {
        required,
        alphaNum,
        minLength: minLength(6),
      },
      schoolAddress: {
        required,
        alphaNum,
        minLength: minLength(10),
      },
    },
  },
  computed: {
    participant() {
      return JSON.parse(localStorage.getItem("user"));
    },
  },
  methods: {
    addFile(type) {
      this.document.type = type;
      var fileExtension = "";
      if (type == "osis_card") {
        this.fileName.osis_card = this.$refs.osis_card.files[0].name.toString();

        fileExtension = /[.]/.exec(this.fileName.osis_card)
          ? /[^.]+$/.exec(this.fileName.osis_card)
          : undefined;
        if (fileExtension != "jpg") {
          Swal.fire({
            title: "Format file tidak sesuai",
            icon: "error",
            showConfirmButton: true,
          }).then();
          this.fileName.osis_card = "Unggah scan kartu pelajar (*.jpg)";
        }
      } else {
        this.fileName.image = this.$refs.image.files[0].name.toString();
        this.fileName.osis_card = this.$refs.osis_card.files[0].name.toString();

        fileExtension = /[.]/.exec(this.fileName.image)
          ? /[^.]+$/.exec(this.fileName.image)
          : undefined;
        if (fileExtension != "jpg") {
          Swal.fire({
            title: "Format file tidak sesuai",
            icon: "error",
            showConfirmButton: true,
          }).then();
          this.fileName.image = "Unggah pas foto (*.jpg)";
        }
      }
    },
    uploadFile(type) {
      var document = new FormData();

      document.append("type", type);
      if (type == "osis_card") {
        this.loading1 = true;
        document.append("file", this.$refs.osis_card.files[0]);
      } else {
        this.loading2 = true;
        document.append("file", this.$refs.image.files[0]);
      }

      var formParticipant = {
        document: document,
        id: this.participant.id,
      };

      console.log(formParticipant);

      this.$store
        .dispatch("participant/uploadParticipant", formParticipant)
        .then(
          (response) => {
            Swal.fire({
              title: "Berhasil mengunggah dokumen",
              icon: "success",
              showConfirmButton: true,
            }).then();
            if (this.loading1) this.loading1 = false;
            if (this.loading2) this.loading2 = false;
            const participant = response.data.data;
            var user = JSON.parse(localStorage.getItem("user"));
            user.participant = participant.participant;
            user.firstname = participant.firstname;
            user.lastname = participant.lastname;
            localStorage.setItem("user", JSON.stringify(user));
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
              10
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
          () => {}
        );
    },
    updateParticipant() {
      this.$v.$touch();
      this.loading = true;
      this.$store
        .dispatch("participant/updateParticipant", this.formParticipant)
        .then(
          (response) => {
            this.loading = false;
            const participant = response;
            var user = JSON.parse(localStorage.getItem("user"));
            user.participant = participant.participant;
            user.firstname = participant.firstname;
            user.lastname = participant.lastname;
            localStorage.setItem("user", JSON.stringify(user));
            this.formParticipant.id = this.participant.id;
            this.formParticipant.firstname = this.participant.firstname;
            this.formParticipant.lastname = this.participant.lastname;
            this.formParticipant.birthDate = this.participant.participant.birthDate;
            this.formParticipant.grade = this.participant.participant.grade;
            this.formParticipant.address = this.participant.participant.address;
            this.formParticipant.schoolName = this.participant.participant.school.name;
            this.formParticipant.schoolAddress = this.participant.participant.school.address;

            Swal.fire({
              title: "Berhasil memperbarui identitas",
              icon: "success",
              showConfirmButton: true,
            }).then();
          },
          (err) => {
            console.log(err);
          }
        );
    },
  },
  created() {
    this.formParticipant.id = this.participant.id;
    this.formParticipant.firstname = this.participant.firstname;
    this.formParticipant.lastname = this.participant.lastname;
    this.formParticipant.birthDate = this.participant.participant.birth_date.substr(
      0,
      10
    );
    this.formParticipant.phoneNumber = this.participant.participant.phone_number;
    this.formParticipant.grade = this.participant.participant.grade;
    this.formParticipant.address = this.participant.participant.address;
    this.formParticipant.schoolName = this.participant.participant.school.name;
    this.formParticipant.schoolAddress = this.participant.participant.school.address;

    if (this.participant.participant.document.osis_card == 0) {
      this.participant.participant.document.osis_card == 0;
      this.changeOsisCard = 1;
    }
    if (this.participant.participant.document.image == 0) {
      this.participant.participant.document.image == 0;
      this.changeImage = 1;
    }
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
</style>
