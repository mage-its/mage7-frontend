<template>
  <div id="loading-screen">
    <div id="loading-screen-content">Loading...</div>
    <div id="loader"></div>
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
  background: #ccc;
  padding-top: 200px;
  opacity: 0.8;
}
#loading-screen-content {
  margin: 0 auto;
  text-align: center;
  font-size: 30px;
  color: black;
}
#loader {
  margin: 0 auto;
  border: 16px solid #ece8e1;
  border-radius: 50%;
  border-top: 16px solid #111;
  border-right: 16px solid #111;
  border-bottom: 16px solid #ff4655;
  border-left: 16px solid #ff4655;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
