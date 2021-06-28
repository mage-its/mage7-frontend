<template>
  <div>
    <b-container class="text-left ml-0 pl-0 pt-2 pb-2">
      <router-link :to="{ name: 'CreateAnnouncement' }" class="btn btn-primary"
        ><i class="fas fa-plus"></i> Tambah</router-link
      >
    </b-container>
    <b-row
      class="bg-white p-2 mb-2 shadow-sm   rounded"
      no-gutters
      v-for="announcement in announcements"
      :key="announcement._id"
    >
      <b-col md="9" class="text-left p-3">
        <h4 class="text-bold">{{ announcement.title }}</h4>
        <p v-if="announcement"></p>
        
        <p class="text-secondary">{{ getDateTime("datetime", announcement.created_at) }}</p>
      </b-col>
      <b-col md="3" class="p-3">
        <router-link
          :to="{ name: 'DetailAnnouncement' }"
          class="btn btn-primary"
          ><i class="fas fa-search"></i>&nbsp;Detail</router-link
        >
      </b-col>
    </b-row>
  </div>
</template>
<script>
import * as datetime from "./../../../services/datetime";

export default {
  name: "MainAnnouncement",
  computed: {
    announcements() {
      return this.$store.state.announcement.announcements;
    },
  },
  methods: {
    getAnnouncements() {
      this.$store.dispatch("announcement/getAllAnnouncement");
    },
    getDateTime: function(type, date) {
      return datetime.getDateTime(type, date);
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
