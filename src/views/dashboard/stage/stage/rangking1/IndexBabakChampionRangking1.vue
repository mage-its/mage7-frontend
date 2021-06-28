<template>
    <div>
        <h3 class="text-left ml-3">Babak Champion Rangking 1</h3><hr/>
        <router-view/>
    </div>
</template>
<script>

export default {
    name: "IndexBabakChampionRangking1",
    computed: {
        user() {
            return this.$store.state.auth.user;
        }
    }
}
</script>
<style scoped> 
.header{
    min-height: 90px;
    min-width: 100%;
    padding: 30px; 
}
</style>