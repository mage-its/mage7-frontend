<template>
    <div>
        <ParticipantBabakChampionRangking1 v-if="user.roles.includes('participant')"/>
    </div>
</template>
<script>
import ParticipantBabakChampionRangking1 from './../../../../components/dashboard/participant/stage/rangking1/MainBabakChampionRangking1.vue'

export default {
    name: "BabakChampionRangking1",
    components: {
        ParticipantBabakChampionRangking1
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