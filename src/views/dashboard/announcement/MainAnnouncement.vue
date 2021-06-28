<template>
    <div>
        <AdminMainAnnouncement v-if="user.roles.includes('admin')"/>
        <ParticipantMainAnnouncement v-if="user.roles.includes('participant')"/>
    </div>
</template>
<script>
import AdminMainAnnouncement from './../../../components/dashboard/admin/announcement/MainAnnouncement.vue'
import ParticipantMainAnnouncement from './../../../components/dashboard/participant/announcement/MainAnnouncement.vue'

export default {
    name : 'MainAnnouncement',
    components: {
        AdminMainAnnouncement,
        ParticipantMainAnnouncement,
    },
    computed: {
        user() {
            return this.$store.state.auth.user;
        }
    }
}
</script>
<style scoped>
.btn{
    padding: 10px 30px;
    background-color: rgba(0,0,0,0);
    border-color: rgb(255,255,255);
}
</style>