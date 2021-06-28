<template>
    <div>
        <AdminIndexPayment v-if="user.roles.includes('admin')"/>
        <ParticipantIndexPayment v-if="user.roles.includes('participant')"/>
    </div>
</template>
<script>
import AdminIndexPayment from './../../../components/dashboard/admin/payment/IndexPayment.vue'
import ParticipantIndexPayment from './../../../components/dashboard/participant/payment/IndexPayment.vue'

export default {
    name: "IndexPayment",
    components: {
        AdminIndexPayment,
        ParticipantIndexPayment,
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
