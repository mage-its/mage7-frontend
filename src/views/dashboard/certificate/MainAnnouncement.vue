<template>
    <div>
        <AdminMainAnnouncement v-if="user.roles.includes('admin')"/>
    </div>
</template>
<script>
import AdminMainAnnouncement from './../../../components/dashboard/admin/announcement/MainAnnouncement.vue'

export default {
    name : 'MainAnnouncement',
    components: {
        AdminMainAnnouncement,
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