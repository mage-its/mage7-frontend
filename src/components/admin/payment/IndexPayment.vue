<template>
  <b-container>
    <div class="bg-light text-dark mb-3 rounded shadow-sm header">
      <h3 class="text-left d-inline float-left">
        <i style="font-size:30px" class="fas fa-money-bill-wave"></i>
        Pembayaran
      </h3>
    </div>
    <hr />
    <router-view />
    </b-container>
</template>
<style scoped>
.header {
  min-height: 90px;
  min-width: 100%;
  padding: 30px;
}
</style>
