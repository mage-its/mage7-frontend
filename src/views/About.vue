<template>
  <div class="page">
    <Login v-if="show == 'login'" />
    <Register v-if="show == 'register'" />
    <div v-if="show == 'welcome'">
      <NavBar />
      <div class="sub-page" id="about">
        <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200">
          <b-row>
            <b-col lg="5">
              <img class="mascot" src="@/assets/img/mascot-2a.png" />
            </b-col>
            <b-col lg="7">
              <p class="text-white text-left title mb-3">What is <span class="font-weight-bold">MAGE</span>?</p>
              <p class="text-white text-justify description  mb-3">
                <span class="font-weight-bold">MAGE</span> (Multimedia and Game Event) adalah Wadah bagi generasi muda
                dalam berkreasi, berekspresi, dan berkompetisi untuk menuangkan
                inovasi sekaligus menyelesaikan permasalahan dengan memanfaatkan
                berbagai macam teknologi melalui serangkaian kegiatan seperti
                Development Competition (Apps, IoT, Games), Olimpiade, Workshop,
                dan Webinar.
              </p>
            </b-col>
          </b-row>
          <b-row class="vh-100 text-center" align-v="center">
            <b-col>
              <carousel
                :autoplay="true"
                :navigationEnabled="true"
                :scrollPerPage="false"
                :loop="true"
                paginationColor="#ece8e1"
                paginationActiveColor="#ff4655"
                navigationNextLabel="<span class=text-white>▶<span>"
                navigationPrevLabel="<span class=text-white>◀<span>"
              >
                <slide>
                  <img src="@/assets/img/about/about-0.jpg" alt="About 0">
                </slide>
                <slide>
                  <img src="@/assets/img/about/about-1.jpg" alt="About 1">
                </slide>
                <slide>
                  <img src="@/assets/img/about/about-2.jpg" alt="About 2">
                </slide>
                <slide>
                  <img src="@/assets/img/about/about-3.jpg" alt="About 3">
                </slide>
                <slide>
                  <img src="@/assets/img/about/about-4.jpg" alt="About 4">
                </slide>
                <slide>
                  <img src="@/assets/img/about/about-5.jpg" alt="About 5">
                </slide>
              </carousel>
            </b-col>
          </b-row>
          <b-row class="vh-70 text-center" align-v="center">
            <b-col>
              <b-embed
                type="iframe"
                aspect="16by9"
                src="https://www.youtube.com/embed/dWxHEOOgrFI?rel=0"
                allowfullscreen
              ></b-embed>
            </b-col>
          </b-row>
        </div>
      </div>
      <!-- <Footer /> -->
    </div>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'About',
  components: {
    NavBar,
    Footer,
    Login,
    Register,
    Carousel,
    Slide,
  },
  metaInfo() {
    return {
      title: 'About',
    };
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
    height: 200px;
    width: 200px;
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
