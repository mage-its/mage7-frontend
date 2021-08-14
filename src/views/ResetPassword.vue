<template>
  <div class="login-page">
    <div class="login-container shadow">
      <h1>Reset password</h1>
      <div>
        <label>Password baru</label>
        <div id="password-input">
          <input
            :type="type"
            name="password"
            v-model="password"
            placeholder="Ketik disini..."
            autofocus
          />
          <span @click="revealPassword" class="eye">
            <span :style="{ display: eye1 }"><i class="fas fa-eye"></i></span>
            <span :style="{ display: eye2 }"><i class="fas fa-eye-slash"></i></span>
          </span>
        </div>
      </div>
      <input
        type="submit"
        name="login"
        class="mt-4"
        value="Kirim"
        @click="requestResetPassword()"
      />
    </div>
    <vue-particles
      color="#ff4655"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="edge"
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
      clickMode="repulse"
      class="particles"
    >
    </vue-particles>
  </div>
</template>
<script>

import Swal from "sweetalert2";

export default {
  name: "ResetPassword",
  data() {
    return {
      password: "",
      loading: false,
      message: "",
      type: "password",
      eye1: "block",
      eye2: "none",
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  methods: {
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
    requestResetPassword() {
      if (!this.password) {
        return;
      }
      this.$store.dispatch("auth/resetPassword", { password: this.password, token: this.$route.params.token })
        .then((response) => {
          Swal.fire({
            icon: "success",
            title: "Password berhasil di reset",
            text: this.id,
            showConfirmButton: true,
            background: "#111",
            customClass: {
              title: 'text-white',
            },
          }).then(() => { this.$router.push("/"); });
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Gagal gan",
            html: `<span style="color:#eee">${err.message || err}<span>`,
            showConfirmButton: true,
            background: "#111",
            customClass: {
              title: 'text-white',
            },
          }).then(() => {});
        });
    },
  },
};
</script>
<style scoped>
.login-page {
  background-image: linear-gradient(
      to right top,
      rgb(13, 33, 60),
      rgb(125, 7, 5, 1)
    );
  background-color: #111;
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-page .particles {
  height: 100%;
  width: 100%;
}

.login-container {
  width: 400px;
  height: 270px;
  background: #111;
  box-sizing: border-box;
  padding: 40px 20px;
  position: absolute;
}

.login-container img {
  width: 100px;
  height: 100px;
  position: absolute;
  left: calc(50% - 50px);
  border-radius: 50%;
  top: -50px;
}

.login-container h1 {
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;
  color: #ece8e1;
}

.login-container label {
  display: block;
  text-align: left;
  color: #ece8e1;
}

.login-container div {
  margin-bottom: 20px;
}

.login-container input[type="text"], input[type="password"] {
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 1px solid #ff4655;
  background: transparent;
  color: #ece8e1;
  height: 40px;
  transition: all .2s;
}

.login-container input[type="text"]:focus, input[type="password"]:focus {
  border-bottom: 3px solid #ff4655;
}

.login-container input[type="text"]::placeholder, input[type="password"]::placeholder {
  color: #bab5b0;
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
  color: #ece8e1;
}

.eye:hover {
  border-radius: 5px;
  border: 3px solid red;
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

.login-container input[type="submit"]:focus {
  outline: 2px solid #ff4655;
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

.error {
  border-color: #111;
  background: #111;
  color: #ff4655;
  height: 0px;
}

</style>
