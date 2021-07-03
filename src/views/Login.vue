<template>
  <div class="login-page">
    <a
      v-if="!getUrl()"
      @click="$store.dispatch('ui/changeWelcomeComponent', 'welcome')"
      href="#"
    >
      <img class="close" src="@/assets/close.png" />
    </a>
    <div class="login-container shadow">
      <img class="logo mt-4" src="@/assets/img/mage.png" />
      
      <div>
        <label>Email</label>
        <input
          type="text"
          name="email"
          placeholder="Masukkan Email Anda"
          v-model="user.email"
        />
      </div>
      <div>
        <label>Sandi</label>
        <input
          type="password"
          name="password"
          placeholder="Ketik disini..."
          v-model="user.password"
        />
      </div>
      <p class="text-left">
        <router-link :to="{ name: 'ForgotPassword' }"
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
      <p class="text-center mt-2">
        Belum punya akun?
        <a
          v-if="!getUrl()"
          @click="$store.dispatch('ui/changeWelcomeComponent', 'register')"
          href="#"
          >Daftar</a
        >
        <a v-if="getUrl()" href="/register">Daftar</a>
      </p>
      <b-container class="ph-3 mb-3">
        <p class="text-center mt-4">Atau login menggunakan</p>
        <b-row class="mt-4">
          <b-col cols="4">
          <a @click="signInWithGoogle" href="#">
            <i  class="fab fa-google fa-2x"></i>
            </a>
          </b-col>
          <b-col cols="4">
          <a @click="signInWithFacebook" href="#">
            <i class="fab fa-facebook fa-2x"></i>
            </a>
          </b-col>
          <b-col cols="4">
          <a @click="signInWithTwitter" href="#">
            <i class="fab fa-twitter fa-2x"></i>
          </a>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <vue-particles
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
    </vue-particles>
  </div>
</template>
<script>
// import User from "../models/user";
import Swal from "sweetalert2";
import firebase from "firebase";

export default {
  name: "Login",
  data() {
    return {
      // user: new User("", ""),
      user : {
        email : "",
        password : ""
      },
      loading: false,
      message: "",
      url: window.location.href,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {},
  methods: {
    handleLogin() {
      this.loading = true;

      if (this.user.email && this.user.password) {
        this.$store.dispatch("auth/login", this.user).then(
          (user) => {
            Swal.fire({
              icon: "success",
              title: "Login berhasil",
              text: this.id,
              showConfirmButton: true,
            }).then(() => {
              this.$router.push("/dashboard");
            })

            localStorage.setItem('id', JSON.stringify(user.user.id));
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
              title: "Login gagal",
              text: this.message,
              showConfirmButton: true,
            }).then(() => {});
          }
        )
      }
    },
    getUrl() {
      return this.url.includes("login");
    },
    signInWithGoogle() {
      // Using a popup.
      var provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope("profile");
      provider.addScope("email");
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
          var user = result.user;

          Swal.fire({
              icon: "success",
              title: "Selamat datang "+user.displayName,
              showConfirmButton: true,
            }).then(() => {
              this.$router.push("/dashboard");
            });
          
        });
    },
    signInWithFacebook() {
      var provider = new firebase.auth.FacebookAuthProvider();
      provider.addScope("profile");
      provider.addScope("email");
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
          var user = result.user;

          Swal.fire({
              icon: "success",
              title: "Selamat datang "+user.displayName,
              showConfirmButton: true,
            }).then(() => {
              this.$router.push("/dashboard");
            });
          
        });
    },
    signInWithTwitter() {
      var provider = new firebase.auth.TwitterAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
          var user = result.user;

          Swal.fire({
              icon: "success",
              title: "Selamat datang "+user.displayName,
              showConfirmButton: true,
            }).then(() => {
              this.$router.push("/dashboard");
            });
          
        });
    }
  },
  mounted() {
    
  },
  updated() {
    
  }
};
</script>
<style scoped>
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
  height: 540px;
  position: absolute;
  margin-left: calc(50% - 210px);
  margin-top: calc(50% - 600px);
  margin-bottom: 20px;
  background: #fff;
  box-sizing: border-box;
  padding: 10px 20px;
}

.login-container .logo{
  height: 80px;
  width: 80px;
  margin-left: calc(50% - 40px);
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

.login-container input[type="text"],
input[type="password"] {
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 1px solid #000;
  background: transparent;
  color: #000;
  height: 40px;
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
  color: #fff;
}
.login-container input[type="submit"]:hover {
  cursor: pointer;
  box-shadow: 1px 1px 10px #696969;
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
  color: #000;
  font-size: 12px;
  margin: 0;
  padding: 0;
}

@media (max-width: 700px) {
  .login-container {
    max-width: 360px;
    margin-left: calc(50% - 180px);
  }
  .login-page {
    height: calc(100% + 100px);
  }
}
</style>
