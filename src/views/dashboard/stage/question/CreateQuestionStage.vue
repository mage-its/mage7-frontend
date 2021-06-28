<template>
    <div>
        <AdminCreateQuestionStage v-if="user.roles.includes('admin')"/>
    </div>
</template>
<script>
import AdminCreateQuestionStage from './../../../../components/dashboard/admin/stage/question/CreateQuestionStage.vue';

export default {
    name : 'CreateQuestionStage',
    components: {
        AdminCreateQuestionStage,
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