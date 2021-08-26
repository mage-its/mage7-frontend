<template>
  <div class="osm-page">
    <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200">
      <b-container
        id="description"
        class="
          bg-red
          shawod-sm
          rounded
          text-white text-center
          mt-5
          text-justify
          p-5
        "
      >
        <b-row>
          <b-col lg="4" class="p-3 text-center">
            <img class="logo" src="@/assets/img/proxy-merah.svg" />
          </b-col>
          <b-col lg="8">
            <div class="competition-title text-left">Olimpiade</div>
            <div class="competition-description text-justify">
              Kompetisi yang dirancang untuk pelajar SMA/sederajat ini berupa
              olimpiade dengan berfokus pada 3 mata pelajaran yaitu fisika,
              pemrograman dan logika. Dengan tujuan untuk mengukur seberapa
              kompetensi para pelajar SMA/sederajat se-Indonesia dalam
              menyelesaikan permasalahan terkait. Olimpiade ini akan
              dilaksanakan secara berkelompok dengan anggota kelompok maksimal 3
              orang. Terdiri dari 3 babak, yaitu penyisihan, semifinal dan
              final. Penyisihan dari olimpiade akan dilaksanakan secara online
              dalam bentuk interaktif melalui website MAGE 7.
            </div>
          </b-col>
        </b-row>
      </b-container>
      <b-container
        id="category"
        class="bg-red shawod-sm rounded text-white text-left"
      >
        <h1 class="text-white">Kategori</h1>
        <b-row>
          <b-col lg="1" cols="1">
            <i class="icon fas fa-users"></i>
          </b-col>
          <b-col lg="10" cols="9">
            <b-container class="description">
              <h2 class="text text-white">
                Terbuka untuk siswa/i SMA/MA/SMK atau sederajat.
              </h2>
              <h5 class="text-white">Kelompok maksimal 3 orang</h5>
            </b-container>
          </b-col>
        </b-row>
      </b-container>
      <b-container
        id="schedule"
        class="bg-red shawod-sm rounded text-white text-left"
      >
        <h1 class="text-white">Agenda</h1>
        <b-row>
          <b-col lg="1" cols="1">
            <i class="icon far fa-calendar-alt fa-9x"></i>
          </b-col>
          <b-col lg="10" cols="9">
            <b-container class="description">
              <!-- <h2 class="text  text-white">
              Pendaftaran
            </h2>
            <h5 class="text-white">

            </h5>
            <h2 class="text text-white mt-4">
              Pelaksanaan lomba
            </h2> -->
              <vue-horizontal-timeline :items="items" timeline-background="transparent" title-substr="35"/>
            </b-container>
          </b-col>
        </b-row>
      </b-container>
      <b-container
        id="contact"
        class="bg-red shawod-sm rounded text-white text-left"
      >
        <h1 class="text-white">Kontak</h1>
        <b-row>
          <b-col lg="1" cols="1">
            <i class="icon fas fa-phone-alt fa-9x"></i>
          </b-col>
          <b-col lg="10" cols="9">
            <b-container class="description">
              <h2 class="text text-white">Adi Syahrul</h2>
              <h5 class="text-white">0852 3261 2668</h5>
            </b-container>
          </b-col>
        </b-row>
      </b-container>
      <!-- <b-container
      id="prize"
      class="bg-red shawod-sm rounded text-white text-left"
    >
      <h1>Total hadiah</h1>
      <b-row>
        <b-col lg="1" cols="1">
          <i class="icon fas fa-gift fa-9x"></i>
        </b-col>
        <b-col lg="10" cols="9">
          <b-container class="description">
            <h2 class="text text-white">
              Rp 10.0000.0000
            </h2>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
    <b-container
      id="htm"
      class="bg-red shawod-sm rounded text-white text-left"
    >
      <h1>HTM</h1>
      <b-row>
        <b-col lg="1" cols="1">
          <i class="icon fas fa-money-bill-wave fa-9x"></i>
        </b-col>
        <b-col lg="10" cols="9">
          <b-container class="description">
            <h2 class="text text-white">
              SMA/SMK sederajat : 90k<br/>
              Mahasiswa : 100k<br/>
            </h2>
          </b-container>
        </b-col>
      </b-row>
    </b-container> -->
      <b-container
        id="guidebook"
        class="bg-red shawod-sm rounded text-white text-left"
      >
        <h1 class="text-white">Guidebook</h1>
        <b-row>
          <b-col lg="1" cols="1">
            <i class="icon fas fa-book fa-9x"></i>
          </b-col>
          <b-col lg="10" cols="9">
            <b-container class="description mt-4">
              <!-- <a
                target="_blank"
                href="/pdf/GUIDEBOOK_PROXY.pdf"
                class="btn d-inline"
                download
              > -->
              <a
                target="_blank"
                href="/pdf/Guidebook_Olimpiade_Proxy.pdf"
                class="btn d-inline"
              >
                Unduh guidebook
              </a>
            </b-container>
          </b-col>
        </b-row>
      </b-container>
      <!-- <router-link :to="{ name: 'Register' }"
      > -->
      <button
        @click="$store.dispatch('ui/changeWelcomeComponent', 'register')"
        class="btn-register"
      >
        <h3 class="text-white">Daftar sekarang</h3>
      </button>
      <!-- </router-link> -->
    </div>
  </div>
</template>
<script>

import { VueHorizontalTimeline } from "vue-horizontal-timeline";

export default {
  name: "OSM",
  data() {
    return {
      loading: false,
      message: "",
      url: window.location.href,
      items: [
        {
          title: "5 November",
          content: "Batas Pendaftaran dan Pembayaran",
        },
        {
          title: "6 November",
          content: "Technical Meeting Penyisihan",
        },
        {
          title: "7 November",
          content: "Penyisihan (Online)",
        },
        {
          title: "13 November",
          content: "Semifinal (Online)",
        },
        {
          title: "14 November",
          content: "Final (Online)",
        },
      ],
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  components: {
    VueHorizontalTimeline,
  },
  methods: {
    getUrl() {
      return this.url.includes("osm");
    },
  },
  created() {
    window.scrollTo(0, 0);
  },
};
</script>
<style scoped>
.osm-page {
  background-image: linear-gradient(to right, #0e0e0e, #000000, #0e0e0e);
  min-height: 100%;
  padding-top: 80px;
  padding-left: 200px;
  padding-right: 200px;
  padding-bottom: 40px;
}

.osm-page .logo {
  height: 200px;
  width: 200px;
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

.competition-title {
  font-size: 28px;
  font-weight: bold;
}

.competition-description {
  font-size: 18px;
}

#description {
  background: linear-gradient(
    to right top,
    rgb(10, 10, 10),
    rgba(255, 70, 85, 1)
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
  padding: 20px;
  margin-left: 130px;
  padding-top: 20px;
}

#guidebook .btn {
  background: #fff;
  padding: 15px;
  border-radius: 2px;
  margin-top: 20px;
  font-size: 20px;
}

#guidebook .btn:hover {
  background: #ff4655;
}

#guidebook .btn:focus {
  color: #111;
}

.btn-register {
  padding: 20px;
  border-radius: 10px;
  margin-top: 80px;
  margin-bottom: 80px;
  width: 300px;
  color: #fff;
  background: linear-gradient(
    90deg,
    rgba(77, 30, 41, 1) 0%,
    rgba(255, 70, 85, 1) 35%,
    rgba(255, 124, 157, 1) 100%
  );
}

.btn-register:hover {
  background: linear-gradient(
    90deg,
    rgba(77, 30, 41, 1) 0%,
    rgba(230, 0, 15, 1) 35%,
    rgba(235, 74, 107, 1) 100%
  );
  transition: all .3s;
}
.btn-register:active {
  transform: scale(.9);
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
    margin-left: 80px;
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

  #guidebook .btn {
    font-size: 20px;
  }

  .btn-register {
    margin-bottom: 60px;
  }
}
</style>
