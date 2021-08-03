<template>
  <div class="register-page">
    <div v-if="loadingSubmit">
      <LoadingSubmit />
    </div>
    <img src="@/assets/img/bg1.png" id="bg" alt="">
    <div class="register-container shadow">
      <a href="/"><img class="logo mt-4" src="@/assets/img/mage.png" /></a>
      <div>
        <label>Username</label>
        <input
          type="text"
          name="name"
          placeholder="Ketik disini..."
          v-model="user.name"
          autofocus="autofocus"
          :class="[$v.user.name.$error ? 'red-border' : 'black-border']"
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          id="input-field"
          v-model="$v.user.email.$model"
          :class="status($v.user.email)"
          placeholder="Ketik disini..."
        />
        <div class="error" v-if="!$v.user.email.email">
          Harus di isi dengan format email
        </div>
      </div>
      <div>
        <label>Sandi</label>
        <div id="password-input">
          <input
            :type="type"
            name="password"
            id="input-field"
            v-model="$v.user.password.$model"
            :class="status($v.user.password)"
            placeholder="Ketik disini..."
          />
          <span @click="revealPassword" class="eye">
            <span :style="{ display: eye1 }"><i class="fas fa-eye"></i></span>
            <span :style="{ display: eye2 }"><i class="fas fa-eye-slash"></i></span>
          </span>
        </div>
        <div
          class="error"
          v-if="!$v.user.password.minLength || !$v.user.password.alphaNum"
        >
          Password minimal 8 karakter
        </div>
      </div>
      <div>
        <label>Konfirmasi sandi</label>
        <div id="password-input">
          <input
            :type="type2"
            name="passwordConfirmation"
            placeholder="Ketik disini..."
            v-model="passwordConfirmation"
            @keyup.enter="handleRegister"
            :class="[
              $v.passwordConfirmation.$error ? 'red-border' : 'black-border',
            ]"
          />
          <span @click="revealConfirmPassword" class="eye">
            <span :style="{ display: eye3 }"><i class="fas fa-eye"></i></span>
            <span :style="{ display: eye4 }"><i class="fas fa-eye-slash"></i></span>
          </span>
        </div>
      </div>

      <input
        type="submit"
        name="register"
        class="mt-4"
        value="Register"
        @click="handleRegister()"
      />
      <p class="text-center mt-2">
        Sudah punya akun?
        <a
          v-if="!getUrl()"
          @click="$store.dispatch('ui/changeWelcomeComponent', 'login')"
          href="#"
          >Login</a
        >
        <a v-if="getUrl()" href="/login">Login</a>
      </p>
    </div>
    <a v-if="!getUrl()" @click="moveToWelcome()">
      <img class="close" src="@/assets/close.png" />
    </a>
  </div>
</template>
<script>
import Swal from 'sweetalert2'
import LoadingSubmit from "@/components/LoadingSubmit";

import {
  required,
  minLength,
  maxLength,
  email,
  sameAs,
  alphaNum,
} from "vuelidate/lib/validators";

export default {
  name: "Register",
  components: {
    LoadingSubmit,
  },
  data() {
    return {
      loadingSubmit: false,
      user: {
        name: "",
        email: "",
        password: "",
      },
      type: "password",
      type2: "password",
      eye1: "block",
      eye2: "none",
      eye3: "block",
      eye4: "none",
      passwordConfirmation: "",
      loading: false,
      message: "",
      provinces: [],
      cities: [],
      subdistricts: [],
      url: window.location.href,
    };
  },
  watcher: {
    user() {
      this.$v.$touch();
      if (this.$v.$error) {
        console.log(this.$v);
      }
    },
  },
  validations: {
    user: {
      name: {
        required,
        alphaNum,
        minLength: minLength(8),
      },
      email: {
        required,
        email,
        maxLength: maxLength(50),
      },
      password: {
        required,
        alphaNum,
        minLength: minLength(8),
      },
    },
    passwordConfirmation: {
      sameAsPassword: sameAs("password"),
    },
  },
  methods: {
    status(validation) {
      return {
        error: validation.$error,
        dirty: validation.$dirty,
      };
    },
    revealPassword() {
      if (this.type === "password") {
        this.type = "text";
        this.eye2 = "block";
        this.eye1 = "none";
      } else {
        this.type = "password";
        this.eye1 = "block";
        this.eye2 = "none";
      }
    },
    revealConfirmPassword() {
      if (this.type2 === "password") {
        this.type2 = "text";
        this.eye4 = "block";
        this.eye3 = "none";
      } else {
        this.type2 = "password";
        this.eye3 = "block";
        this.eye4 = "none";
      }
    },
    getProvinces() {
      this.$store.dispatch("ui/getProvinces").then((data) => {
        console.log(data);
        this.provinces = data;
      });
    },
    getCities(provincename) {
      this.$store.dispatch("ui/getCities", provincename).then((data) => {
        this.cities = data;
      });
    },
    getSubdistricts(cityname) {
      this.$store.dispatch("ui/getSubdistricts", cityname).then((data) => {
        this.subdistricts = data;
      });
    },
    moveToWelcome() {
      this.$store.dispatch("ui/changeWelcomeComponent", "welcome");
    },
    moveToLogin() {
      this.$store.dispatch("ui/changeWelcomeComponent", "login");
    },
    handleRegister() {
      this.loadingSubmit = true;
      if (this.user.password === this.passwordConfirmation) {
        if (this.user.name && this.user.email && this.user.password) {
          this.$store.dispatch("auth/register", this.user).then(
            () => {
              this.loadingSubmit = false;
              Swal.fire({
                icon: "success",
                title: "Register berhasil",
                html: `<span style="color:#eee">Silakan Cek Email Anda Untuk Melakukan Verifikasi Akun<span>`,
                showConfirmButton: true,
                background: "#111",
                customClass: {
                  title: 'text-white',
                },
              }).then(() => {
                this.$router.push("/dashboard");
                location.reload();
              });
            },
            (error) => {
              this.loadingSubmit = false;
              this.message =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
              Swal.fire({
                icon: "error",
                title: "Register gagal",
                html: `<span style="color:#eee">${this.message}<span>`,
                showConfirmButton: true,
                background: "#111",
                customClass: {
                  title: 'text-white',
                },
              }).then(() => {});
            },
          );
        } else {
          this.loadingSubmit = false;
          Swal.fire({
            icon: "warning",
            title: "Semua input field harus diisi",
            showConfirmButton: true,
            background: "#111",
            customClass: {
              title: 'text-white',
            },
          }).then(() => {});
        }
      } else {
        this.loadingSubmit = false;
        Swal.fire({
          icon: "warning",
          title: "Konfirmasi sandi salah",
          showConfirmButton: true,
          background: "#111",
          customClass: {
            title: 'text-white',
          },
        }).then(() => {});
      }
    },
    getUrl() {
      return this.url.includes("register");
    },
  },
  created() {
    this.getProvinces();
    window.scrollTo(0, 0);
  },
};
</script>
<style scoped>
#bg {
  position: fixed;
  top: 0;
  left: 0;
  /* Preserve aspet ratio */
  min-width: 100%;
  min-height: 100%;
}
.background-register {
  background-image: url("./../assets/img/bg1.png");
  background-size: cover;
  width: 100%;
  height: 100%;
  margin-top: -20px;
  box-sizing: border-box;
  position: absolute;
}
.register-page {
  background: rgb(0, 0, 0);
  margin-bottom: 20px;
  min-height: 100%;
}

.register-page .logo {
  margin-left: -40px;
}

.register-page .logo img {
  height: 100px;
  width: 170px;
  margin-top: -20px;
}

.register-page .logo h1 {
  display: block;
  margin-top: 60px;
}

.register-page .close {
  position: absolute;
  top: 40px;
  right: 40px;
  height: 30px;
  width: 30px;
  opacity: 1;
}

.register-container {
  width: 420px;
  height: 600px;
  margin-top: 40px;
  margin-left: calc(50% - 210px);
  margin-bottom: 20px;
  background: #111;
  box-sizing: border-box;
  padding: 10px 20px;
  position: absolute;
  color: #ece8e1;
}

.register-container .logo {
  height: 80px;
  width: 80px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
}

.register-container h1 {
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;
}

.register-container label {
  display: block;
  text-align: left;
}

.register-container div {
  margin-bottom: 20px;
}

.register-container input[type="text"], input[type="email"],
input[type="password"] {
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 1px solid #000;
  background: transparent;
  color: #ece8e1;
  height: 40px;
  transition: all 0.3s;
}

.register-container input[type="email"]:focus, input[type="text"]:focus,
input[type="password"]:focus {
  border-bottom: 3px solid #ff4655;
}

#password-input {
  display: flex;
  justify-content: space-between;
}

.eye {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  border: 3px solid rgb(0, 0, 0, 255);
  transition: all .3s;
}

.eye:hover {
  border-radius: 5px;
  border: 3px solid red;
}

::-ms-clear, ::-ms-reveal {
  display: none;
}

a {
  cursor: pointer;
  color: rgba(255, 70, 85, 1);
}

.black-border {
  border: none;
  border-bottom: 1px solid black;
}

.red-border {
  border: none;
  border-bottom: 1px solid #df4759;
}

.register-container input[type="submit"] {
  width: 100%;
  border: none;
  outline: none;
  height: 40px;
  background: rgb(77, 30, 41);
  background: linear-gradient(
    90deg,
    rgba(77, 30, 41, 1) 0%,
    rgba(255, 70, 85, 1) 35%,
    rgba(255, 124, 157, 1) 100%
  );
  color: #ece8e1;
}
.register-container input[type="submit"]:hover {
  cursor: pointer;
  box-shadow: 1px 1px 10px #696969;
}

a {
  display: inline;
  text-decoration: none;
  font-size: 12px;
  margin: 0;
  padding: 0;
}

p {
  color: #ece8e1;
  font-size: 12px;
  margin: 0;
  padding: 0;
}

.is-invalid {
  border-color: red;
}

.dirty {
  border-color: #5a5;
  background: #111;
}

.error {
  border-color: #111;
  background: #111;
  color: #ff4655;
  height: 20px;
}

@media (max-width: 700px) {
  .register-container {
    max-width: 360px;
    margin-left: calc(50% - 180px);
    margin-top: 80px;
  }
  .register-page {
    height: calc(100% + 100px);
  }
}
</style>
