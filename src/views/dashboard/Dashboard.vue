<template>
  <div style="background-color:#eee;min-height:100%; min-width:100%;">
    <!--Header /-->
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
  mounted() {
    window.onpopstate = function(event) {
    this.$router.go(0);
    window.location.replace("http://localhost:8081/login");
    setTimeOut({

    }, 3000)

   };
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
  width: calc(100%);
  margin-left: 280px;
  padding-top: 20px;
  width: calc(100% - 280px);
  position: relative;
  height: 100vh;
}

.content-margin {
  margin-left: 0px;
  width: 100vw;
  height: 100vh;
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
