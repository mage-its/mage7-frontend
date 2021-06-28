<template>
    <div>
        <AdminListParticipantStage v-if="user.roles.includes('admin')"/>
    </div>
</template>
<script>
import AdminListParticipantStage from './../../../../components/dashboard/admin/stage/participant/ListParticipantStage.vue';

export default {
    name : 'ListParticipantStage',
    components: {
        AdminListParticipantStage,
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