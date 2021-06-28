<template>
  <div>
    <b-container
      class="bg-white p-3 rounded shadow-sm"
      v-if="participant.verification == 1">
      <vue-tabs>
        <v-tab title="Umum" @click="getGeneralAnnouncement()">
          <div v-if="announcements.length > 0">
            <b-row
              class="bg-white p-2 mb-2 shadow-sm rounded"
              no-gutters
              v-for="announcement in announcements"
              :key="announcement._id"
            >
              <b-col md="9" class="text-left p-3">
                <h4 class="text-bold">{{ announcement.title }}</h4>
                <p v-if="announcement"></p>

                <p class="text-secondary">
                  {{ getDateTime("datetime", announcement.created_at) }}
                </p>
              </b-col>
              <b-col md="3" class="p-3">
                <router-link
                  :to="{ name: 'DetailAnnouncement', params: {id:announcement._id} }"
                  class="btn btn-primary"
                  ><i class="fas fa-search"></i>&nbsp;Detail</router-link
                >
              </b-col>
            </b-row>
          </div>
          <div v-else>
            <div
              class="container bg-white p-3 text-center text-dark rounded-lg mt-2 mb-2"
            >
              <p>
                <i class="fas fa-exclamation-triangle fa-2x"></i>
                <br />
                Belum ada pengumuman
              </p>
            </div>
          </div>
        </v-tab>
        <v-tab title="Pribadi">
          <div v-if="participantAnnouncements">
            <b-row
              class="bg-white p-2 mb-2 shadow-sm rounded"
              no-gutters
              v-for="announcement in participantAnnouncements"
              :key="announcement._id"
            >
              <b-col md="9" class="text-left p-3">
                <h4 class="text-bold">{{ announcement.title }}</h4>
                <p v-if="announcement"></p>

                <p class="text-secondary">
                  {{ getDateTime("datetime", announcement.created_at) }}
                </p>
              </b-col>
              <b-col md="3" class="p-3">
                <router-link
                  :to="{ name: 'DetailAnnouncement', params:{id:announcement._id} }"
                  class="btn btn-primary"
                  ><i class="fas fa-search"></i>&nbsp;Detail</router-link
                >
              </b-col>
            </b-row>
          </div>
          <div v-else>
            <div
              class="container bg-white p-3 text-center text-dark rounded-lg mt-2 mb-2"
            >
              <p>
                <i class="fas fa-exclamation-triangle fa-2x"></i>
                <br />
                Belum ada pengumuman
              </p>
            </div>
          </div>
        </v-tab>
      </vue-tabs>
    </b-container>
  </div>
</template>
<script>
import * as datetime from "./../../../../services/datetime";

export default {
  name: "MainAnnouncement",
  computed: {
    announcements() {
      return this.$store.state.announcement.announcements;
    },
    participantAnnouncements() {
      return this.$store.state.announcement.participantAnnouncements;
    },
    participant() {
      return JSON.parse(localStorage.getItem("user"));
    },
  },
  methods: {
    getGeneralAnnouncement() {
      this.$store.dispatch("announcement/getGeneralAnnouncement");
    },
    getAllAnnouncementByParticipant() {
      this.$store.dispatch(
        "announcement/getAllAnnouncementByParticipant",
        this.participant.id
      ).then(
        (response) =>{
          console.log(response)
        }
      );
    },
    getDateTime: function(type, date) {
      return datetime.getDateTime(type, date);
    },
  },
  created() {
    this.getGeneralAnnouncement();
    this.getAllAnnouncementByParticipant();
  },
};
</script>
<style scoped>
p {
  display: inline;
}
.profile {
  height: 40px;
  width: 40px;
  border-radius: 20px;
}
</style>
