<template>
  <div style="background-color:#eee;min-height:100%; min-width:100%;">
    <Header />
    <Sidebar id="sidebar"/>
    <div class="content">
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
};
</script>

<style scoped>
.content {
  margin-top: 66px;
  margin-left: 250px;
  max-width: calc(100%-250px);
  padding-top: 20px;
}
@media only screen and (max-width: 767px) {
  .content {
    max-width: 100%;
    width: 100%;
  }
}
</style>
