<template>
    <b-container>
        <div class="bg-light text-dark mb-3 rounded shadow-sm header">
            <h3 class="text-left d-inline float-left">
                <i class="fas fa-home"></i>
                Beranda
            </h3>
        </div>
        <hr/>
        <b-row>
            <b-col lg="12">
                <div class="container bg-white p-3 mb-3 text-center rounded-lg shadow">
                    <p>
                        <br>
                        <b>SELAMAT DATANG PESERTA ANAVA 15!</b>
                        Ini adalah Dashboard anda <br> berbagai jenis informasi terkait lomba dapat dilihat disini 
                    </p>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
export default {
    name: 'DashboardMain',
}
</script>
<style scoped>
.header{
    min-height: 90px;
    min-width: 100%;
    padding: 30px; 
}
.btn{
    padding: 10px 30px;
    background-color: rgba(0,0,0,0);
    border-color: rgb(255,255,255);
}
</style>