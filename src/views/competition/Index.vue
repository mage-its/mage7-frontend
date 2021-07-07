<template>
  <div>
    <Login v-if="show == 'login'" />
    <Register v-if="show == 'register'" />
    <div v-if="show == 'welcome'">
      <NavBar />
        <router-view />
      <!-- <Footer /> -->
    </div>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';

export default {
  name: 'Main',
  components: {
    NavBar,
    Footer,
    Login,
    Register,
  },
  computed: {
    show() {
      return this.$store.state.ui.welcomeShow;
    },
  },
  created() {
    window.scrollTo(0, 0);
  },
};
</script>
