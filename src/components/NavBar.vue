<template>
  <div>
    <nav v-bind:class="[scrollPosition > 50 ? ['black', 'shadow-sm'] : '']">
      <div @click="toggle()" class="menu-icon">
        <i class="fa fa-bars fa-2x"></i>
      </div>
      <div class="logo">
        <img src="@/assets/img/mage-white.png" alt="" />
      </div>
      <div class="menu">
        <ul>
          <li>
            <router-link class="text-center pl-4" :to="'/'">
              Home
            </router-link>
          </li>
          <li>
            <router-link class="text-center pl-4" :to="'/about'">
              About
            </router-link>
          </li>
          <li class="competition-subnav-trigger" @click="toggleSubNavCompetition">
            <a href="#">
              Competition <span style="font-size: 12px; margin-left: 20px;">&#9660;</span>
            </a>
            <b-container class="subnav" v-if="subnav_competition">
              <b-row>
                <b-col lg="12"
                  ><div class="item text-dark text-center">
                    <router-link class="text-dark" :to="'/competition/app'">App Dev</router-link>
                  </div></b-col
                >
                <b-col lg="12"
                  ><div class="item text-dark text-center">
                    <router-link class="text-dark" :to="'/competition/game'">Game Dev</router-link>
                  </div></b-col
                >
                <b-col lg="12"
                  ><div class="item text-dark text-center">
                    <router-link class="text-dark" :to="'/competition/iot'">IoT Dev</router-link>
                  </div></b-col
                >
                <b-col lg="12"
                  ><div class="item text-dark text-center">
                    <router-link class="text-dark" :to="'/competition/olim'">Olimpiade</router-link>
                  </div></b-col
                >
              </b-row>
            </b-container>
          </li>
          <li>
            <a
              class="login"
              @click="$store.dispatch('ui/changeWelcomeComponent', 'register')"
              href="#"
            >
              Register
            </a>
          </li>
          <li>
            <a
              class="login"
              @click="$store.dispatch('ui/changeWelcomeComponent', 'login')"
              href="#"
            >
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="menu-min" v-if="show" style="z-index: 9999999999">
      <ul >
        <li>
          <a href="home" @click="toggle()" v-smooth-scroll="{ duration: 1000 }">
            Home
          </a>
        </li>
        <li>
          <a href="about" @click="toggle()" v-smooth-scroll="{ duration: 1000 }">
            About us
          </a>
        </li>
        <li>
          <a href="#" v-smooth-scroll="{ duration: 1000 }" @click="toggleSubNavCompetitionMin">
            Competition<span style="font-size: 12px; margin-left: 20px;">&#9660;</span>
          </a>
        </li>
        <li>
          <a href="/competition/app" @click="toggle()"v-if="subnav_competition_min">
            App Dev
          </a>
        </li>
        <li>
          <a href="/competition/game"@click="toggle()" v-if="subnav_competition_min">
            Game Dev
          </a>
        </li>
        <li>
          <a href="/competition/iot" @click="toggle()"v-if="subnav_competition_min">
            IoT Dev
          </a>
        </li>
        
        <li>
          <a href="/competition/olim" @click="toggle()"v-if="subnav_competition_min">
            Olimpiade
          </a>
        </li>
        <li>
          <a href="about" @click="toggle()" v-smooth-scroll="{ duration: 1000 }">
            About us
          </a>
        </li>
        <li @click="toggle()">
          <a
            class="register"
            
            @click="$store.dispatch('ui/changeWelcomeComponent', 'register')"
          >
            Register
          </a>
        </li>
        <li @click="toggle()">
          <a
            class="login"
            
            @click="$store.dispatch('ui/changeWelcomeComponent', 'login')"
          >
            Login
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      scrollPosition: null,
      show: false,
      subnav_competition: false,
      subnav_competition_min: false,
    };
  },

  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    toggle() {
      this.show = !this.show;
    },
    toggleSubNavCompetition() {
      this.subnav_competition= !this.subnav_competition;
    },
    toggleSubNavCompetitionMin() {
      this.subnav_competition_min= !this.subnav_competition_min;
    }
  },

  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  }
};
</script>
<style scoped>
.logo {
  line-height: 60px;
  position: fixed;
  float: left;
  margin: 16px 46px;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 2px;
}

.logo img {
  width: 40px;
  height: 40px;
}

nav {
  position: fixed;
  top: 0;
  width: 100%;
  line-height: 60px;
  z-index: 99999;
}

nav ul {
  line-height: 60px;
  list-style: none;
  background: rgb(0, 0, 0, 0);
  overflow: hidden;
  color: #fff;
  padding: 0;
  text-align: right;
  margin: 0;
  transition: 1s;
}

nav.black ul {
  background: rgb(0, 0, 0);
}

nav ul li {
  display: inline-block;
  padding: 16px 40px;
}

nav ul li a {
  text-decoration: none;
  color: #fff;
  font-size: 16px;
}

nav ul li a:hover {
  text-decoration: none;
  color: #fff;
  font-size: 16px;
}

.subnav {
  position: absolute;
  margin-right: 100px;
}

.subnav .item {
  background: rgba(255, 255, 255, 0.7);
  max-width: 120px;
  border-radius: 3px;
  margin-top: 5px;
  color: #000000;
}

.subnav .item:hover {
  background: rgba(255, 255, 255, 1);
}

.menu-min {
  color: white;
  text-decoration: none;
  background: rgb(0, 0, 0);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 80px;
  display: none;
  transition: 1s;
}

.menu-min ul {
  line-height: 60px;
  list-style: none;
  background: rgb(0, 0, 0);
  overflow: hidden;
  color: #fff;
  padding: 0;
  text-align: center;
  margin: 0;
  padding-right: 40px;
  transition: 1s;
}

.menu-min.black ul {
  background: rgb(0, 0, 0);
}

.menu-min ul li a {
  text-decoration: none;
  color: #fff;
  font-size: 16px;
}

.menu-icon {
  width: 100%;
  background: rgb(0, 0, 0);
  text-align: right;
  box-sizing: border-box;
  padding: 15px 24px;
  cursor: pointer;
  color: #fff;
  display: none;
}

@media (max-width: 786px) {
  .logo {
    position: fixed;
    top: 0;
    margin-top: 16px;
  }

  nav ul {
    max-height: 0px;
    background: rgb(0, 0, 0);
  }

  nav.black ul {
    background: rgb(0, 0, 0);
  }

  .showing {
    max-height: 34em;
  }

  nav ul li {
    box-sizing: border-box;
    width: 100%;
    padding: 24px;
    text-align: center;
  }

  .menu-icon {
    display: block;
  }

  .menu-min {
    display: block;
  }
}
</style>
