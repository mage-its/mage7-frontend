<template>
    <div>
        <AdminMainPayment v-if="user.roles.includes('admin')"/>
        <ParticipantMainPayment v-if="user.roles.includes('participant')"/>
    </div>
</template>
<script>
import AdminMainPayment from './../../../components/dashboard/admin/payment/MainPayment.vue'
import ParticipantMainPayment from './../../../components/dashboard/participant/payment/MainPayment.vue'

export default {
    name : 'MainPayment',
    components: {
        AdminMainPayment,
        ParticipantMainPayment
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