<template>
    <div>
        <AdminListResultStage v-if="user.roles.includes('admin')"/>
    </div>
</template>
<script>
import AdminListResultStage from './../../../../components/dashboard/admin/stage/result/ListResultStage.vue';

export default {
    name : 'ListResultStage',
    components: {
        AdminListResultStage,
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