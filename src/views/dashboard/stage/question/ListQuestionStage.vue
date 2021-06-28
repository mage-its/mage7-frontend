<template>
    <div>
        <AdminListQuestionStage v-if="user.roles.includes('admin')"/>
    </div>
</template>
<script>
import AdminListQuestionStage from './../../../../components/dashboard/admin/stage/question/ListQuestionStage.vue';

export default {
    name : 'ListQuestionStage',
    components: {
        AdminListQuestionStage,
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