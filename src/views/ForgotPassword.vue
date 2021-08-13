<template>
  <div class="login-page">
    <div class="login-container shadow">
      <h1>Lupa sandi</h1>
      <div>
        <label>Email akun</label>
        <input
          type="email"
          name="email"
          placeholder="Ketik disini..."
          v-model="$v.email.$model"
          :class="status($v.email)"
          autofocus
        />
        <div class="error" v-if="!$v.email.email">
          Harus di isi dengan format email
        </div>
      </div>
      <input
        type="submit"
        name="login"
        class="mt-4"
        value="Kirim"
        @click="requestChangePassword()"
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

import { email, required } from "vuelidate/lib/validators";
// import Swal from "sweetalert2";

export default {
  name: "ForgotPassword",
  data() {
    return {
      email: "",
      loading: false,
      message: "",
    };
  },
  validations: {
    email: {
      email,
      required,
    },
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  methods: {
    status(validation) {
      return {
        error: validation.$error,
        dirty: validation.$dirty,
      };
    },
    requestChangePassword() {
      if (!this.email || this.$v.$invalid) {
        return;
      }
      this.$store.dispatch("auth/requestChangePassword", this.email);
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

.login-container input[type="email"] {
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 1px solid #ff4655;
  background: transparent;
  color: #ece8e1;
  height: 40px;
  transition: all .2s;
}

.login-container input[type="email"]:focus {
  border-bottom: 3px solid #ff4655;
}

.login-container input[type="email"]::placeholder {
  color: #bab5b0;
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
