<template>
  <div class="wrapper">
    <nav id="sidebar" @click="checkSize">
      <div class="sidebar-header">
        <div class="profile">
          <router-link class="text-white" :to="{ name: 'DashboardMain' }">
            <b-row>
              <b-col cols="2" lg="3">
                <img
                  class="img-profile"
                  v-bind:src="'http://anavaugm.com/' + user.image"
                />
              </b-col>
              <b-col cols="2" class="sidebar-text text-left" lg="8">
                <p class="name">{{ user.username }}</p>
                <p class="type" v-if="user.roles.includes('participant')">
                  Peserta
                </p>
                <p class="type" v-else>Panitia</p>
              </b-col>
            </b-row>
          </router-link>
        </div>
      </div>
      <div class="sidebar-body" v-if="user.roles.includes('participant')">
        <ul class="list-unstyled components text-white">
          <li
            @click="selectedItem = 0"
            v-bind:class="[selectedItem == 0 ? 'active' : '']"
          >
            <router-link class="text-white" :to="{ name: 'DashboardMain' }">
              <b-row>
                <b-col cols="1" lg="1">
                  <div class="inline"><i class="fas fa-home"></i></div>
                </b-col>
                <b-col cols="10" class="sidebar-text" lg="10"> Beranda </b-col>
              </b-row>
            </router-link>
          </li>
          <li
            @click="selectedItem = 1"
            v-bind:class="[selectedItem == 1 ? 'active' : '']"
          >
            <router-link class="text-white" :to="{ name: 'IndexArticle' }">
              <b-row>
                <b-col cols="1" lg="1">
                  <div class="inline">
                    <i class="far fa-newspaper"></i>
                  </div>
                </b-col>
                <b-col cols="10" class="sidebar-text" lg="10"> Artikel </b-col>
              </b-row>
            </router-link>
          </li>
          <li
            @click="selectedItem = 2"
            v-bind:class="[selectedItem == 2 ? 'active' : '']"
          >
            <router-link class="text-white" :to="{ name: 'MainAnnouncement' }">
              <b-row>
                <b-col lg="1">
                  <div class="inline"><i class="fas fa-bullhorn"></i></div>
                </b-col>
                <b-col class="sidebar-text" lg="10"> Pengumuman </b-col>
              </b-row>
            </router-link>
          </li>
          <li
            @click="selectedItem = 3"
            v-bind:class="[selectedItem == 3 ? 'active' : '']"
          >
            <router-link class="text-white" :to="{ name: 'MainSchedule' }">
              <b-row>
                <b-col cols="1" lg="1">
                  <div class="inline"><i class="far fa-calendar-alt"></i></div>
                </b-col>
                <b-col cols="10" class="sidebar-text" lg="10"> Jadwal </b-col>
              </b-row>
            </router-link>
          </li>
          <li
            @click="selectedItem = 4"
            v-bind:class="[selectedItem == 4 ? 'active' : '']"
          >
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
          </li>
          <li
            @click="selectedItem = 5"
            v-bind:class="[selectedItem == 5 ? 'active' : '']"
          >
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
          <li
            @click="selectedItem = 6"
            v-bind:class="[selectedItem == 6 ? 'active' : '']"
          >
            <router-link class="text-white" :to="{ name: 'MainPayment' }">
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
          <li
            v-bind:class="[selectedItem == 7 ? 'active' : '']"
            v-if="checkJoinEvent('OSM')"
          >
            <a class="text-white" @click="performToggle(7, 'OSM')">
              <b-row>
                <b-col cols="1" lg="1">
                  <div class="inline"><i class="fas fa-trophy"></i></div>
                </b-col>
                <b-col cols="10" class="sidebar-text" lg="10">
                  OSM
                  <div class="d-inline">
                    <i class="fas fa-chevron-down float-right arrow"></i>
                  </div>
                </b-col>
              </b-row>
            </a>
            <ul
              class="list-unstyled components text-white pl-2"
              v-if="toggle == 7"
            >
              <li
                @click="selectedSubItem = 1"
                v-bind:class="[selectedSubItem == 1 ? 'active' : '']"
              >
                <router-link
                  class="text-white"
                  :to="{
                    name: 'MainStage',
                    params: { idStage: events[0].stages[0]._id },
                  }"
                >
                  <b-row>
                    <b-col lg="1">
                      <div class="inline"><i class="fas fa-trophy"></i></div>
                    </b-col>
                    <b-col class="sidebar-text" lg="10"> Penyisihan </b-col>
                  </b-row>
                </router-link>
              </li>
              <li
                @click="selectedSubItem = 2"
                v-bind:class="[selectedSubItem == 2 ? 'active' : '']"
                v-if="checkJoinStage('OSM', 'semifinal')"
              >
                <router-link
                  class="text-white"
                  :to="{
                    name: 'MainStage',
                    params: { idStage: events[0].stages[1]._id },
                  }"
                >
                  <b-row>
                    <b-col lg="1">
                      <div class="inline"><i class="fas fa-trophy"></i></div>
                    </b-col>
                    <b-col class="sidebar-text" lg="10"> Semifinal </b-col>
                  </b-row>
                </router-link>
              </li>
              <li
                @click="selectedSubItem = 3"
                v-bind:class="[selectedSubItem == 3 ? 'active' : '']"
                v-if="checkJoinStage('OSM', 'final')"
              >
                <router-link
                  class="text-white"
                  :to="{
                    name: 'MainStage',
                    params: { idStage: events[0].stages[2]._id },
                  }"
                >
                  <b-row>
                    <b-col lg="1">
                      <div class="inline"><i class="fas fa-trophy"></i></div>
                    </b-col>
                    <b-col class="sidebar-text" lg="10"> Final </b-col>
                  </b-row>
                </router-link>
              </li>
            </ul>
          </li>
          <li
            v-bind:class="[selectedItem == 8 ? 'active' : '']"
            v-if="checkJoinEvent('The One')"
          >
            <a class="text-white" @click="performToggle(8, 'The One')">
              <b-row>
                <b-col cols="1" lg="1">
                  <div class="inline"><i class="fas fa-trophy"></i></div>
                </b-col>
                <b-col cols="10" class="sidebar-text" lg="10">
                  The One
                  <div class="d-inline">
                    <i class="fas fa-chevron-down float-right arrow"></i>
                  </div>
                </b-col>
              </b-row>
            </a>
            <ul
              class="list-unstyled components text-white pl-2"
              v-if="toggle == 8"
            >
              <li
                @click="selectedSubItem = 1"
                v-bind:class="[selectedSubItem == 1 ? 'active' : '']"
              >
                <router-link
                  class="text-white"
                  :to="{
                    name: 'MainStage',
                    params: { idStage: events[1].stages[0]._id },
                  }"
                >
                  <b-row>
                    <b-col lg="1">
                      <div class="inline"><i class="fas fa-trophy"></i></div>
                    </b-col>
                    <b-col class="sidebar-text" lg="10"> Babak Gugur </b-col>
                  </b-row>
                </router-link>
              </li>
              <li
                @click="selectedSubItem = 2"
                v-bind:class="[selectedSubItem == 2 ? 'active' : '']"
                v-if="checkJoinStage('The One', 'semifinal')"
              >
                <router-link
                  class="text-white"
                  :to="{
                    name: 'MainStage',
                    params: { idStage: events[1].stages[1]._id },
                  }"
                >
                  <b-row>
                    <b-col lg="1">
                      <div class="inline"><i class="fas fa-trophy"></i></div>
                    </b-col>
                    <b-col class="sidebar-text" lg="10"> Babak Champion </b-col>
                  </b-row>
                </router-link>
              </li>
            </ul>
          </li>
          <li
            v-bind:class="[selectedItem == 9 ? 'active' : '']"
            v-if="checkJoinEvent('Started')"
          >
            <a class="text-white" @click="performToggle(9, 'Started')">
              <b-row>
                <b-col cols="1" lg="1">
                  <div class="inline"><i class="fas fa-trophy"></i></div>
                </b-col>
                <b-col cols="10" class="sidebar-text" lg="10">
                  Started
                  <div class="d-inline">
                    <i class="fas fa-chevron-down float-right arrow"></i>
                  </div>
                </b-col>
              </b-row>
            </a>
            <ul
              class="list-unstyled components text-white pl-2"
              v-if="toggle == 9"
            >
              <li
                @click="selectedSubItem = 1"
                v-bind:class="[selectedSubItem == 1 ? 'active' : '']"
              >
                <router-link
                  class="text-white"
                  :to="{
                    name: 'MainStage',
                    params: { idStage: events[2].stages[0]._id },
                  }"
                >
                  <b-row>
                    <b-col lg="1">
                      <div class="inline"><i class="fas fa-trophy"></i></div>
                    </b-col>
                    <b-col class="sidebar-text" lg="10">
                      Pekan Kreativitas
                    </b-col>
                  </b-row>
                </router-link>
              </li>
              <li
                @click="selectedSubItem = 2"
                v-bind:class="[selectedSubItem == 2 ? 'active' : '']"
              >
                <router-link
                  class="text-white"
                  :to="{
                    name: 'MainStage',
                    params: { idStage: events[2].stages[1]._id },
                  }"
                >
                  <b-row>
                    <b-col lg="1">
                      <div class="inline"><i class="fas fa-trophy"></i></div>
                    </b-col>
                    <b-col class="sidebar-text" lg="10"> Pekan Final </b-col>
                  </b-row>
                </router-link>
              </li>
            </ul>
          </li>
          <li
            v-bind:class="[selectedItem == 10 ? 'active' : '']"
            v-if="checkJoinEvent('Sigma')"
          >
            <router-link
              class="text-white"
              :to="{
                name: 'MainStage',
                params: { idStage: events[3].stages[0]._id },
              }"
            >
              <b-row @click="performToggle(10, 'Sigma')">
                <b-col cols="1" lg="1">
                  <div class="inline"><i class="fas fa-trophy"></i></div>
                </b-col>
                <b-col cols="10" class="sidebar-text" lg="10"> Sigma </b-col>
              </b-row>
            </router-link>
          </li>
          <li
            v-bind:class="[selectedItem == 11 ? 'active' : '']"
            v-if="checkJoinEvent('Open House')"
          >
            <router-link
              class="text-white"
              :to="{
                name: 'MainStage',
                params: { idStage: events[4].stages[0]._id },
              }"
            >
              <b-row @click="performToggle(11, 'Open House')">
                <b-col cols="1" lg="1">
                  <div class="inline"><i class="fas fa-trophy"></i></div>
                </b-col>
                <b-col cols="10" class="sidebar-text" lg="10">
                  Open House
                </b-col>
              </b-row>
            </router-link>
          </li>
        </ul>
      </div>

      <div class="sidebar-body" v-if="user.roles.includes('admin')">
        <ul class="list-unstyled components text-white">
          <li
            @click="selectedItem = 0"
            v-bind:class="[selectedItem == 0 ? 'active' : '']"
          >
            <router-link class="text-white" :to="{ name: 'DashboardMain' }">
              <b-row>
                <b-col lg="1">
                  <div class="inline"><i class="fas fa-home"></i></div>
                </b-col>
                <b-col class="sidebar-text" lg="10"> Beranda </b-col>
              </b-row>
            </router-link>
          </li>
          <li
            @click="selectedItem = 1"
            v-bind:class="[selectedItem == 1 ? 'active' : '']"
          >
            <router-link class="text-white" :to="{ name: 'MainParticipant' }">
              <b-row>
                <b-col lg="1">
                  <div class="inline"><i class="fas fa-users"></i></div>
                </b-col>
                <b-col class="sidebar-text" lg="10"> Peserta </b-col>
              </b-row>
            </router-link>
          </li>
          <li
            @click="selectedItem = 2"
            v-bind:class="[selectedItem == 2 ? 'active' : '']"
          >
            <router-link class="text-white" :to="{ name: 'MainPayment' }">
              <b-row>
                <b-col lg="1">
                  <div class="inline">
                    <i class="fas fa-money-bill-wave"></i>
                  </div>
                </b-col>
                <b-col class="sidebar-text" lg="10"> Pembayaran </b-col>
              </b-row>
            </router-link>
          </li>
          <li
            @click="selectedItem = 3"
            v-bind:class="[selectedItem == 3 ? 'active' : '']"
          >
            <router-link class="text-white" :to="{ name: 'MainSchedule' }">
              <b-row>
                <b-col lg="1">
                  <div class="inline"><i class="far fa-calendar-alt"></i></div>
                </b-col>
                <b-col class="sidebar-text" lg="10"> Jadwal </b-col>
              </b-row>
            </router-link>
          </li>
          <li
            @click="selectedItem = 4"
            v-bind:class="[selectedItem == 4 ? 'active' : '']"
          >
            <router-link class="text-white" :to="{ name: 'MainAnnouncement' }">
              <b-row>
                <b-col lg="1">
                  <div class="inline"><i class="fas fa-bullhorn"></i></div>
                </b-col>
                <b-col class="sidebar-text" lg="10"> Pengumuman </b-col>
              </b-row>
            </router-link>
          </li>
          <li v-bind:class="[selectedItem == 5 ? 'active' : '']">
            <a class="text-white" @click="performToggle(5, 'OSM')">
              <b-row>
                <b-col lg="1">
                  <div class="inline"><i class="fas fa-trophy"></i></div>
                </b-col>
                <b-col class="sidebar-text" lg="10">
                  OSM
                  <div class="d-inline">
                    <i class="fas fa-chevron-down float-right arrow"></i>
                  </div>
                </b-col>
              </b-row>
            </a>
            <ul
              class="list-unstyled components text-white pl-2"
              v-if="toggle == 5"
            >
              <li
                @click="selectedSubItem = 1"
                v-bind:class="[selectedSubItem == 1 ? 'active' : '']"
              >
                <router-link
                  class="text-white"
                  :to="{
                    name: 'ListParticipantStage',
                    params: { idStage: events[0].stages[0]._id },
                  }"
                >
                  <b-row>
                    <b-col lg="1">
                      <div class="inline"><i class="fas fa-trophy"></i></div>
                    </b-col>
                    <b-col class="sidebar-text" lg="10"> Penyisihan </b-col>
                  </b-row>
                </router-link>
              </li>
              <li
                @click="selectedSubItem = 2"
                v-bind:class="[selectedSubItem == 2 ? 'active' : '']"
              >
                <router-link
                  class="text-white"
                  :to="{
                    name: 'ListParticipantStage',
                    params: { idStage: events[0].stages[1]._id },
                  }"
                >
                  <b-row>
                    <b-col lg="1">
                      <div class="inline"><i class="fas fa-trophy"></i></div>
                    </b-col>
                    <b-col class="sidebar-text" lg="10"> Semifinal </b-col>
                  </b-row>
                </router-link>
              </li>
              <li
                @click="selectedSubItem = 3"
                v-bind:class="[selectedSubItem == 3 ? 'active' : '']"
              >
                <router-link
                  class="text-white"
                  :to="{
                    name: 'ListParticipantStage',
                    params: { idStage: events[0].stages[2]._id },
                  }"
                >
                  <b-row>
                    <b-col lg="1">
                      <div class="inline"><i class="fas fa-trophy"></i></div>
                    </b-col>
                    <b-col class="sidebar-text" lg="10"> Final </b-col>
                  </b-row>
                </router-link>
              </li>
            </ul>
          </li>
          <li v-bind:class="[selectedItem == 6 ? 'active' : '']">
            <a class="text-white" @click="performToggle(6, 'The One')">
              <b-row>
                <b-col lg="1">
                  <div class="inline"><i class="fas fa-trophy"></i></div>
                </b-col>
                <b-col class="sidebar-text" lg="10">
                  The One
                  <div class="d-inline">
                    <i class="fas fa-chevron-down float-right arrow"></i>
                  </div>
                </b-col>
              </b-row>
            </a>
            <ul
              class="list-unstyled components text-white pl-2"
              v-if="toggle == 6"
            >
              <li
                @click="selectedSubItem = 1"
                v-bind:class="[selectedSubItem == 1 ? 'active' : '']"
              >
                <router-link
                  class="text-white"
                  :to="{
                    name: 'ListParticipantStage',
                    params: { idStage: events[1].stages[0]._id },
                  }"
                >
                  <b-row>
                    <b-col lg="1">
                      <div class="inline"><i class="fas fa-trophy"></i></div>
                    </b-col>
                    <b-col class="sidebar-text" lg="10"> Babak Gugur </b-col>
                  </b-row>
                </router-link>
              </li>
              <li
                @click="selectedSubItem = 2"
                v-bind:class="[selectedSubItem == 2 ? 'active' : '']"
              >
                <router-link
                  class="text-white"
                  :to="{
                    name: 'ListParticipantStage',
                    params: { idStage: events[1].stages[1]._id },
                  }"
                >
                  <b-row>
                    <b-col lg="1">
                      <div class="inline"><i class="fas fa-trophy"></i></div>
                    </b-col>
                    <b-col class="sidebar-text" lg="10"> Babak Champion </b-col>
                  </b-row>
                </router-link>
              </li>
            </ul>
          </li>
          <li v-bind:class="[selectedItem == 7 ? 'active' : '']">
            <a class="text-white" @click="performToggle(7, 'Started')">
              <b-row>
                <b-col lg="1">
                  <div class="inline"><i class="fas fa-trophy"></i></div>
                </b-col>
                <b-col class="sidebar-text" lg="10">
                  Started
                  <div class="d-inline">
                    <i class="fas fa-chevron-down float-right arrow"></i>
                  </div>
                </b-col>
              </b-row>
            </a>
            <ul
              class="list-unstyled components text-white pl-2"
              v-if="toggle == 7"
            >
              <li
                @click="selectedSubItem = 1"
                v-bind:class="[selectedSubItem == 1 ? 'active' : '']"
              >
                <router-link
                  class="text-white"
                  :to="{
                    name: 'ListParticipantStage',
                    params: { idStage: events[2].stages[0]._id },
                  }"
                >
                  <b-row>
                    <b-col lg="1">
                      <div class="inline"><i class="fas fa-trophy"></i></div>
                    </b-col>
                    <b-col class="sidebar-text" lg="10">
                      Pekan Kreativitas
                    </b-col>
                  </b-row>
                </router-link>
              </li>
              <li
                @click="selectedSubItem = 2"
                v-bind:class="[selectedSubItem == 2 ? 'active' : '']"
              >
                <router-link
                  class="text-white"
                  :to="{
                    name: 'ListParticipantStage',
                    params: { idStage: events[2].stages[1]._id },
                  }"
                >
                  <b-row>
                    <b-col lg="1">
                      <div class="inline"><i class="fas fa-trophy"></i></div>
                    </b-col>
                    <b-col class="sidebar-text" lg="10">
                      Pekan Final
                    </b-col>
                  </b-row>
                </router-link>
              </li>
            </ul>
          </li>
          <li
            v-bind:class="[selectedItem == 8 ? 'active' : '']"
            @click="selectedItem = 8"
          >
            <router-link
              class="text-white"
              :to="{
                name: 'ListParticipantStage',
                params: { idStage: events[3].stages[0]._id },
              }"
            >
              <b-row @click="performToggle(8, 'Sigma')">
                <b-col lg="1">
                  <div class="inline"><i class="fas fa-trophy"></i></div>
                </b-col>
                <b-col class="sidebar-text" lg="10"> Sigma </b-col>
              </b-row>
            </router-link>
          </li>
          <li
            v-bind:class="[selectedItem == 9 ? 'active' : '']"
            @click="selectedItem = 9"
          >
            <router-link
              class="text-white"
              :to="{
                name: 'ListParticipantStage',
                params: { idStage: events[4].stages[0]._id },
              }"
            >
              <b-row @click="performToggle(9, 'Open House')">
                <b-col lg="1">
                  <div class="inline"><i class="fas fa-trophy"></i></div>
                </b-col>
                <b-col class="sidebar-text" lg="10"> Open House </b-col>
              </b-row>
            </router-link>
          </li>
          <li>
            <router-link class="text-white">
              <b-row>
                <b-col cols="1" lg="1">
                  <div class="inline"><i class="fas fa-award"></i></div>
                </b-col>
                <b-col cols="10" class="sidebar-text" lg="10">
                  Sertifikat
                </b-col>
              </b-row>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
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
    performToggle(item, eventName) {
      var index = 0;
      var eventIndex = 0;
      this.events.forEach((event) => {
        if (event.name == eventName) eventIndex = index;
        index++;
      });
      var event = {
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
    getEvents() {
      this.$store.dispatch("event/getAllEvent");
    },
    checkJoinStage(eventName, stageName) {
      var joinStage = false;

      if (this.user.participant.events.length > 0)
        this.user.participant.events.forEach((event) => {
          if (event.name == eventName) {
            event.stages.forEach((stage) => {
              if (stage.name == stageName) joinStage = true;
            });
          }
        });

      return joinStage;
    },
    checkJoinEvent(name) {
      var joinEvent = false;

      if (this.user.participant.events.length > 0)
        this.user.participant.events.forEach((event) => {
          if (event.name == name) joinEvent = true;
        });

      return joinEvent;
    },
    onResize() {
      this.windowWidth = window.innerWidth;
    },
    checkSize() {
      if (this.windowWidth < 800)
        this.$store.dispatch("ui/changeSidebarComponent");
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  created() {
    this.getEvents();
    if (this.user.roles.includes("participant")) {
      if (window.location.href.includes("article")) this.selectedItem = 1;
      else if (window.location.href.includes("announcement"))
        this.selectedItem = 2;
      else if (window.location.href.includes("schedule")) this.selectedItem = 3;
      else if (window.location.href.includes("twibbon")) this.selectedItem = 4;
      else if (window.location.href.includes("document")) this.selectedItem = 5;
      else if (window.location.href.includes("payment")) this.selectedItem = 6;
    }

    /* if (window.location.href.includes("stage")) {
      if (this.event.name == "OSM") this.selectedItem = 7;
      else if (this.event.name == "Ranking 1") this.selectedItem = 8;
      else if (this.event.name == "Poster") this.selectedItem = 9;
    } else if (window.location.href.includes("participant"))
      this.selectedItem = 1;
    else if (window.location.href.includes("payment")) this.selectedItem = 2;
    else if (window.location.href.includes("schedule")) this.selectedItem = 3;
    else this.selectedItem = 0;

    if (this.user.roles.includes("participant")) {
      if (window.location.href.includes("stage")) {
        if (this.event.name == "OSM") this.selectedItem = 7;
        else if (this.event.name == "Ranking 1") this.selectedItem = 8;
        else if (this.event.name == "Poster") this.selectedItem = 9;
      }
    }*/
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
}

#sidebar {
  min-width: 280px;
  max-width: 250px;
  height: 600px;
  overflow-y: auto;
}

#sidebar.active {
  margin-left: -250px;
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
  background: #512b58;
  color: #fff;
  transition: all 0.3s;
  text-align: left;
}

#sidebar .sidebar-header {
  background: #444;
}

#sidebar .sidebar-header .brand {
  padding: 12px;
  background: #252525;
  text-align: center;
}

#sidebar .sidebar-header .profile {
  padding: 20px;
  background: #3b064d;
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
  color: #454545;
  background: #3b064d;
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
  .wrapper {
    margin-top: 70px;
  }
  #sidebar {
    max-width: 100vw;
    width: 100vw;
    overflow-y: auto;
  }
}
</style>
