<template>
  <b-container>
    <div class="bg-light text-dark rounded shadow-sm header">
      <h3 class="text-left d-inline float-left">
        <i class="far fa-calendar-alt"></i>
        Jadwal
      </h3>
    </div>
    <hr />

      <router-view/>
  </b-container>
</template>
<script>
export default {
  computed: {

  },
};
</script>
<style scoped>
.header {
  min-height: 90px;
  min-width: 100%;
  padding: 30px;
}
</style>
