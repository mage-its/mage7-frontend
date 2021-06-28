<template>
  <div style="background-color:#eee;min-height:100%; min-width:100%;">
    <Header />
    <Sidebar v-if="sidebar" />
    <div v-bind:class="['content', sidebar ? '' : 'content-margin']">
      <router-view />
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "Home",
  components: {
    Header,
    Sidebar,
  },
  computed: {
    events() {
      return this.$store.state.event.events;
    },
    sidebar() {
      return this.$store.state.ui.sidebarShow;
    },
  },
  methods: {
    getEvents() {
      this.$store.dispatch("event/getAllEvent");
    },
  },
  created() {
    this.getEvents();
    if (window.innerWidth < 800) 
        this.$store.dispatch("ui/changeSidebarComponent");
  },
};
</script>

<style scoped>
.content {
  margin-top: 66px;
  width: calc(100%);
  padding-top: 20px;
  margin-left: 280px;
  width: calc(100% - 280px);
  position: relative;
}

.content-margin {
  margin-left: 0px;
  width: 100vw;
}

@media only screen and (max-width: 767px) {
  .content {
    max-width: 100%;
    width: 100%;
    margin-left: 0;
    position: fixed;
    z-index: 1;
  }
}
</style>
