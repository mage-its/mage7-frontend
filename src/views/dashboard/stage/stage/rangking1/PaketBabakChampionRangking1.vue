<template>
    <div>
        <!-- <h1>hello</h1> -->
        <ParticipantPaketBabakChampionRangking1 v-if="user.roles.includes('participant')"/>
    </div>
</template>
<script>
import ParticipantPaketBabakChampionRangking1 from './../../../../components/dashboard/participant/stage/rangking1/PaketBabakChampionRangking1.vue'

export default {
    name: "PaketBabakChampionRangking1",
    components: {
        ParticipantPaketBabakChampionRangking1
    },
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