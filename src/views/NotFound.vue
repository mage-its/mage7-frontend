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
              <img class="mascot" src="@/assets/img/mascot-1a.png" />
            </b-col>
            <b-col lg="7" class="text-center">
              <p class="text-white display-2 mb-3">
                404
              </p>
              <p class="text-white h1 mb-3">
                Page not found
              </p>
              <br><br>
              <a href="/" class="cta">
                <span>Back To Home</span>
                <svg width="13px" height="10px" viewBox="0 0 13 10">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </a>
            </b-col>
          </b-row>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';

export default {
  name: 'About',
  components: {
    NavBar,
    Footer,
    Login,
    Register,
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

.cta {
  position: relative;
  margin: auto;
  padding: 19px 22px;
  transition: all 0.2s ease;
}
.cta:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  border-radius: 28px;
  background: rgba(255, 171, 157, 0.5);
  width: 56px;
  height: 56px;
  transition: all 0.3s ease;
}
.cta span {
  position: relative;
  font-size: 16px;
  line-height: 18px;
  font-weight: 900;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  vertical-align: middle;
}
.cta svg {
  position: relative;
  top: 0;
  margin-left: 10px;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: #111;
  stroke-width: 2;
  transform: translateX(-5px);
  transition: all 0.3s ease;
}
.cta:hover:before {
  width: 100%;
  background: #ff4655;
}
.cta:hover svg {
  transform: translateX(0);
}
.cta:active {
  transform: scale(0.96);
}

a:hover {
  text-decoration: none;
  color: #111;
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
