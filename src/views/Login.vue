<template>
  <div class="login-page">
    <div v-if="loadingSubmit">
      <LoadingSubmit />
    </div>
    <img src="/img/bg1.png" id="bg" alt="">
    <div class="login-container shadow">
      <a href="/"><img class="logo mt-4" src="/img/mage.png" /></a>
      <div>
        <label>Email</label>
        <input
          id="input-email"
          type="email"
          v-model="$v.user.email.$model"
          :class="status($v.user.email)"
          placeholder="Ketik disini..."
          autofocus="autofocus"
        />
        <div class="error" v-if="!$v.user.email.email">
          Harus di isi dengan format email
        </div>
        <!-- <pre>{{ $v }}</pre> -->
        <!-- <input
          type="text"
          name="email"
          placeholder="Masukkan Email Anda"
          v-model="user.email"
        /> -->
      </div>
      <div>
        <label>Sandi</label>
        <div id="password-input">
          <input
            :type="type"
            name="password"
            placeholder="Ketik disini..."
            @keyup.enter="handleLogin"
            v-model="user.password"
          />
          <span @click="revealPassword" class="eye">
            <span :style="{ display: eye1 }"><i class="fas fa-eye"></i></span>
            <span :style="{ display: eye2 }"><i class="fas fa-eye-slash"></i></span>
          </span>
        </div>
      </div>
      <p class="text-left">
        <router-link
          :to="{ name: 'ForgotPassword' }"
          >Lupa kata sandi?</router-link
        >
      </p>
      <input
        type="submit"
        name="login"
        class="mt-4"
        value="Login"
        @click="handleLogin()"
      />
      <b-container class="px-0 mt-3">
        <b-row class="text-center">
          <b-col class="my-0">
          <div @click="signInWithGoogle" class="user-google py-2 my-0">
            <i class="fab fa-google fa-lg"></i>
            <span class="pl-2">Sign in with Google</span>
          </div>
          </b-col>
        </b-row>
      </b-container>
      <p class="text-center">
        Belum punya akun?
        <a
          v-if="!getUrl()"
          @click="$store.dispatch('ui/changeWelcomeComponent', 'register')"
          href="#"
          >Daftar</a
        >
        <a v-if="getUrl()" href="/register">Daftar</a>
      </p>
    </div>
    <a
      v-if="!getUrl()"
      @click="$store.dispatch('ui/changeWelcomeComponent', 'welcome')"
      href="#"
    >
      <img class="close" src="/img/close.png" />
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
// import User from "../models/user";
import Swal from 'sweetalert2';
import firebase from "firebase/app";
import "firebase/auth";
import { email } from "vuelidate/lib/validators";
import LoadingSubmit from "@/components/LoadingSubmit";

export default {
  name: "Login",
  components: {
    LoadingSubmit,
  },
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      type: "password",
      eye1: "block",
      eye2: "none",
      loadingSubmit: false,
      message: "",
      url: window.location.href,
    };
  },
  validations: {
    user: {
      email: {
        email,
      },
    },
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {},
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
    handleLogin() {
      this.loadingSubmit = true;
      if (this.user.email && this.user.password) {
        this.$store.dispatch("auth/login", this.user).then(
          (user) => {
            this.loadingSubmit = false;
            Swal.fire({
              icon: "success",
              title: "Login berhasil",
              text: this.id,
              showConfirmButton: true,
              background: "#111",
              customClass: {
                title: 'text-white',
              },
            }).then(() => {
              this.$store.dispatch("ui/changeWelcomeComponent", "welcome");
              this.$router.push("/dashboard");
            });

            // localStorage.setItem('id', JSON.stringify(user.user.id));
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
              title: "Login gagal",
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
    },
    getUrl() {
      return this.url.includes("login");
    },
    signInWithGoogle() {
      this.loadingSubmit = true;
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope("profile");
      provider.addScope("email");
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(async (result) => {
          const idToken = await firebase.auth().currentUser.getIdToken(true);
          this.$store.dispatch("auth/googleLogin", idToken)
            .then((res) => {
              Swal.fire({
                icon: "success",
                title: "Login berhasil",
                text: this.id,
                showConfirmButton: true,
                background: "#111",
                customClass: {
                  title: 'text-white',
                },
              }).then(() => {
                this.$store.dispatch("ui/changeWelcomeComponent", "welcome");
                this.$router.push("/dashboard");
              });
              this.loadingSubmit = false;
            })
            .catch((error) => {
              this.message =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
              Swal.fire({
                icon: "error",
                title: "Login gagal",
                html: `<span style="color:#eee">${this.message}<span>`,
                showConfirmButton: true,
                background: "#111",
                customClass: {
                  title: 'text-white',
                },
              }).then(() => {});
              this.loadingSubmit = false;
            });
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Login gagal",
            html: `<span style="color:#eee">${err}<span>`,
            showConfirmButton: true,
            background: "#111",
            customClass: {
              title: 'text-white',
            },
          }).then(() => {});
          this.loadingSubmit = false;
        });
    },
    signInWithFacebook() {
      const provider = new firebase.auth.FacebookAuthProvider();
      provider.addScope("profile");
      provider.addScope("email");
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function (result) {
          const { user } = result;

          Swal.fire({
            icon: "success",
            title: `Selamat datang ${user.displayName}`,
            showConfirmButton: true,
          }).then(() => {
            this.$router.push("/dashboard");
          });
        });
    },
    signInWithTwitter() {
      const provider = new firebase.auth.TwitterAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function (result) {
          const { user } = result;

          Swal.fire({
            icon: "success",
            title: `Selamat datang ${user.displayName}`,
            showConfirmButton: true,
          }).then(() => {
            this.$router.push("/dashboard");
          });
        });
    },
  },
  mounted() {},
  updated() {},
  watch: {
    $route() {
      this.$store.dispatch('ui/changeWelcomeComponent', 'welcome');
    },
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
.background-login {
  background-image: url("/img/bg1.png");
  background-color: #111;
  background-size: cover;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: absolute;
}

.login-page {
  background: rgb(0, 0, 0);
  min-height: 100%;
  background-size: cover;
  max-height: 100%;
  overflow-y: hidden;
}

.login-page .logo h1 {
  display: block;
  margin-top: 60px;
}

.login-page .close {
  position: absolute;
  top: 40px;
  right: 40px;
  height: 30px;
  width: 30px;
  opacity: 1;
}

.login-container {
  width: 420px;
  height: 500px;
  position: absolute;
  margin-left: calc(50% - 210px);
  margin-top: calc(50% - 600px);
  margin-bottom: 20px;
  background: #111;
  color: #ece8e1;
  box-sizing: border-box;
  padding: 10px 20px;
}

.login-container .logo {
  height: 80px;
  width: 80px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
}

.login-container h1 {
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;
}

.login-container label {
  display: block;
  text-align: left;
}

.login-container div {
  margin-bottom: 20px;
}

.login-container input[type="email"], input[type="text"],
input[type="password"] {
  display: block;
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 1px solid #ff4655;
  background: transparent;
  color: #ece8e1;
  height: 40px;
  transition: all .3s;
}

.login-container input[type="email"]:focus, input[type="text"]:focus,
input[type="password"]:focus {
  border-bottom: 3px solid #ff4655;
}

.login-container input::placeholder {
  color: #a0a0a0;
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

.login-container input[type="submit"] {
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
  transition: all .3s;
}
.login-container input[type="submit"]:hover {
  cursor: pointer;
  box-shadow: 1px 1px 10px #696969;
  background: linear-gradient(
    90deg,
    rgba(77, 30, 41, 1) 0%,
    rgba(230, 0, 15, 1) 35%,
    rgba(235, 74, 107, 1) 100%
  );
}
.login-container input[type="submit"]:active {
  transform: scale(0.9);
}

.user-google {
  background-color: #555;
  color: #ff4655;
  cursor: pointer;
  transition: all .3s;
}

.user-google:hover {
  background-color: #444;
}

.user-google:active {
  background-color: #333;
  transform: scale(0.9);
}

a {
  display: inline;
  text-decoration: none;
  font-size: 12px;
  margin: 0;
  padding: 0;
  color: rgba(255, 70, 85, 1);
}

p {
  color: #ece8e1;
  font-size: 12px;
  margin: 0;
  padding: 0;
}

.dirty {
  border-color: #111;
  background: #111;
}

.error {
  border-color: #111;
  background: #111;
  color: #ff4655;
  height: 20px;
}
@media (max-width: 700px) {
  .login-container {
    max-width: 360px;
    margin-left: calc(50% - 180px);
    margin-top: 100px;
  }
  .login-page {
    height: calc(100% + 100px);
  }
}
</style>
