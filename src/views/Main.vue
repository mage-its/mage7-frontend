<template>
  <div class="page">
    <Login v-if="show == 'login'" />
    <Register v-if="show == 'register'" />
    <div v-if="show == 'welcome'">
      <div class="sub-page" id="home">
        <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200">
          <div class="content">
            <div class="tagline"><glitch text="Multimedia and Game Event 7"></glitch></div>

            <div class="title"></div>
            <div class="title-container"><img src="@/assets/img/mage-text.svg" width="400" height="150"/></div>

            <div class="more"><a href="#about">More</a></div>
          </div>

          <div class="mage">
            <img src="@/assets/img/mage.png" />
          </div>
        </div>
      </div>
      <div class="sub-page" id="about">
        <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200">
          <b-row>
            <b-col lg="5">
              <img class="mascot" alt="Maskot MAGE 7" src="@/assets/img/mascot-2a.png" width="800" height="690"/>
            </b-col>
            <b-col lg="7">
              <p class="text-white text-left title mb-3">What is <span class="font-weight-bold">MAGE</span>?</p>
              <p class="text-white text-justify description mb-3">
                <span class="font-weight-bold">MAGE</span> (Multimedia and Game Event) adalah Wadah bagi generasi muda
                dalam berkreasi, berekspresi, dan berkompetisi untuk menuangkan
                inovasi sekaligus menyelesaikan permasalahan dengan memanfaatkan
                berbagai macam teknologi melalui serangkaian kegiatan seperti
                Development Competition (Apps, IoT, Games), Olimpiade, Workshop,
                dan Webinar.
                <a href="#event"
                  ><div class="more mt-4">Our Competition ></div></a
                >
              </p>
            </b-col>
          </b-row>
        </div>
      </div>
      <div class="sub-page" id="event">
        <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200">
          <h1 class="text-white text-center sub-page-title">COMPETITION</h1>
          <div class="content">
            <b-row class="full">
              <b-col cols="6" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                <b-container class="text-center">
                  <img class="logo" src="@/assets/img/app-hitam.svg" />
                </b-container>
              </b-col>
              <b-col cols="6" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                <h1 class="title"><glitch text="App Dev"></glitch></h1>
                <div class="description mt-4 mb-5">
                  <p class="text-justify">
                    Application Competition merupakan cabang kompetisi dari MAGE
                    7, yaitu pembuatan aplikasi mobile yang berskala nasional
                    sebagai media bagi peserta baik pelajar maupun mahasiswa
                    untuk mengeksplorasi kreativitas dan inovasi dalam bidang
                    IT. Application Competition ini sebagai bentuk kesadaran
                    bahwa dengan adanya berbagai macam teknologi yang tersedia,
                    masyarakat dapat dengan mudah mengeksplorasi teknologi,
                    khususnya di bidang teknologi dan informasi untuk
                    terciptanya bangsa yang lebih maju di kemudian hari.
                  </p>
                </div>
                <router-link :to="'/competition/app'">
                  <button class="btn p-3 mt-3">Detail</button>
                </router-link>
              </b-col>
              <b-col lg="12"><div class="divider"></div></b-col>
              <b-col cols="6" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                <h1 class="title"><glitch text="Game Dev"></glitch></h1>
                <div class="description mt-4 mb-5">
                  <p class="text-justify">
                    Game Competition merupakan cabang kompetisi dari MAGE 7 yang
                    diadakan oleh Teknik Komputer ITS. Game Competition diadakan
                    dengan tujuan mendorong kreasi serta inovasi mahasiswa
                    maupun siswa SMA sederajat untuk membuat sebuah aplikasi
                    permainan atau game. Game Competition pada MAGE 7 kali ini
                    mengusung konsep Game Jam dengan keyword ‘Forward’. Game
                    yang akan dibuat akan menggunakan keyword sebagai tema dan
                    kesesuaian dengan tema akan menjadi salah satu minor factor
                    penilaian. Platform dari game sendiri hanya dibatasi pada PC
                    dan mobile. Dengan adanya kompetisi ini, diharapkan para
                    partisipan dapat menemukan terobosan baru di bidang
                    teknologi dan informasi yang diringkas melalui game menarik.
                  </p>
                </div>
                <router-link :to="'/competition/game'">
                  <button class="btn p-3 mt-3">Detail</button>
                </router-link>
              </b-col>
              <b-col cols="6" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                <b-container class="text-center">
                  <img class="logo" src="@/assets/img/game-hitam.svg" />
                </b-container>
              </b-col>
              <b-col lg="12"><div class="divider"></div></b-col>
              <b-col cols="6" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                <b-container class="text-center">
                  <img class="logo" src="@/assets/img/iot-hitam.svg" />
                </b-container>
              </b-col>
              <b-col cols="6" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                <h1 class="title"><glitch text="IoT Dev"></glitch></h1>
                <div class="description mt-4 mb-5">
                  <p class="text-justify">
                    Internet of Things Competition merupakan kompetisi dari MAGE
                    7, yaitu pembuatan alat yang memanfaatkan koneksi nirkabel
                    untuk alat kendali yang dapat terhubung atau berkomunikasi
                    dengan alat - alat yang dikendalikan. Kompetisi yang
                    berskala nasional ini berfungsi sebagai sarana bagi peserta
                    untuk mengembangkan kreativitas dan mewujudkan serta
                    menerapkan ide - ide hebat ke dalam bentuk alat maupun
                    aplikasi (jika diperlukan). Dengan begitu, partisipan telah
                    ikut dalam peran penting memajukan sektor teknologi di
                    Indonesia. Pada kompetisi ini kategori pesertanya meliputi
                    umum.
                  </p>
                </div>
                <router-link :to="'/competition/iot'">
                  <button class="btn p-3 mt-3">Detail</button>
                </router-link>
              </b-col>
              <b-col lg="12"><div class="divider"></div></b-col>
              <b-col cols="6" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                <h1 class="title"><glitch text="Olimpiade"></glitch></h1>
                <div class="description mt-4 mb-5">
                  <p class="text-justify">
                    Kompetisi yang dirancang untuk pelajar SMA/sederajat ini
                    berupa olimpiade dengan berfokus pada 3 mata pelajaran yaitu
                    fisika, pemrograman dan logika. Dengan tujuan untuk mengukur
                    seberapa kompetensi para pelajar SMA/sederajat se-Indonesia
                    dalam menyelesaikan permasalahan terkait. Olimpiade ini akan
                    dilaksanakan secara berkelompok dengan anggota kelompok
                    maksimal 3 orang. Terdiri dari 3 babak, yaitu penyisihan,
                    semifinal dan final. Penyisihan dari olimpiade akan
                    dilaksanakan secara online dalam bentuk interaktif melalui
                    website MAGE 7.
                  </p>
                </div>
                <router-link :to="'/competition/olim'">
                  <button class="btn p-3 mt-3">Detail</button>
                </router-link>
              </b-col>
              <b-col cols="6" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                <b-container class="text-center">
                  <img class="logo" src="@/assets/img/proxy-hitam.svg" />
                </b-container>
              </b-col>
            </b-row>

            <b-col lg="12"><div class="divider"></div></b-col>
            <b-row class="mobile">
              <b-col cols="12">
                <b-container class="text-center">
                  <img class="logo" src="@/assets/img/app-hitam.svg" />
                </b-container>
              </b-col>
              <b-col cols="12">
                <h1 class="title"><glitch text="App Dev"></glitch></h1>
                <div class="description mt-4">
                  <p class="text-justify">
                    Application Competition merupakan cabang kompetisi dari MAGE
                    7, yaitu pembuatan aplikasi mobile yang berskala nasional
                    sebagai media bagi peserta baik pelajar maupun mahasiswa
                    untuk mengeksplorasi kreativitas dan inovasi dalam bidang
                    IT. Application Competition ini sebagai bentuk kesadaran
                    bahwa dengan adanya berbagai macam teknologi yang tersedia,
                    masyarakat dapat dengan mudah mengeksplorasi teknologi,
                    khususnya di bidang teknologi dan informasi untuk
                    terciptanya bangsa yang lebih maju di kemudian hari.
                  </p>
                </div>
                <router-link :to="'/competition/app'">
                  <button class="btn p-3 mt-3">Detail</button>
                </router-link>
              </b-col>
              <b-col cols="12" class="mt-5 mb-5">
                <b-container class="text-center">
                  <img class="logo" src="@/assets/img/game-hitam.svg" />
                </b-container>
              </b-col>
              <b-col cols="12" class="mt-5 mb-5">
                <h1 class="title"><glitch text="Game Dev"></glitch></h1>
                <div class="description mt-4">
                  <p class="text-justify">
                    Game Competition merupakan cabang kompetisi dari MAGE 7 yang
                    diadakan oleh Teknik Komputer ITS. Game Competition diadakan
                    dengan tujuan mendorong kreasi serta inovasi mahasiswa
                    maupun siswa SMA sederajat untuk membuat sebuah aplikasi
                    permainan atau game. Game Competition pada MAGE 7 kali ini
                    mengusung konsep Game Jam dengan keyword ‘Forward’. Game
                    yang akan dibuat akan menggunakan keyword sebagai tema dan
                    kesesuaian dengan tema akan menjadi salah satu minor factor
                    penilaian. Platform dari game sendiri hanya dibatasi pada PC
                    dan mobile. Dengan adanya kompetisi ini, diharapkan para
                    partisipan dapat menemukan terobosan baru di bidang
                    teknologi dan informasi yang diringkas melalui game menarik.
                  </p>
                </div>
                <router-link :to="'/competition/game'">
                  <button class="btn p-3 mt-3">Detail</button>
                </router-link>
              </b-col>

              <b-col cols="12" class="mt-5 mb-5">
                <b-container class="text-center">
                  <img class="logo" src="@/assets/img/iot-hitam.svg" />
                </b-container>
              </b-col>
              <b-col lg="12" class="mt-5 mb-5">
                <h1 class="title"><glitch text="IoT Dev"></glitch></h1>
                <div class="description mt-4">
                  <p class="text-justify">
                    Internet of Things Competition merupakan kompetisi dari MAGE
                    7, yaitu pembuatan alat yang memanfaatkan koneksi nirkabel
                    untuk alat kendali yang dapat terhubung atau berkomunikasi
                    dengan alat - alat yang dikendalikan. Kompetisi yang
                    berskala nasional ini berfungsi sebagai sarana bagi peserta
                    untuk mengembangkan kreativitas dan mewujudkan serta
                    menerapkan ide - ide hebat ke dalam bentuk alat maupun
                    aplikasi (jika diperlukan). Dengan begitu, partisipan telah
                    ikut dalam peran penting memajukan sektor teknologi di
                    Indonesia. Pada kompetisi ini kategori pesertanya meliputi
                    umum.
                  </p>
                </div>
                <router-link :to="'/competition/iot'">
                  <button class="btn p-3 mt-3">Detail</button>
                </router-link>
              </b-col>
              <b-col lg="6" class="mt-5 mb-5">
                <b-container class="text-center">
                  <img class="logo" src="@/assets/img/proxy-hitam.svg" />
                </b-container>
              </b-col>
              <b-col cols="12" class="mt-5 mb-5">
                <h1 class="title"><glitch text="Olimpiade"></glitch></h1>
                <div class="description mt-4">
                  <p class="text-justify">
                    Kompetisi yang dirancang untuk pelajar SMA/sederajat ini
                    berupa olimpiade dengan berfokus pada 3 mata pelajaran yaitu
                    fisika, pemrograman dan logika. Dengan tujuan untuk mengukur
                    seberapa kompetensi para pelajar SMA/sederajat se-Indonesia
                    dalam menyelesaikan permasalahan terkait. Olimpiade ini akan
                    dilaksanakan secara berkelompok dengan anggota kelompok
                    maksimal 3 orang. Terdiri dari 3 babak, yaitu penyisihan,
                    semifinal dan final. Penyisihan dari olimpiade akan
                    dilaksanakan secara online dalam bentuk interaktif melalui
                    website MAGE 7.
                  </p>
                </div>
                <router-link :to="'/competition/olim'">
                  <button class="btn p-3 mt-3">Detail</button>
                </router-link>
              </b-col>
            </b-row>
          </div>
        </div>
      </div>
      <div class="sub-page" id="partner">
        <div
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-delay="200"
          class="bg-dark"
        >
          <h1 class="text-white"><glitch text="Partnership"></glitch></h1>
          <hr />
          <div class="content bg-light p-5 rounded shadow-sm">
            <h3>Sponsor :</h3>
            <b-row align-h="center" align-v="center">
              <b-col class="mb-3 text-center" lg="6" sm="12">
                <a
                href="https://www.telkom.co.id/"
                rel="noopener noreferrer"
                target="_blank"
                >
                  <img
                    style="max-height: 230px; max-width:100%;"
                    src="@/assets/img/telkom.png"
                    alt="Telkom Indonesia"
                  />
                </a>
                <!-- <br />
                <br /> -->
              </b-col>
              <b-col class="mb-3 text-center" lg="6" sm="12">
                <a
                href="https://www.instagram.com/vendorkampus.id/"
                rel="noopener noreferrer"
                target="_blank"
                >
                  <img
                    style="max-height: 90px; max-width: 100%;"
                    src="@/assets/img/vendor_kampus.png"
                    alt="Vendor Kampus"
                  />
                </a>
                <!-- <br />
                <br /> -->
              </b-col>
            </b-row
            ><!-- <br /><br />
            <h3 class="mt-5">Media Partner :</h3>
            <b-row>
              <b-col cols="2">
                <img
                  style="height: 150px; width: 150px;"
                  src="data:image/jpeg;base64,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"
                />
              </b-col>
              <b-col cols="2">
                <img
                  style="height: 150px; width: 150px;"
                  src="data:image/jpeg;base64,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"
                />
              </b-col>
            </b-row> -->
          </div>
        </div>
      </div>
      <!-- <Footer /> -->
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
// import Footer from '@/components/Footer.vue';
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Glitch from 'vue-glitch';

export default {
  name: "Main",
  components: {
    NavBar,
    // Footer,
    Login,
    Register,
    Glitch,
  },
  computed: {
    show() {
      return this.$store.state.ui.welcomeShow;
    },
  },
  created() {
    window.scrollTo(0, 0);
  },
};
</script>
<style scoped>
@import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";

@import 'https://fonts.cdnfonts.com/css/airstrike?styles=14805';

* {
  font-family: "Poppins", sans-serif;
  scroll-behavior: smooth;
}

a {
  color: rgba(255, 70, 85, 1);
  text-decoration: none;
}

a:hover {
  text-decoration: none;
  color: #ffffff;
}

.page {
  height: 100%;
  width: 100%;
}

.sub-page {
  min-height: 100%;
  width: 100%;
  padding-top: 50px;
}

.sub-page .sub-page-title{
  font-family: "Airstrike", "Poppins", sans-serif;
  text-shadow:
    3px 3px 0 #ff4655,
    -1px -1px 0 #ff4655,
    1px -1px 0 #ff4655,
    -1px 1px 0 #ff4655,
    1px 1px 0 #ff4655;
}

.glitch-wrapper {
  justify-content: flex-start !important;
}

#about {
  background-color: #000000;
  color: white;
  background-size: cover;
  min-height: 100vh;
  width: 100%;
  padding-top: 200px;
  padding-left: 150px;
  padding-right: 150px;
}

#about .title {
  font-size: 16px;
  margin-bottom: 20px;
}

#about .description {
  font-size: 22px;
  margin-bottom: 20px;
}

#about .more {
  display: block;
  font-size: 22px;
}

#about .content {
  text-align: left;
  font-size: 17px;
  color: #fff;
  margin-top: 20px;
}

#about .btn {
  padding: 10px 30px;
  background-color: rgb(255, 255, 255);
  border-color: rgb(255, 255, 255);
  display: inline;
  margin-top: 50px;
  left: 70px;
  width: 200px;
}

#about .btn:hover {
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

#about img {
  max-width: 300px;
  max-height: 300px;
  width: auto;
  height: auto;
  margin-left: calc(50% - 150px);
}

#home {
  height: 100vh;
  background-color: #000000;
  background-image: url("./../assets/img/bg.svg");
  background-size: cover;
  padding-bottom: 20px;
  padding-top: 300px;
}

#home .content {
  position: absolute;
  top: 50%;
  left: 40%;
  max-width: 500px;
  transform: translate(-70%, -50%);
  display: flex;
  flex-wrap: wrap;
  text-align: left;
}

#home .content .title {
  margin-top: 30px;
  flex: 0 0 100%;
  font-size: 100px;
  text-transform: uppercase;
  font-weight: 700;
  color: #fff;
  /* align: left; */
}

#home .content .tagline {
  flex: 1;
  font-size: 30px;
  color: #ffffff;
  text-shadow:
    1px 1px 0 #ff4655,
    -1px -1px 0 #ff4655,
    1px -1px 0 #ff4655,
    -1px 1px 0 #ff4655,
    1px 1px 0 #ff4655;
}

#home .more {
  margin-top: 50px;
  flex: 1;
}

#home .more a {
  text-decoration: none;
  font-size: 20px;
  background: rgb(77, 30, 41);
  background: linear-gradient(
    90deg,
    rgba(77, 30, 41, 1) 0%,
    rgba(255, 70, 85, 1) 35%,
    rgba(255, 124, 157, 1) 100%
  );
  color: #000;
  padding: 10px 30px;
  border-radius: 10px;
  display: inline-block;
}

#home .more a:hover {
  background: linear-gradient(
    90deg,
    rgba(77, 30, 41, 1) 0%,
    rgba(230, 0, 15, 1) 35%,
    rgba(235, 74, 107, 1) 100%
  );
}

#home .more a:active {
  transform: scale(0.9);
}

#home .mage {
  position: absolute;
  top: 50%;
  left: 67%;
  z-index: 1;
  animation: float 3s ease-in-out infinite;
}

#home .mage img {
  height: 300px;
  width: 300px;
}

#home .content img {
  width: 400px;
  height: auto;
}

#home .distortion {
  width: 300px;
  height: 300px;
  position: absolute;
  bottom: 0;
}

@keyframes float {
  0% {
    transform: translate(-50%, -44%);
  }
  50% {
    transform: translate(-50%, -54%);
  }
  100% {
    transform: translate(-50%, -44%);
  }
}

#event {
  padding: 100px 140px;
  color: #ffffff;
  background-size: cover;
  background-color: #000000;
  background-image: linear-gradient(to right, #0e0e0e, #000000, #0e0e0e);
}

#event .title {
  color: #fff;
  text-shadow: 0 0 20px rgba(77, 30, 41, 1), 0 0 20px rgba(77, 30, 41, 1),
    0 0 20px rgba(77, 30, 41, 1), 0 0 20px rgba(77, 30, 41, 1),
    0 0 20px rgba(77, 30, 41, 1), 0 0 20px rgba(77, 30, 41, 1),
    0 0 20px rgba(77, 30, 41, 1), 0 0 20px rgba(77, 30, 41, 1);
}

#event .content {
  text-align: left;
  margin-top: 100px;
}

#event .mobile {
  display: none;
}

#event .content .logo {
  margin-top: 30px;
  width: 220px;
  height: 220px;
}

#event .divider {
  height: 50px;
}

#event .btn {
  background: rgb(77, 30, 41);
  background: linear-gradient(
    90deg,
    rgba(77, 30, 41, 1) 0%,
    rgba(255, 70, 85, 1) 35%,
    rgba(255, 124, 157, 1) 100%
  );
  color: #111;
  width: 200px;
  font-size: 1.5vw;
}

#event .btn:hover {
  background: linear-gradient(
    90deg,
    rgba(77, 30, 41, 1) 0%,
    rgba(230, 0, 15, 1) 35%,
    rgba(235, 74, 107, 1) 100%
  );
}

#event .btn:active {
  transform: scale(.9);
}

#partner {
  padding: 100px 140px;
  color: #ffffff;
  background-size: cover;
  background-color: #000000;
  background-image: linear-gradient(to right, #0e0e0e, #000000, #0e0e0e);
}

#documentation {
  height: 600px;
  background-color: rgb(88, 66, 124);
  background-image: linear-gradient(
      to right top,
      rgb(13, 33, 60),
      rgb(52, 3, 62, 0.8)
    ),
    url("https://kampusaja.com/wp-content/uploads/2016/01/3.passing-grade-ugm-2016-universitas-gadjah-mada.jpg");
  background-size: cover;
}

#documentation img {
  height: 300px;
  size: 300px;
}

b-button {
  margin-top: 50px;
}

.rotate {
  position: absolute;
  height: 55px;
  line-height: 55px;
  font-size: 50px;
  font-weight: bold;
  overflow: hidden;
  display: inline-block;
  min-width: 400px;
  left: calc(50% - 300px);
  margin-bottom: 50px;
}

.rotate span {
  animation: animate 6s ease infinite;
  position: relative;
  color: white;
}

@keyframes animate {
  0% {
    opacity: 1;
    top: -160px;
  }
  25% {
    top: -105px;
  }
  30% {
    top: -105px;
  }
  50% {
    top: -55px;
  }
  55% {
    top: -55px;
  }
  75% {
    top: 0px;
  }
  80% {
    top: 0px;
    opacity: 1;
  }
  100% {
    top: 50px;
  }
}

.scroll-down {
  margin-top: 200px;
  font-size: 18px;
}

.scroll-down a {
  text-decoration: none;
  color: white;
  display: block;
  max-height: 0px;
}

.arrow {
  text-align: center;
  margin-top: 40px;
}
.bounce {
  -moz-animation: bounce 2s infinite;
  -webkit-animation: bounce 2s infinite;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}

@media (max-width: 800px) {
  #documentation img {
    height: 200px;
    size: 200px;
  }
  #event {
    padding: 100px 40px;
  }
  #partner {
    padding: 40px 50px;
  }
  #partner .content img {
    width: 180px;
  }
  #partner h3 {
    text-align: center;
    font-size: 1.5em;
  }
}

@media (max-width: 700px) {
  #home .content {
    position: absolute;
    width: 100vw;
    transform: translate(-50%, 0%);
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    left: calc(100vw - 200px);
  }

  #home .content .title {
    margin-top: 30px;
    flex: 0 0 100%;
    font-size: 48px;
    text-transform: uppercase;
    font-weight: 700;
    color: #ffffff;
  }

  #home .content .tagline {
    flex: 1;
    font-size: 24px;
    color: #ffffff;
  }

  .glitch-wrapper {
    justify-content: center !important;
  }

  #home .more {
    margin-top: 30px;
    flex: 1;
  }

  #home .more a {
    text-decoration: none;
    font-size: 20px;
    background: rgb(77, 30, 41);
    background: linear-gradient(
      90deg,
      rgba(77, 30, 41, 1) 0%,
      rgba(255, 70, 85, 1) 35%,
      rgba(255, 124, 157, 1) 100%
    );
    color: #000;
    padding: 10px 30px;
    border-radius: 10px;
  }

  #home .mage {
    position: absolute;
    left: calc(50%);
    top: -100px;
    z-index: 1;
    animation: float 3s ease-in-out infinite;
  }

  #home .mage img {
    height: 150px;
    width: 150px;
  }

  #home .content img {
    width: 280px;
    margin: 0 auto;
    height: auto;
  }

  #home .content .title-container {
    margin: auto;
    width: 100%;
  }

  #about {
    padding: 100px;
    padding-left: 50px;
    padding-right: 50px;
  }
  #about .mascot {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
    max-width: 200px;
    max-height: 200px;
    width: auto;
    height: auto;
  }
  #about .title {
    font-size: 16px;
  }
  #about .description {
    font-size: 18px;
  }
  #documentation img {
    height: 200px;
    size: 200px;
  }
  #event {
    padding: 100px 40px;
  }
  #event .full {
    display: none;
  }
  #event .mobile {
    display: block;
  }
  #event .title {
    text-align: center;
    margin-top: 40px;
  }
  #event .btn {
    margin-left: calc(50vw - 150px);
    font-size: 15px;
  }
  #partner {
    padding: 40px 50px;
  }
  #partner .content img {
    width: 180px;
  }
  #partner h3 {
    text-align: center;
    font-size: 1.5em;
  }
  .rotate {
    min-width: 100px;
    padding: 0;
    margin: 0;
    font-size: 22px;
    margin-left: calc(50% - 60px);
    overflow: hidden;
  }
}
</style>
