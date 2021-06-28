<template>
  <div class="osm-page">
    <div class="logo">
      <img src="@/assets/osm-white.png" />
      <h1 class="text-white d-inline-block">THE ONE</h1>
      <h2 class="text-white">Think Higher as an Expert to be The Number One</h2>
      <hr />
    </div>
    <a v-if="!getUrl()" @click="$store.dispatch('ui/changeWelcomeComponent', 'welcome')">
      <img class="close" src="@/assets/close.png" />
    </a>
    <b-container
      id="description"
      class="bg-purple shawod-sm rounded text-white text-center mt-5"
    >
      Kompetisi The One merupakan salah satu rangkaian ANAVA #15 berupa kegiatan kompetisi untuk pelajar tingkat SMA/MA sederajat. Kompetisi ini bertujuan untuk mengasah pemahaman peserta terhadap materi SMA, strategi menjawab soal dalam waktu yang singkat, dan menumbuhkan karakter kompetitif. Bidang ilmu dalam kompetisi ini meliputi Matematika, Bahasa Indonesia, Bahasa Inggris, Fisika, Kimia, dan Biologi. Standar soal yang diujikan memiliki tingkat kesulitan yang berbeda-beda(LOTS, MOTS, HOTS). Untuk The One tahun ini menggunakan website dengan sistem CBT (Computer Based Test) sehingga dapat memudahkan peserta dan tentunya melatih peserta agar lebih adaptif dalam perkembangan teknologi saat ini. Kompetisi ini terdiri dari dua babak yaitu babak gugur dan babak championship. Keunikan dari kompetisi ini terdapat pada babak championship yang menerapkan sistem “beli soal” pada saat pengerjaannya.
    </b-container>
    <b-container
      id="category"
      class="bg-purple shawod-sm rounded text-white text-left"
    >
      <h1>Kategori</h1>
      <b-row>
        <b-col lg="1" cols="1"> 
          <i class="icon fas fa-users"></i>
        </b-col>
        <b-col lg="10" cols="9">
          <b-container class="description">
            <h2 class="text  text-white">
              Terbuka untuk pelajar SMA/MA Sederajat
            </h2>
            <h5 class=" text-white">Individu</h5>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
    <b-container
      id="schedule"
      class="bg-purple shawod-sm rounded text-white text-left"
    >
      <h1>Agenda</h1>
      <b-row>
        <b-col lg="1" cols="1">
          <i class="icon far fa-calendar-alt fa-9x"></i>
        </b-col>
        <b-col lg="10" cols="9">
          <b-container class="description">
            <h2 class="text  text-white">
              Pendaftaran
            </h2>
            <h5 class="text-white">Senin, 7 Desember 2020 s/d <br> Sabtu, 16 Januari 2020</h5>
            <h2 class="text text-white mt-4">
              Pelaksanaan lomba
            </h2>
            <h5 class="text-white">Babak Gugur : <br> Sabtu, 23 Januari 2021</h5>
            <h5 class="text-white">Babak Championship: <br> Minggu, 24 Januari 2021</h5>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
    <b-container
      id="contact"
      class="bg-purple shawod-sm rounded text-white text-left"
    >
      <h1>Kontak</h1>
      <b-row>
        <b-col lg="1" cols="1">
          <i class="icon fas fa-phone-alt fa-9x"></i>
        </b-col>
        <b-col lg="10" cols="9">
          <b-container class="description">
            <h2 class="text  text-white">
              Ratna Tri Ningsih
            </h2>
            <h5 class="text-white">085865645692</h5>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
    <b-container
      id="prize"
      class="bg-purple shawod-sm rounded text-white text-left"
    >
      <h1>Total hadiah</h1>
      <b-row>
        <b-col lg="1" cols="1">
          <i class="icon fas fa-gift fa-9x"></i>
        </b-col>
        <b-col lg="10" cols="9"> 
          <b-container class="description">
            <h2 class="text text-white">
              Rp 1.300.000
            </h2>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
    <b-container
      id="htm"
      class="bg-purple shawod-sm rounded text-white text-left"
    >
      <h1>HTM</h1>
      <b-row>
        <b-col lg="1" cols="1">
          <i class="icon fas fa-money-bill-wave fa-9x"></i>
        </b-col>
        <b-col lg="10" cols="9"> 
          <b-container class="description">
            <h2 class="text text-white">
              Rp 45.000
            </h2>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
    <b-container
      id="guidebook"
      class="bg-purple shawod-sm rounded text-white text-left"
    >
      <h1>Guidebook</h1>
      <b-row>
        <b-col lg="1" cols="1">
          <i class="icon fas fa-book fa-9x"></i>
        </b-col>
        <b-col lg="10" cols="9">
          <b-container class="description mt-4">
            <a target="blank" href="THE ONE/guidebook.pdf" class="btn">
              Unduh guidebook
            </a>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
    <router-link :to="{ name: 'Register' }"
      ><button class="btn btn-register">
        <h3>Daftar sekarang</h3>
      </button></router-link
    >
  </div>
</template>
<script>
export default {
  name: "Rank1",
  data() {
    return {
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
  methods: {
    getUrl() {
      return this.url.includes("rank1");
    },
  },
  created() {
    window.scrollTo(0, 0);
  },
};
</script>
<style scoped>
.osm-page {
  background: linear-gradient(
    to right top,
    rgb(13, 33, 60),
    rgb(52, 3, 62, 0.8)
  );
  min-height: 100%;
  padding-left: 200px;
  padding-right: 200px;
  padding-bottom: 40px;
}

.osm-page .logo img {
  height: 100px;
  width: 50px;
  margin-top: -60px;
}

.osm-page .logo h1 {
  display: block;
  margin-top: 60px;
  font-size: 60px;
}

.osm-page .close {
  position: absolute;
  top: 40px;
  right: 40px;
  height: 30px;
  width: 30px;
  opacity: 1;
}

.osm-page hr {
  background-color: #fff;
  margin-top: 50px;
  padding: 1px;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.3);
}

#description {
  background: linear-gradient(
    to right top,
    rgb(10, 10, 10),
    #09203f
  );
  min-height: 80px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 22px;
}

#category {
  margin-top: 80px;
}

#category .icon {
  font-size: 120px;
}

#category .description {
  padding-top: 20px;
  margin-left: 130px;
}

#schedule {
  margin-top: 80px;
}

#schedule .description {
  padding-top: 0;
  margin-top: -10px;
  margin-left: 130px;
}

#schedule .description p {
  font-size: 18px;
}

#contact {
  margin-top: 80px;
}

#contact .description {
  margin-left: 130px;
}

#prize {
  margin-top: 80px;
}

#prize .description {
  margin-top: 20px;
  margin-left: 130px;
}

#htm {
  margin-top: 80px;
}

#htm .description {
  margin-top: 20px;
  margin-left: 130px;
}

#guidebook {
  margin-top: 80px;
}

#guidebook .description {
    margin-top: -5px;
    margin-left: 60px;
    padding: 10px;
    padding-top: 20px;
  }

#guidebook .btn {
  background: #fff;
  padding: 15px;
  border-radius: 2px;
  margin-top: 20px;
  font-size: 20px;
}

.btn-register {
  padding: 20px;
  border-radius: 10px;
  margin-top: 80px;
  width: 300px;
  color: #fff;
  background-color: #537895;
  background-image: linear-gradient(315deg, #537895 0%, #09203f 74%);
  box-shadow: 0 5px 15px rgba(145, 92, 182, 0.4);
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

@media (max-width: 767px) {
    .osm-page {
        min-height: 100%;
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 5px;
    }

    .osm-page .logo img {
        height: 80px;
        width: 40px;
    }

    .osm-page .logo h1 {
        margin-top: 100px;
        font-size: 60px;
    }

    #description {
    font-size: 18px;
  }

    #category h1 {
        text-align: center;
    }

    #category .icon {
        font-size: 60px;
        margin-top: 10px;
    }

    #category .description {
        margin-top: -10px;
        margin-left: 60px;
    }

    #category .description h2{
        font-size: 1.4em;
    }

    #category .description h5{
        font-size: 1.0em;
    }

    #schedule h1 {
        text-align: center;
    }

    #schedule .icon {
        font-size: 60px;
        margin-top: 10px;
    }

    #schedule .description {
        margin-top: 5px;
        margin-left: 65px;
    }

    #schedule .description h2{
        font-size: 1.4em;
    }

    #schedule .description h5{
        font-size: 1.0em;
    }

    #contact h1 {
        text-align: center;
    }

    #contact .icon {
        font-size: 60px;
        margin-top: 10px;
    }

    #contact .description {
        margin-top: 5px;
        margin-left: 75px;
    }

    #contact .description h2{
        font-size: 1.4em;
    }

    #contact .description h5{
        font-size: 1.1em;
    }

    #prize h1 {
        text-align: center;
    }

    #prize .icon {
        font-size: 60px;
        margin-top: 10px;
    }

    #prize .description {
        margin-top: 5px;
        margin-left: 70px;
    }

    #prize .description h2{
        font-size: 1.4em;
    }

    #prize .description h5{
        font-size: 1.1em;
    }

    #htm h1 {
      text-align: center;
    }

    #htm .icon {
        font-size: 60px;
        margin-top: 10px;
    }

    #htm .description {
        margin-top: 5px;
        margin-left: 80px;
    }

    #htm .description h2{
        font-size: 1.4em;
    }

    #htm .description h5{
        font-size: 1.1em;
    }

    #guidebook h1 {
        text-align: center;
    }

    #guidebook .icon {
        font-size: 60px;
        margin-top: 10px;
    }

    #guidebook .description {
    margin-top: -5px;
    margin-left: 60px;
    padding: 10px;
  }

    #guidebook .description h2{
        font-size: 1.4em;
    }

    #guidebook .description h5{
        font-size: 1.1em;
    }

    .btn-register {
        margin-bottom: 60px;
    }
}
</style>
