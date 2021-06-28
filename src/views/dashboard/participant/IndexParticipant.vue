<template>
    <div>
        <AdminIndexParticipant v-if="user.roles.includes('admin')"/>
    </div>
</template>
<script>
import AdminIndexParticipant from './../../../components/dashboard/admin/participant/IndexParticipant'

export default {
    name: "IndexParticipant",
    components: {
        AdminIndexParticipant
    },
    computed: {
        user() {
            return this.$store.state.auth.user;
        }
    },
    created() {
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
