<template>
    <div>
        <AdminCreatePayment v-if="user.roles.includes('admin')"/>
    </div>
</template>
<script>
import AdminCreatePayment from './../../../components/dashboard/admin/payment/CreatePayment.vue'

export default {
    name : 'MainPayment',
    components: {
        AdminCreatePayment
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