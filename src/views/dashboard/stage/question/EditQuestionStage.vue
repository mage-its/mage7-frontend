<template>
    <div>
        <AdminEditQuestionStage v-if="user.roles.includes('admin')"/>
    </div>
</template>
<script>
import AdminEditQuestionStage from './../../../../components/dashboard/admin/stage/question/EditQuestionStage.vue';

export default {
    name : 'EditQuestionStage',
    components: {
        AdminEditQuestionStage,
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