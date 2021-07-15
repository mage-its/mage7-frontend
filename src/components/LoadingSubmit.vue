<template>
  <div id="loading-screen">
    <div id="loading-screen-content">Loading...</div>
  </div>
</template>
<style scoped>
#loading-screen {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 999999;
  background: #ffffff;
  padding-top: 200px;
  opacity: 0.8;
}
#loading-screen-content {
  width: 440px;
  position: absolute;
  top: calc(50% - 50px);
  left: calc(50% - 230px);
  text-align: center;
  font-size: 30px;
  color: black;
}
</style>