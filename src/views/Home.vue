<template>
  <div>
      <router-view/>
    </div>
  </div>
</template>

<script>

export default {
  name: "Home",
  data() {
    return {
      dashboard: false,
      loading: false,
    };
  },
  computed: {
  },
  updated(){
    if(window.location.href.search("dashboard")!=-1)
      this.dashboard = true;
  },
  created() {
    window.scrollTo(0, 0);
    if(window.location.href.search("dashboard")!=-1)
      this.dashboard = true;
  },
};
</script>
<style scoped>
html {
  min-height: 100% !important;
  height: 100%;
}

.container-router {
  height: 100%;
  width: 100%;
  position: absolute;
}

#partner {
  background-color: rgb(220, 220, 220);
  color: rgb(50, 50, 50);
  padding: 40px 100px;
}

#partner hr {
  max-width: 300px;
  background-color: rgb(70, 70, 70);
}

#partner .content {
  padding: 20px;
  background-color: #fff;
  border-radius: 3px;
}

#partner .content img {
  height: 100px;
  width: 250px;
  padding: 5px;
}

#partner #image-small {
  height: 100px;
  width: 150px;
}

#partner h3 {
  text-align: left;
}

@media only screen and (min-width: 1200px) and (max-width: 1920px) {
  .home-page {
    left: calc(50% - 500px);
    width: 1000px;
  }
}
@media only screen and (max-width: 767px) {
  .home-page {
    left: calc(50% - 240px);
    width: 480px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.typed {
  margin-left: 190px;
}
</style>
