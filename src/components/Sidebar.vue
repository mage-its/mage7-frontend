<template>
  <div>
    <div id="sidebar-mobile">
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
          <b-nav-item>
            <b-button v-b-toggle.sidebar-backdrop
              ><i class="fas fa-bars"></i
            ></b-button>
          </b-nav-item>
        </b-navbar-nav>
        <h4 class="text-white mt-2">Dashboard</h4>
      </b-navbar>
      <b-sidebar
        id="sidebar-backdrop"
        backdrop-variant="transparent"
        bg-variant="dark"
        text-variant="light"
        backdrop
        shadow
        no-header
      >
        <template #default="{ hide }">
          <div class="px-3 py-2">
            <b-form-group>
              <div id="sidebar-background-mobile">
                <div class="sidebar-header">
                  <div class="sidebar-logo">
                    <img src="@/assets/img/mage-title-white.png" />
                  </div>
                </div>
                <div class="sidebar-body">
                  <ul class="list-unstyled components text-white">
                    <li @click="selectedItem = 0" class="mb-3">
                      <router-link
                        class="text-white"
                        :to="{ name: 'DashboardMain' }"
                      >
                        <b-row>
                          <b-col cols="1" lg="1">
                            <div class="inline">
                              <i class="fas fa-home"></i>
                            </div>
                          </b-col>
                          <b-col cols="10" class="sidebar-text" lg="10">
                            Beranda
                          </b-col>
                        </b-row>
                      </router-link>
                    </li>
                    <li
                      @click="selectedItem = 1"
                      class="mb-3"
                      id="uploadProposalMobile"
                    >
                      <router-link
                        class="text-white"
                        :to="{ name: 'UploadProposal' }"
                      >
                        <b-row>
                          <b-col cols="1" lg="1">
                            <div class="inline">
                              <i class="far fa-newspaper"></i>
                            </div>
                          </b-col>
                          <b-col cols="10" class="sidebar-text" lg="10">
                            Upload Proposal
                          </b-col>
                        </b-row>
                      </router-link>
                    </li>
                    <li @click="selectedItem = 2" class="mb-3">
                      <router-link
                        class="text-white"
                        :to="{ name: 'MainAnnouncement' }"
                      >
                        <b-row>
                          <b-col cols="1" lg="1">
                            <div class="inline">
                              <i class="fas fa-bullhorn"></i>
                            </div>
                          </b-col>
                          <b-col cols="10" class="sidebar-text" lg="10">
                            Pengumuman
                          </b-col>
                        </b-row>
                      </router-link>
                    </li>
                    <!-- <li @click="selectedItem = 3">
            <router-link class="text-white" :to="{ name: 'MainSchedule' }">
              <b-row>
                <b-col cols="1" lg="1">
                  <div class="inline"><i class="far fa-calendar-alt"></i></div>
                </b-col>
                <b-col cols="10" class="sidebar-text" lg="10"> Jadwal </b-col>
              </b-row>
            </router-link>
          </li> -->
                    <!-- <li @click="selectedItem = 4">
            <router-link class="text-white" :to="{ name: 'IndexTwibbon' }">
              <b-row>
                <b-col cols="1" lg="1">
                  <div class="inline">
                    <i class="far fa-image"></i>
                  </div>
                </b-col>
                <b-col cols="10" class="sidebar-text" lg="10"> Twibbon </b-col>
              </b-row>
            </router-link>
          </li> -->
                    <li @click="selectedItem = 5" class="mb-3" id="administrasiMobile">
                      <router-link
                        class="text-white"
                        :to="{ name: 'MainDocument' }"
                      >
                        <b-row>
                          <b-col cols="1" lg="1">
                            <div class="inline">
                              <i class="far fa-copy"></i>
                            </div>
                          </b-col>
                          <b-col cols="1" class="sidebar-text" lg="10">
                            Administrasi
                          </b-col>
                        </b-row>
                      </router-link>
                    </li>
                    <li @click="selectedItem = 6" class="mb-3" id="pembayaranMobile">
                      <router-link
                        class="text-white"
                        :to="{ name: 'CreatePayment' }"
                      >
                        <b-row>
                          <b-col cols="1" lg="1">
                            <div class="inline">
                              <i class="fas fa-money-bill-wave"></i>
                            </div>
                          </b-col>
                          <b-col cols="10" class="sidebar-text" lg="10">
                            Pembayaran
                          </b-col>
                        </b-row>
                      </router-link>
                    </li>
                    <li @click="selectedItem = 7" class="mb-3">
                      <a href="#" class="text-white" @click="signOut()">
                        <b-row>
                          <b-col cols="1" lg="1">
                            <div class="inline">
                              <i class="fas fa-sign-out-alt"></i>
                            </div>
                          </b-col>
                          <b-col cols="10" class="sidebar-text" lg="10">
                            Keluar
                          </b-col>
                        </b-row>
                      </a>
                    </li>
                  </ul>
                </div>
                <b-button variant="danger" block @click="hide"
                  >Close Sidebar</b-button
                >
              </div>
            </b-form-group>
          </div>
        </template>
      </b-sidebar>
    </div>
    <div class="wrapper">
      <nav id="sidebar">
        <div class="sidebar-header">
          <div class="sidebar-logo">
            <img src="@/assets/img/mage-title-white.png" />
          </div>
        </div>
        <div class="sidebar-body">
          <ul class="list-unstyled components text-white">
            <li @click="selectedItem = 0">
              <router-link class="text-white" :to="{ name: 'DashboardMain' }">
                <b-row>
                  <b-col cols="1" lg="1">
                    <div class="inline"><i class="fas fa-home"></i></div>
                  </b-col>
                  <b-col cols="10" class="sidebar-text" lg="10">
                    Beranda
                  </b-col>
                </b-row>
              </router-link>
            </li>
            <li @click="selectedItem = 1" id="uploadProposal">
              <router-link class="text-white" :to="{ name: 'UploadProposal' }">
                <b-row>
                  <b-col cols="1" lg="1">
                    <div class="inline">
                      <i class="far fa-newspaper"></i>
                    </div>
                  </b-col>
                  <b-col cols="10" class="sidebar-text" lg="10">
                    Upload Proposal
                  </b-col>
                </b-row>
              </router-link>
            </li>
            <li @click="selectedItem = 2">
              <router-link
                class="text-white"
                :to="{ name: 'MainAnnouncement' }"
              >
                <b-row>
                  <b-col cols="1" lg="1">
                    <div class="inline">
                      <i class="fas fa-bullhorn"></i>
                    </div>
                  </b-col>
                  <b-col cols="10" class="sidebar-text" lg="10">
                    Pengumuman
                  </b-col>
                </b-row>
              </router-link>
            </li>
            <!-- <li @click="selectedItem = 3">
            <router-link class="text-white" :to="{ name: 'MainSchedule' }">
              <b-row>
                <b-col cols="1" lg="1">
                  <div class="inline"><i class="far fa-calendar-alt"></i></div>
                </b-col>
                <b-col cols="10" class="sidebar-text" lg="10"> Jadwal </b-col>
              </b-row>
            </router-link>
          </li> -->
            <!-- <li @click="selectedItem = 4">
            <router-link class="text-white" :to="{ name: 'IndexTwibbon' }">
              <b-row>
                <b-col cols="1" lg="1">
                  <div class="inline">
                    <i class="far fa-image"></i>
                  </div>
                </b-col>
                <b-col cols="10" class="sidebar-text" lg="10"> Twibbon </b-col>
              </b-row>
            </router-link>
          </li> -->
            <li @click="selectedItem = 5" id="administrasi">
              <router-link class="text-white" :to="{ name: 'MainDocument' }">
                <b-row>
                  <b-col cols="1" lg="1">
                    <div class="inline"><i class="far fa-copy"></i></div>
                  </b-col>
                  <b-col cols="1" class="sidebar-text" lg="10">
                    Administrasi
                  </b-col>
                </b-row>
              </router-link>
            </li>
            <li @click="selectedItem = 6" id="pembayaran">
              <router-link class="text-white" :to="{ name: 'CreatePayment' }">
                <b-row>
                  <b-col cols="1" lg="1">
                    <div class="inline">
                      <i class="fas fa-money-bill-wave"></i>
                    </div>
                  </b-col>
                  <b-col cols="10" class="sidebar-text" lg="10">
                    Pembayaran
                  </b-col>
                </b-row>
              </router-link>
            </li>
            <li @click="selectedItem = 7">
              <a href="#" class="text-white" @click="signOut()">
                <b-row>
                  <b-col cols="1" lg="1">
                    <div class="inline">
                      <i class="fas fa-sign-out-alt"></i>
                    </div>
                  </b-col>
                  <b-col cols="10" class="sidebar-text" lg="10"> Keluar </b-col>
                </b-row>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  name: "Sidebar",
  data() {
    return {
      textBold: "text-bold",
      windowWidth: window.innerWidth,
      selectedItem: 0,
      selectedSubItem: 0,
      toggle: 0,
      scrollY: 0,
    };
  },
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
    events() {
      return this.$store.state.event.events;
    },
    event() {
      return JSON.parse(localStorage.getItem("event"));
    },
    getToggle() {
      return this.toggle;
    },
  },
  methods: {
    signOut() {
      Swal.fire({
        icon: "warning",
        title: "Anda Yakin LogOut ?",
        showDenyButton: true,
        confirmButtonText: "Yes",
        denyButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store.dispatch("auth/logout").then(() => {});
          this.$router.push({ name: "Home" });
          location.reload();
        }
      });
    },
    performToggle(item, eventName) {
      let index = 0;
      let eventIndex = 0;
      this.events.forEach((event) => {
        if (event.name == eventName) eventIndex = index;
        index++;
      });
      const event = {
        roles: this.user.roles,
        item: eventIndex,
      };

      this.$store.dispatch("event/selectEvent", event);

      if (this.selectedItem == item && this.toggle != 0) {
        this.toggle = 0;
      } else {
        this.selectedItem = item;
        this.toggle = item;
        this.selectedSubItem = 1;
      }
    },
    getUser() {
      const user = JSON.parse(localStorage.getItem("user"));
	  if(user.user.registeredComp === "olim") {
		  document.getElementById("pembayaran").style.display = "block";
		  document.getElementById("pembayaranMobile").style.display = "block";
		  document.getElementById("uploadProposal").style.display = "none";
		  document.getElementById("uploadProposalMobile").style.display = "none";
	  } else if (user.user.registeredComp === "") {
		  document.getElementById("pembayaran").style.display = "none";
		  document.getElementById("pembayaranMobile").style.display = "none";
		  document.getElementById("uploadProposal").style.display = "none";
		  document.getElementById("uploadProposalMobile").style.display = "none";
	  } else if (user.user.registeredComp.length > 0) {
		  document.getElementById("administrasi").style.display = "none";
		  document.getElementById("administrasiMobile").style.display = "none";
	  } else if (user.user.registeredComp.length > 0 && user.user.registeredComp !== "olim") {
		  document.getElementById("pembayaran").style.display = "none"
		  document.getElementById("pembayaranMobile").style.display = "none"
	  }

    //   if ( user.user.registeredComp === "olim" || user.user.registeredComp === "") {
    //     document.getElementById("pembayaran").style.display = "block";
    //     document.getElementById("uploadProposal").style.display = "none";
    //   } else {
    //     document.getElementById("pembayaran").style.display = "none";
    //   }
    },
    checkJoinStage(eventName, stageName) {
      let joinStage = false;

      if (this.user.participant.events.length > 0) {
        this.user.participant.events.forEach((event) => {
          if (event.name == eventName) {
            event.stages.forEach((stage) => {
              if (stage.name == stageName) joinStage = true;
            });
          }
        });
      }

      return joinStage;
    },
    checkJoinEvent(name) {
      let joinEvent = false;

      if (this.user.participant.events.length > 0) {
        this.user.participant.events.forEach((event) => {
          if (event.name == name) joinEvent = true;
        });
      }

      return joinEvent;
    },
    onResize() {
      this.windowWidth = window.innerWidth;
    },
    checkSize() {
      if (this.windowWidth < 800) {
        this.$store.dispatch("ui/changeSidebarComponent");
      }
    },
  },
  mounted() {
    this.getUser();
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  created() {
    if (this.user.roles.includes("participant")) {
      if (window.location.href.includes("article")) this.selectedItem = 1;
      else if (window.location.href.includes("announcement")) {
        this.selectedItem = 2;
      } else if (window.location.href.includes("schedule"))
        this.selectedItem = 3;
      else if (window.location.href.includes("twibbon")) this.selectedItem = 4;
      else if (window.location.href.includes("document")) this.selectedItem = 5;
      else if (window.location.href.includes("payment")) this.selectedItem = 6;
    }
  },
};
</script>

<style>
@import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";

* {
  font-family: "Poppins", sans-serif;
}

.wrapper {
  display: flex;
  align-items: stretch;
  position: fixed;
  background: white;
}

.sidebar-logo {
  padding: 20px;
}

.sidebar-logo img {
  height: 55px;
  width: 200px;
}

#sidebar {
  min-width: 280px;
  max-width: 250px;
  height: 100vh;
  overflow-y: auto;
  background-color: #3f0d12;
  background-image: linear-gradient(315deg, #3f0d12 0%, #a71d31 74%);
}

#sidebar-background-mobile {
  min-width: 280px;
  max-width: 250px;
  height: 100vh;
  overflow-y: auto;
  background-color: #212529;
}

#sidebar.active {
  margin-left: -250px;
  background: white;
}

#sidebar-mobile {
  display: none;
}

.img-profile {
  width: 50px;
  height: 50px;
  border-radius: 25px;
}

a,
a:hover,
a:focus {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s;
}

#sidebar {
  color: #fff;
  transition: all 0.3s;
  text-align: left;
}

/* #sidebar .sidebar-header {
} */

#sidebar .sidebar-header .brand {
  padding: 12px;
  text-align: center;
}

#sidebar .sidebar-header .profile {
  padding: 20px;
}

#sidebar .sidebar-header .profile a {
  color: white;
  text-decoration: none;
}

.profile .name {
  font-weight: bold;
}

.profile p {
  margin: 0;
  padding: 0;
}

#sidebar ul p {
  color: #fff;
  padding: 5px;
}

#sidebar ul li a {
  padding: 15px 25px;
  font-size: 16px;
  display: block;
}

#sidebar ul li a:hover {
  color: #ffffff;
  background: #111111;
}

#sidebar ul li.active > a,
a[aria-expanded="true"] {
  color: #fff;
  background: #3b064d;
}

.sidebar-body {
  padding-left: 5px;
  padding-right: 5px;
}

ul a {
  text-decoration: none;
  color: white;
  border-radius: 3px;
  margin-top: 3px;
  margin-bottom: 3px;
}
ul a:hover {
  text-decoration: none;
}
.text-bold {
  font-weight: bold;
}
.text-normal {
  font-weight: normal;
}

.wrapper {
  z-index: 9;
}

@media only screen and (max-width: 767px) {
  /* #sidebar {
    max-width: 100vw;
    width: 100vw;
    overflow-y: auto;
  } */
  #sidebar {
    display: none;
  }

  #sidebar-mobile {
    display: block;
  }
}
</style>
