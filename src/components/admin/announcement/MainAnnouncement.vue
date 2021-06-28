<template>
  <div>
    <b-container class="text-left ml-0 pl-0 pt-2 pb-2">
      <router-link :to="{ name: 'CreateAnnouncement' }" class="btn btn-primary"
        ><i class="fas fa-plus"></i> Tambah</router-link
      >
    </b-container>
    <b-row
      class="bg-white p-2 mb-2 shadow-sm rounded"
      no-gutters
      v-for="announcement in announcements"
      :key="announcement._id"
    >
      <b-col md="9" class="text-left p-3">
        <h4 class="text-bold">{{ announcement.title }}</h4>
        <br />
        <p class="text-secondary">
          {{ getDateTime("datetime", announcement.created_at) }}
        </p>
      </b-col>
      <b-col md="3" class="p-3">
        <router-link
          :to="{ name: 'DetailAnnouncement', params: { id: announcement._id } }"
          class="btn btn-primary"
          ><i class="fas fa-search"></i>&nbsp;Detail</router-link
        >
      </b-col>
    </b-row>
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
    events() {
      return this.$store.state.event.events;
    },
  },
  methods: {
    getAnnouncements() {
      this.$store.dispatch("announcement/getAllAnnouncement");
    },
    getDateTime: function(type, date) {
      return datetime.getDateTime(type, date);
    },
    getEventName(stageId) {
      var name = "";
      console.log("stage participant" + stageId);
      this.events.forEach((event) => {
        event.stages.forEach((stage) => {
          if (stageId == stage._id) {
            switch (event.name) {
              case "OSM":
                switch (stage.name) {
                  case "preliminary":
                    name = event.name + " Penyisihan";
                    break;
                  case "semifinal":
                    name = event.name + " Semifinal";
                    break;
                  case "final":
                    name = event.name + " Final";
                    break;
                }
                break;
              case "The One":
                switch (stage.name) {
                  case "preliminary":
                    name = event.name + " Babak Gugur";
                    break;
                  case "semifinal":
                    name = event.name + " Babak Championship";
                    break;
                }
                break;
              case "Started":
                switch (stage.name) {
                  case "preliminary":
                    name = event.name + " Penyisihan";
                    break;
                  case "semifinal":
                    name = event.name + " Final";
                    break;
                }
                break;
              case "Sigma":
                name = event.name
                break;
              case "Open House":
                name = event.name
                break;
            }
          }
        });
      });
      return name;
    },
  },
  created() {
    this.getAnnouncements();
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
