<template>
  <div v-if="loading">
    <transition name="fade">
      <Loader />
    </transition>
  </div>
  <div v-else>
    <router-view />
  </div>
</template>
<script>
import Loader from "@/components/Loader";

export default {
  name: "App",
  components: {
    Loader,
  },
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    this.load();
    // window.onbeforeunload = function (e) {
    //   var storage = window.localStorage;
    //   storage.clear();
    // };
  },
  methods: {
    load() {
      const stateCheck = setInterval(() => {
        if (document.readyState === "complete") {
          this.loading = false;
          clearInterval(stateCheck);
        }
      }, 100);
    },
  },
};
</script>
