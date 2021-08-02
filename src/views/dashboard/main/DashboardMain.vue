<template>
  <b-container>
    <div class="bg-light text-dark mb-3 rounded shadow-sm header">
      <h3 class="text-left d-inline float-left">
        <i class="fas fa-home"></i>
        Beranda
      </h3>
    </div>
    <hr />
    <b-row>
      <b-col lg="12">
        <div class="container bg-white p-3 mb-3 text-center rounded-lg shadow">
          <p>
            <br />
            <b>SELAMAT DATANG di Mage 7</b>
            Ini adalah Dashboard anda <br />
            berbagai jenis informasi terkait lomba dapat dilihat disini
          </p>
        </div>
      </b-col>
    </b-row>
    <div v-if="loading">
      <b-row v-if="isEmailVerified">
        <b-col lg="12">
          <div
            class="bg-white p-3 mb-3 text-center rounded-lg shadow border-green"
          >
            <b-row>
              <b-col lg="12">
                <b><i class="far fa-envelope fa-2x"></i></b
              ></b-col>

              <b-col lg="12" class="mt-2"
                ><p>Email anda telah terverifikasi</p></b-col
              >
            </b-row>
          </div>
        </b-col>
      </b-row>
      <b-row v-if="!isEmailVerified">
        <b-col lg="12">
          <div
            class="bg-white p-3 mb-3 text-center rounded-lg shadow border-red"
          >
            <b-row>
              <b-col lg="12">
                <b><i class="far fa-envelope fa-2x"></i></b
              ></b-col>

              <b-col lg="12" class="mt-2"
                ><p>Email anda belum terverifikasi</p>
                <p>
                  Silakan cek email anda, bila tidak ada email pada inbox,
                  silakan cek pada menu spam email. Bila tidak ada juga silakan
                  untuk menghubungi panitia
                </p></b-col
              >
            </b-row>
          </div>
        </b-col>
      </b-row>
    </div>
    <div v-if="registeredComp == ''">
      <router-link :to="{ name: 'MainDocument' }">
        <b-row>
          <b-col lg="12">
            <div
              class="bg-white p-3 mb-3 text-center rounded-lg shadow border-red"
            >
              <b-row>
                <b-col lg="12">
                  <b><i class="fas fa-trophy fa-2x"></i></b
                ></b-col>

                <b-col lg="12" class="mt-2"
                  ><p>Anda belum terdaftar di salah satu divisi</p>
                  <p>Klik Disini Untuk Mendaftar</p></b-col
                >
              </b-row>
            </div>
          </b-col>
        </b-row>
      </router-link>
    </div>
    <div v-else>
      <router-link :to="{ name: 'DashboardMain' }">
        <b-row>
          <b-col lg="12">
            <div
              class="
                bg-white
                p-3
                mb-3
                text-center
                rounded-lg
                shadow
                border-green
              "
            >
              <b-row>
                <b-col lg="12">
                  <b><i class="fas fa-trophy fa-2x"></i></b
                ></b-col>
                <b-col lg="12" class="mt-2"
                  ><p>Anda telah terdaftar di divisi</p>
                  <p v-if="registeredComp == 'iotdev'">IoT Dev</p>
                  <p v-if="registeredComp == 'appdev'">App Dev</p>
                  <p v-if="registeredComp == 'gamedev'">Game Dev</p>
                  <p v-if="registeredComp == 'olim'">Olimpiade</p></b-col
                >
              </b-row>
            </div>
          </b-col>
        </b-row>
      </router-link>
    </div>
    <div class="mb-5">
      <b-card no-body class="text-center">
        <b-tabs v-model="tabIndex" card>
          <b-tab title="App Dev" :title-link-class="linkClass(0)">
            <b-card-title>Contoh Template Proposal App Dev</b-card-title>
            <b-card-text>
              Klik tombol download dibawah ini untuk mendownload contoh template <br> Proposal App Dev
            </b-card-text>
            <a
              target="_blank"
              href="/docx/Template_Proposal_AppDev.docx"
              class="btn d-inline"
            >
              <button class="button" style="vertical-align: middle">
                <span>Download</span>
              </button>
            </a>
          </b-tab>
          <b-tab title="Game Dev" :title-link-class="linkClass(1)">
            <b-card-title>Contoh Template Proposal Game Dev</b-card-title>
            <b-card-text>
              Klik tombol download dibawah ini untuk mendownload contoh template <br /> Proposal Game Dev
            </b-card-text>
            <a
              target="_blank"
              href="/docx/Template_Proposal_Game_Development.docx"
              class="btn d-inline"
            >
              <button class="button" style="vertical-align: middle">
                <span>Download</span>
              </button>
            </a>
          </b-tab>
          <b-tab title="IoT Dev" :title-link-class="linkClass(2)">
            <b-card-title>Contoh Template Proposal IoT Dev</b-card-title>
            <b-card-text>
              Klik tombol download dibawah ini untuk mendownload contoh template <br /> Proposal IoT Dev
            </b-card-text>
            <a
              target="_blank"
              href="/docx/Template_Proposal_IoT.docx"
              class="btn d-inline"
            >
              <button class="button" style="vertical-align: middle">
                <span>Download</span>
              </button>
            </a>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </b-container>
</template>
<script>
import axios from "axios";

export default {
  name: "DashboardMain",
  data() {
    return {
      tabIndex: 0,
      loading: false,
      isEmailVerified: true,
      registeredComp: "",
    };
  },
  beforeMount() {
    this.getProfile();
  },
  methods: {
    linkClass(idx) {
      if (this.tabIndex === idx) {
        return ["bg-danger", "text-white"];
      } else {
        return ["bg-light", "text-danger"];
      }
    },
    getProfile() {
      const user = JSON.parse(localStorage.getItem("user"));
      axios
        .get(`${this.endpointAPI}api/v1/users/profile`, {
          headers: {
            "Content-Type": undefined,
            Authorization: `Bearer ${user.tokens.access.token}`,
          },
        })
        .then((response) => {
          this.isEmailVerified = response.data.user.isEmailVerified;
          this.registeredComp = response.data.user.registeredComp;
          this.loading = true;
        })
        .catch((error) => {
          if (error.response.data.code == 401) {
            this.refreshToken();
          }
        });
    },
    refreshToken() {
      const user = JSON.parse(localStorage.getItem("user"));
      axios
        .post(`${this.endpointAPI}api/v1/auth/refresh-tokens`, {
          refreshToken: user.tokens.refresh.token,
        })
        .then((response) => {
          user.tokens = response.data;
          localStorage.setItem("user", JSON.stringify(user));
        })
        .then(() => {
          this.getProfile();
        });
    },
  },
};
</script>
<style scoped>
.header {
  min-height: 90px;
  min-width: 100%;
  padding: 30px;
}
.btn {
  padding: 10px 30px;
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(255, 255, 255);
}
.border-red {
  border: 1px solid red;
}
.button {
  display: inline-block;
  border-radius: 20px;
  background-color: #912809;
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 15px;
  padding: 20px;
  width: 200px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: "\00bb";
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}
</style>
