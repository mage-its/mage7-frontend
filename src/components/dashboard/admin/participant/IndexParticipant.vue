<template>
    <b-container>
        <div class="bg-light text-dark mb-3 rounded shadow-sm header">
            <h3 class="text-left d-inline float-left">
                <i class="fas fa-users mr-2"></i>
                Peserta
            </h3>
        </div>
        <hr/>
        <router-view/>
    </b-container>
</template>
<script>
export default {
    
}
</script>
<style scoped> 
.header{
    min-height: 90px;
    min-width: 100%;
    padding: 30px; 
}
</style>
