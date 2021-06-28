<template>
  <b-container class="bg-white p-4 shadow rounded text-left">
    <h2>{{ announcement.title }}</h2>
    <p v-if="announcement.stage == null && announcement.participant == null">
      Umum
    </p>
    <p v-if="announcement.stage != null">
      {{ "Kepada peserta " + getEventName(announcement.stage._id) }}
    </p>
    <p v-if="announcement.participant != null">
      {{ "Kepada " + announcement.participant.username }}
    </p>
    <br />
    <small>{{ getDateTime("datetime", announcement.created_at) }}</small>
    <hr />
    <div class="mt-4" v-html="announcement.content" />
  </b-container>
</template>
<script>
import * as datetime from "./../../../services/datetime";

export default {
  name: "MainAnnouncement",
  computed: {
    announcement() {
      return this.$store.state.announcement.announcement;
    },
    events() {
      return this.$store.state.event.events;
    },
  },
  methods: {
    getAnnouncement() {
      this.$store.dispatch(
        "announcement/getAnnouncement",
        this.$route.params.id
      );
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
                    name = event.name + " Pekan Kreativitas";
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
    getDateTime: function(type, date) {
      return datetime.getDateTime(type, date);
    },
  },
  created() {
    this.getAnnouncement();
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
