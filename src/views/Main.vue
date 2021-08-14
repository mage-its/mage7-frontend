<template>
  <div class="page">
    <Login v-if="show == 'login'" />
    <Register v-if="show == 'register'" />
    <div v-if="show == 'welcome'">
      <div class="sub-page" id="home">
        <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200">
          <div class="content">
            <div class="tagline">Multimedia And Game Event</div>

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
          <h1 class="text-white text-center sub-page-title">Competition</h1>
          <div class="content">
            <b-row class="full">
              <b-col cols="6" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                <b-container class="text-center">
                  <img class="logo" src="@/assets/img/app-hitam.svg" />
                </b-container>
              </b-col>
              <b-col cols="6" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                <h1 class="title">App Dev</h1>
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
                <h1 class="title">Game Dev</h1>
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
                <h1 class="title">IoT Dev</h1>
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
                <h1 class="title">Olimpiade</h1>
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
                <h1 class="title">App Dev</h1>
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
                <h1 class="title">Game Dev</h1>
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
                <h1 class="title">IoT Dev</h1>
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
                <h1 class="title">Olimpiade</h1>
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
      <!-- <Footer /> -->
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
// import Footer from '@/components/Footer.vue';
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";

export default {
  name: "Main",
  components: {
    NavBar,
    // Footer,
    Login,
    Register,
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
