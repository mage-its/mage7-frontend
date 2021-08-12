<template>
  <div>
    <nav v-bind:class="[scrollPosition > 50 ? ['black', 'shadow-sm'] : '']">
      <div @click="toggle()" class="menu-icon">
        <i class="fa fa-bars fa-2x"></i>
      </div>
      <div class="logo">
        <router-link class="text-center pl-1" :to="'/'">
          <img src="@/assets/img/mage-white.png" alt="MAGE logo" />
        </router-link>
      </div>
      <div class="menu">
        <ul>
          <li>
            <router-link class="nav-item text-center" :to="'/'"> Home </router-link>
          </li>
          <li>
            <router-link class="nav-item text-center" :to="'/about'">
              About
            </router-link>
          </li>
          <li
            class="competition-subnav-trigger"
          >
            <a href="#" class="nav-item" onClick="return false;" @click="toggleSubNavCompetition">
              Competition
              <span style="font-size: 12px; margin-left: 20px">&#9660;</span>
            </a>
            <transition name="fade">
              <b-container class="subnav" v-if="subnav_competition">
                <b-row v-click-outside="toggleSubnavFocus">
                  <b-col lg="12"
                    >
                      <router-link class="dropdown text-dark" :to="'/competition/app'">
                        <div class="item text-dark text-center">
                          App Dev
                        </div>
                      </router-link>
                    </b-col
                  >
                  <b-col lg="12"
                    >
                      <router-link class="dropdown text-dark" :to="'/competition/game'">
                        <div class="item text-dark text-center">
                          Game Dev
                        </div>
                      </router-link>
                    </b-col
                  >
                  <b-col lg="12"
                    >
                      <router-link class="dropdown text-dark" :to="'/competition/iot'">
                        <div class="item text-dark text-center">
                          IoT Dev
                        </div>
                      </router-link>
                    </b-col
                  >
                  <b-col lg="12"
                    >
                      <router-link class="dropdown text-dark" :to="'/competition/olim'">
                        <div class="item text-dark text-center">
                          Olimpiade
                        </div>
                      </router-link>
                    </b-col
                  >
                </b-row>
              </b-container>
            </transition>
          </li>
          <li>
            <a
              class="login nav-item"
              @click="$store.dispatch('ui/changeWelcomeComponent', 'register')"
              href="#"
            >
              Register
            </a>
          </li>
          <li>
            <a
              class="login nav-item"
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
      <ul>
        <li>
          <router-link
            class="nav-item"
            @click="toggle()"
            v-smooth-scroll="{ duration: 1000 }"
            :to="'/'"
          >
            Home
          </router-link>
        </li>
        <li>
          <router-link
            class="nav-item"
            :to="'/about'"
            @click="toggle()"
            v-smooth-scroll="{ duration: 1000 }"
          >
            About
          </router-link>
        </li>
        <li>
          <a
            href="#"
            class="nav-item"
            v-smooth-scroll="{ duration: 1000 }"
            @click="toggleSubNavCompetitionMin"
          >
            Competition<span style="font-size: 12px; margin-left: 20px"
              >&#9660;</span
            >
          </a>
        </li>
        <li>
          <router-link
            :to="'/competition/app'"
            @click="toggle()"
            v-if="subnav_competition_min"
          >
            App Dev
          </router-link>
        </li>
        <li>
          <router-link
            :to="'/competition/game'"
            @click="toggle()"
            v-if="subnav_competition_min"
          >
            Game Dev
          </router-link>
        </li>
        <li>
          <router-link
            :to="'/competition/iot'"
            @click="toggle()"
            v-if="subnav_competition_min"
          >
            IoT Dev
          </router-link>
        </li>

        <li>
          <router-link
            :to="'/competition/olim'"
            @click="toggle()"
            v-if="subnav_competition_min"
          >
            Olimpiade
          </router-link>
        </li>
        <li @click="toggle()">
          <a
            class="register nav-item"
            @click="$store.dispatch('ui/changeWelcomeComponent', 'register')"
            href="#"
          >
            Register
          </a>
        </li>
        <li @click="toggle()">
          <a
            class="login nav-item"
            @click="$store.dispatch('ui/changeWelcomeComponent', 'login')"
            href="#"
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
      subnav_flag: false,
    };
  },

  directives: {
    clickOutside: {
      bind: (el, binding, vnode) => {
        el.clickOutsideEvent = (event) => {
          // here I check that click was outside the el and his children
          if (!(el === event.target || el.contains(event.target))) {
            // and if it did, call method provided in attribute value
            vnode.context[binding.expression](event);
          }
        };
        document.body.addEventListener('click', el.clickOutsideEvent);
      },
      unbind: (el) => {
        document.body.removeEventListener('click', el.clickOutsideEvent);
      },
    },
  },

  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    toggle() {
      this.show = !this.show;
    },
    toggleSubNavCompetition() {
      this.subnav_competition = !this.subnav_competition;
      if (!this.subnav_competition) {
        this.subnav_flag = false;
      }
    },
    toggleSubNavCompetitionMin() {
      this.subnav_competition_min = !this.subnav_competition_min;
    },
    toggleSubnavFocus() {
      if (!this.subnav_flag) {
        this.subnav_flag = true;
        return;
      }
      this.subnav_competition = false;
      this.subnav_flag = false;
    },
  },

  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
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

.logo img:hover {
  filter: brightness(0) saturate(100%);
  filter: invert(37%) sepia(39%) saturate(2291%) hue-rotate(323deg) brightness(101%) contrast(100%);
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .4s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.nav-item:hover {
  color: #ff4655;
}

.nav-item{
  position: relative;
  padding-bottom: 0.5vh;
}

.nav-item::before{
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0;
  height: 2px;
  background-color: #ff4655;
  transition: width 0.5s cubic-bezier(0.25, 1, 0.5, 1);
}

@media (hover: hover) and (pointer: fine) {
  .nav-item:hover::before{
    left: 0;
    right: auto;
    width: 100%;
  }
}

.subnav {
  position: absolute;
  margin-right: 100px;
  max-width: 150px;
}

.subnav .item {
  background: rgba(255, 255, 255, 0.7);
  max-width: 120px;
  border-radius: 3px;
  margin-top: 5px;
  color: #000000;
  transition: all .35s;
}

.subnav .item:hover {
  background: rgba(255, 70, 85, 1);
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
    left: -5vw;
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
