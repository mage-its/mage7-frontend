<template>
<div>
    <h3 class="text-left ml-4">Babak Gugur Rangking 1</h3><hr/>
    <div id="working-page">
        <b-row>
            <!-- soal -->
            <b-col col cols="12" md="9">
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
                                <b-col cols="7" md="8">Soal No. 25</b-col>
                                <b-col cols="4" md="4" class="text-right">
                                    <b-button-group size="sm">
                                        <b-button variant="secondary">Sisa Waktu</b-button>
                                        <b-button variant="success">01:00:02</b-button>
                                    </b-button-group>
                                </b-col>
                            </b-row>
                        </template>
                        <b-card-text class="text-left">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium porro quas ea iusto voluptas ullam quisquam quis nostrum nemo ipsam obcaecati, nam illum hic. Unde ipsam nostrum debitis delectus nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, esse ab? Amet minima quaerat facilis, ratione corrupti odio! Nam deleniti accusamus reiciendis sit vero accusantium minus autem placeat voluptatibus sunt.
                            <br>
                            <b-form-group class="mt-2">
                                <b-form-radio name="some-radios" value="A">Option A</b-form-radio>
                                <b-form-radio name="some-radios" value="B">Option B</b-form-radio>
                                <b-form-radio name="some-radios" value="C">Option C</b-form-radio>
                                <b-form-radio name="some-radios" value="D">Option D</b-form-radio>
                                <b-form-radio name="some-radios" value="E">Option E</b-form-radio>
                            </b-form-group>
                        </b-card-text>
                    </b-card>
                </b-card-group>
                <b-row>
                    <b-col cols="5" md="5">
                        <b-button class="mt-3" block variant="warning">
                            <b-form-checkbox
                            id="checkbox-1"
                            v-model="status"
                            name="checkbox-1"
                            value="accepted"
                            unchecked-value="not_accepted"
                            >
                            Ragu-Ragu
                            </b-form-checkbox>
                        </b-button>
                    </b-col>
                    <b-col id="nav-btn" cols="5 " md="5 offset-2">
                        <b-button class="mt-3 mb-4" block variant="primary">
                            <p>Selanjutnya </p>
                            <i class="fas fa-arrow-right"></i>
                        </b-button>
                    </b-col>
                </b-row>
            </b-col>

            <!-- nomor soal -->
            <b-col col md="3">
                <b-card-group deck>
                    <b-card
                        border-variant="secondary"
                        header="Nomor Soal"
                        header-bg-variant="white"
                        header-text-variant="black"
                        align="center"
                    >
                        <b-card-text>
                            <b-row>
                                {{ JumlahSoal() }}
                                <b-col cols="2" md="2 mr-1 mb-2" v-for="number in data" :key="number">
                                    <b-button id="number-question">
                                        <p>{{ number }}</p>
                                    </b-button>
                                </b-col>
                            </b-row>
                        </b-card-text>
                    </b-card>
                </b-card-group> 
                <b-button class="mt-3 mb-5" block variant="danger">Hentikan Ujian</b-button>
            </b-col>
        </b-row>
    </div>
</div>
</template>
<script>
export default {
    name: 'BabakGugur',
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