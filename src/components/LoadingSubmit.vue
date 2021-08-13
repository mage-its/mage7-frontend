<template>
  <div id="loading-screen">
    <div id="loading-screen-content">Loading...</div>
    <spring-spinner
      :animation-duration="2000"
      :size="120"
      color="#ff4655"
      id="spinner"
    />
  </div>
</template>

<script>

import SpringSpinner from 'epic-spinners/src/components/lib/SpringSpinner';

export default {
  components: {
    SpringSpinner,
  },
};
</script>

<style scoped>
#loading-screen {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 999999;
  background: #ccc;
  padding-top: 200px;
  opacity: 0.8;
}
#loading-screen-content {
  margin: 0 auto;
  margin-bottom: 2vh;
  text-align: center;
  font-size: 30px;
  color: black;
}
#spinner {
  margin: 0 auto;
}

</style>
