<template>
  <div class="register-page">
    <div class="background-register"></div>
    <div class="register-container shadow">
      <img class="logo mt-4" src="@/assets/img/mage.png" />
      <div>
        <label>Username</label>
        <input
          type="text"
          name="name"
          placeholder="Ketik disini..."
          v-model="user.name"
          :class="[$v.user.name.$error ? 'red-border' : 'black-border']"
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          id="input-field"
          v-model="$v.user.email.$model"
          :class="status($v.user.email)"
          placeholder="Ketik disini..."
        />
        <div class="error" v-if="!$v.user.email.email">
          Harus di isi dengan format email
        </div>
        <!-- <label>Email</label>
        <input
          type="text"
          name="email"
          placeholder="Ketik disini..."
          v-model="user.email"
          :class="[$v.user.email.$error ? 'red-border' : 'black-border']"
        /> -->
      </div>
      <div>
        <label>Sandi</label>
        <input
          type="password"
          name="password"
          id="input-field"
          v-model="$v.user.password.$model"
          :class="status($v.user.password)"
          placeholder="Ketik disini..."
        />
        <div
          class="error"
          v-if="!$v.user.password.minLength || !$v.user.password.alphaNum"
        >
          Password minimal 8 karakter
        </div>
        <!-- <input
          type="password"
          name="password"
          placeholder="Ketik disini..."
          v-model="user.password"
          :class="[$v.user.password.$error ? 'red-border' : 'black-border']"
        /> -->
      </div>
      <div>
        <label>Konfirmasi sandi</label>
        <input
          type="password"
          name="passwordConfirmation"
          placeholder="Ketik disini..."
          v-model="passwordConfirmation"
          :class="[
            $v.passwordConfirmation.$error ? 'red-border' : 'black-border',
          ]"
        />
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
    <!-- <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="particles"
    >
    </vue-particles> -->
  </div>
</template>
<script>
import Swal from "sweetalert2";

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
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
      },
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
      this.loading = true;
      if (this.user.password == this.passwordConfirmation) {
        if (this.user.name && this.user.email && this.user.password) {
          this.$store.dispatch("auth/register", this.user).then(
            () => {
              Swal.fire({
                icon: "success",
                title: "Register berhasil",
                text: "Silakan Cek Email Anda Untuk Melakukan Verifikasi Akun",
                showConfirmButton: true,
              }).then(() => {
                this.$router.push("/dashboard");
                location.reload();
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
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "konfirmasi sandi salah",
          showConfirmButton: true,
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
  background: #fff;
  box-sizing: border-box;
  padding: 10px 20px;
  position: absolute;
}

.register-container .logo {
  height: 80px;
  width: 80px;
  margin-left: calc(50% - 40px);
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

.register-container input[type="text"],
input[type="password"] {
  width: 100%;
  outline: none;
  background: transparent;
  color: #000;
  height: 40px;
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
  color: #fff;
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
  color: #000;
  font-size: 12px;
  margin: 0;
  padding: 0;
}

.is-invalid {
  border-color: red;
}

#input-field {
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 1px solid #000;
  background: transparent;
  color: #000;
  height: 40px;
}

.dirty {
  border-color: #5a5;
  background: #efe;
}

.error {
  border-color: rgb(255, 255, 255);
  background: rgb(255, 255, 255);
  color: red;
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
