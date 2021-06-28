<template>
    <div>
        <!-- <h1>hello</h1> -->
        <ParticipantPekanFinalPoster :title="'Pekan Final Poster'" v-if="user.roles.includes('participant')"/>
    </div>
</template>
<script>
import ParticipantPekanFinalPoster from './../../../../components/dashboard/participant/stage/poster/IndexPoster.vue'

export default {
    name: "PekanFinalPoster",
    components: {
        ParticipantPekanFinalPoster
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