<template>
    <div>
        <h3 class="text-left ml-4">Semifinal OSM sesi 2 (Analysist Test)</h3><hr/>
        <div id="working-page">
            <b-row>
                <!-- soal -->
                <b-col col cols="12" md="12">
                    <b-card-group deck>
                        <b-card
                            border-variant="secondary"
                            header="featured"
                            header-tag="header"
                            header-bg-variant="white"
                            header-text-variant="black"
                            align="center"
                        >
                            <template #header>
                                <b-row class="text-left">
                                    <b-col cols="7" md="8">Soal Analysist</b-col>
                                    <b-col cols="4" md="4" class="text-right">
                                        <b-button-group size="sm">
                                            <b-button variant="secondary">Sisa Waktu</b-button>
                                            <b-button variant="success">01:00:02</b-button>
                                        </b-button-group>
                                    </b-col>
                                </b-row>
                            </template>
                            <!-- <b-card-text class="text-left"> -->
                            <b-card img-src="https://image.slidesharecdn.com/soaldanpembahasanstatistika-140113044448-phpapp02/95/soal-dan-pembahasan-statistika-1-638.jpg?cb=1389588329" img-alt="Card image" img-bottom>
                                <b-card-text>
                                    Berikut adalah Soal untuk sesi 2 (Analysist Soal) untuk lembar jawab dapat didownload 
                                    dengan klik tombol download lembar jawab dibawah Soal.Setelah itu peserta menuliskan 
                                    jawaban di lembar jawab yang telah didownload. Waktu pengerjaan 40 menit. Kemudian, 
                                    Peserta mengupload kembali jawaban dalam bentuk pdf dalam waktu maksimal 15 menit dengan click 
                                    Tombol upload Jawaban.
                                </b-card-text>
                            </b-card>
                            <!-- </b-card-text> -->
                        </b-card>
                    </b-card-group>
                    <b-row>
                        <b-col id="nav-btn" cols="2" md="3">
                            <b-button class="mt-3" block variant="primary">
                                <i class="fas fa-arrow-down"></i>
                                <p> Download Soal</p>  
                            </b-button>
                        </b-col>
                        <b-col id="nav-btn" cols="6 offset-1" md="4 offset-1">
                            <b-button class="mt-3" block variant="success">
                                <i class="fas fa-arrow-down"></i>
                                <p> Download Lembar Jawab</p>  
                            </b-button>
                        </b-col>
                        <b-col id="nav-btn" cols="2 offset-1" md="3 offset-1">
                            <router-link :to="{name: 'UploadAnswerFile'}">
                                <b-button class="mt-3 mb-4" block variant="primary">
                                    <i class="fas fa-arrow-up"></i>
                                    <p>Upload Jawaban </p>
                                </b-button>
                            </router-link>
                        </b-col>
                    </b-row>
                </b-col>

            </b-row>
        </div>
    </div>
</template>
<script>
export default {
    name: 'PenyisihanOSM',
    data() {
        return {
            data : []
        }
    },
    methods: {
        JumlahSoal() {
            for(let i=0; i<60; i++) {
                this.data[i] = i+1;
            }
        }
    }
}
</script>
<style scoped>
#working-page {
    position: absolute;
    height: 100%;
    padding: 20px;
}

#number-question {
    width: 40px;
    height: 40px;
}

#number-question p {
    font-size:11px; 
    margin-top: 5px
}

#nav-btn p {
    display: inline;
}

@media (max-width: 767px) {
    #nav-btn p {
        display: none;
    }
    #number-question {
        width: 45px;
        height: 45px;
        margin-left: 15px;
    }
    #number-question p{
        font-size:15px; 
        margin-top: 5px;
    }
}
</style>