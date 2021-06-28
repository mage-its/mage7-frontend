<template>
    <b-container>
        <h3 class="text-left">Beranda</h3>
        <hr/>
        <b-row>
            <b-col lg="12 mt-1">
                <div class="container bg-white p-3 mb-3 text-center rounded-lg shadow">
                    <p>
                        <i style="font-size:30px" class="fas fa-home"></i>
                        <br>
                        <b>SELAMAT DATANG PANITIA ANAVA 15!</b>
                        Ini adalah Dashboard anda <br> berbagai jenis informasi terkait lomba dapat dilihat disini 
                    </p>
                </div>
            </b-col>
            <b-col lg="12 mt-1">
                <div class="container bg-white p-3 text-center rounded-lg shadow">
                    <p>
                        <i style="font-size:30px" class="far fa-envelope"></i>
                        <br>
                        Anda Belum Melakukan Verifikasi Email, Harap Lakukan Verifikasi Email Anda Terlebih Dahulu!
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
.btn{
    padding: 10px 30px;
    background-color: rgba(0,0,0,0);
    border-color: rgb(255,255,255);
}
</style>