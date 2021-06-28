<template>
    <div>
        <AdminCreateAnnouncement v-if="user.roles.includes('admin')"/>
    </div>
</template>
<script>
import AdminCreateAnnouncement from './../../../components/dashboard/admin/announcement/CreateAnnouncement.vue'

export default {
    name : 'MainAnnouncement',
    components: {
        AdminCreateAnnouncement
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