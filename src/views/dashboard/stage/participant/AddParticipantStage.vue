<template>
    <div>
        <AdminAddParticipantStage v-if="user.roles.includes('admin')"/>
    </div>
</template>
<script>
import AdminAddParticipantStage from './../../../../components/dashboard/admin/stage/participant/AddParticipantStage.vue';

export default {
    name : 'AddParticipantStage',
    components: {
        AdminAddParticipantStage,
    },
    computed: {
        user() {
            return this.$store.state.auth.user;
        }
    },
}
</script>
<style scoped>
.btn{
    padding: 10px 30px;
    background-color: rgba(0,0,0,0);
    border-color: rgb(255,255,255);
}
</style>