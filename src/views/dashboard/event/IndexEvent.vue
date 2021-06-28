<template>
    <div>
        <AdminIndexEvent v-if="user.roles.includes('admin')"/>
    </div>
</template>
<script>
import AdminIndexEvent from './../../../components/dashboard/admin/event/IndexEvent.vue'

export default {
    name: "IndexEvent",
    components: {
        AdminIndexEvent
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
