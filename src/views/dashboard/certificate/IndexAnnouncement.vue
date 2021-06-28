<template>
    <div>
        <AdminIndexAnnouncement v-if="user.roles.includes('admin')"/>
    </div>
</template>
<script>
import AdminIndexAnnouncement from './../../../components/dashboard/admin/announcement/IndexAnnouncement.vue'

export default {
    name: "IndexAnnouncement",
    components: {
        AdminIndexAnnouncement
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
