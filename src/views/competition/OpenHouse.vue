<template>
  <div class="osm-page">
    <div class="logo">
      <img class="mr-2" src="@/assets/open-house-white.png" />
      <h1 class="text-white d-inline-block">Open House</h1>
      <hr />
    </div>
    <a
      v-if="!getUrl()"
      @click="$store.dispatch('ui/changeWelcomeComponent', 'welcome')"
    >
      <img class="close" src="@/assets/close.png" />
    </a>
    <b-container
      id="description"
      class="bg-purple shawod-sm rounded text-white text-center mt-5"
    >
      Open house Statistics merupakan salah satu ajang pengenalan Statistika
      untuk mengenalkan kegiatan akademis, non-akademis serta lingkungan kampus
      statistika FMIPA UGM kepada siswa-siswi SMA/Sederajat. Open house ini akan
      dilaksanakan dengan metode sharing session atau tanya jawab secara
      langsung antara peserta Open House itu sendiri dan mahasiswa aktif
      Statistika FMIPA UGM. Dengan adanya kegiatan Open House, peserta dapat
      menggali informasi terkait Statistika FMIPA UGM.
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
              Terbuka untuk umum
            </h2>
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
            <h5 class="text-white">
              Senin, 7 Desember 2020 s/d <br />
              Senin, 16 Januari 2021
            </h5>
            <h2 class="text text-white mt-4">
              Pelaksanaan
            </h2>
            <h5 class="text-white">
              Minggu, 17 Januari 2021
            </h5>
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
              Cicil
            </h2>
            <h5 class="text-white">081351366118</h5>
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
              FREE
            </h2>
          </b-container>
        </b-col>
      </b-row> </b-container
    ><a target="blank" href="https://bit.ly/OHSAnava15">
      <button class="btn btn-register">
        <h3>Daftar sekarang</h3>
      </button></a
    >
  </div>
</template>
<script>
export default {
  name: "Poster",
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
      return this.url.includes("openhouse");
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
  background: linear-gradient(to right top, rgb(10, 10, 10), #09203f);
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
  margin-top: 10px;
  margin-left: 60px;
  padding: 10px;
}

#guidebook .btn {
  background: #fff;
  padding: 15px;
  border-radius: 2px;
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

  #category .description h2 {
    font-size: 1.4em;
  }

  #category .description h5 {
    font-size: 1em;
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

  #schedule .description h2 {
    font-size: 1.4em;
  }

  #schedule .description h5 {
    font-size: 1em;
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

  #contact .description h2 {
    font-size: 1.4em;
  }

  #contact .description h5 {
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

  #prize .description h2 {
    font-size: 1.4em;
  }

  #prize .description h5 {
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
    margin-left: 70px;
  }

  #htm .description h2 {
    font-size: 1.4em;
  }

  #htm .description h5 {
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

  #guidebook .description h2 {
    font-size: 1.4em;
  }

  #guidebook .description h5 {
    font-size: 1.1em;
  }

  .btn-register {
    margin-bottom: 60px;
  }
}
</style>
