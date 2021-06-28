<template>
    <div>
        <b-row class="bg-white p-3 mb-2 shadow-sm rounded text-bold" no-gutters> 
            <b-col  class="text-left" md="3">
                <p>Peserta</p>
            </b-col>
            <b-col class="text-center" md="2">
                <p>Sekolah</p>
            </b-col>
            <b-col class="text-center" md="2">
                <p>Kartu Osis</p>
            </b-col>
            <b-col class="text-center" md="2">
                <p>Pas Foto</p>
            </b-col>
        </b-row>
        <b-row class="bg-white p-2 mb-2 shadow-sm rounded" no-gutters v-for="participant in participants" :key="participant._id"> 
            <b-col md="1">
                <img class="profile" v-bind:src="'../../'+participant.image"/>
            </b-col>
            <b-col md="2">
                <p class="text-bold">{{ participant.username }}</p><br/>
                <p class="text-secondary">{{ participant.firstname + ' ' + participant.lastname }}</p>
            </b-col>
            <b-col class="pt-2" md="2">
                <p>{{ participant.participant.school }}</p><br/>
            </b-col>
            <b-col class="pt-2" md="2">
                <div v-if="participant.participant.document">
                    <p class="text-success" v-if="participant.participant.document.osis_card.status = 1"><i class="fas fa-check"></i></p>
                </div>
                <p v-else>-</p>
            </b-col>
            <b-col class="pt-2" md="2">
                <div v-if="participant.participant.document">
                    <p class="text-success" v-if="participant.participant.document.image.status = 1"><i class="fas fa-check"></i></p>
                </div>
                <p v-else>-</p>
            </b-col>
            <b-col md="3">
                <router-link class="btn btn-primary" :to="participant._id">
                    <i class="fas fa-search"></i>
                    Detail
                </router-link> 
            </b-col>
        </b-row>
    </div>
</template>
<script>
export default {
    name: 'MainSchedule',
    computed: {
        participants() {
            return this.$store.state.participant.participants;
        },
    },
    methods: {
        getParticipants() {
            this.$store.dispatch('participant/getAllParticipant')
        }
    },
    created() {
        this.getParticipants();
    }
}
</script>
<style scoped>
p {
    display: inline;
}
.profile {
    height: 40px;
    width: 40px;
    border-radius: 20px;
}
</style>