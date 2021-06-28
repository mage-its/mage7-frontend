<template>
    <div v-if="show">
        <b-row>
            <b-col lg=2></b-col>
            <b-col lg=8>
                <b-card title="Pengumuman Dapat Dilihat dalam">
                    <b-row class="h2 mt-4">
                        <b-col>{{ displayDays }}</b-col> :
                        <b-col>{{ displayHours }}</b-col> :
                        <b-col>{{ displayMinutes }}</b-col> :
                        <b-col>{{ displaySeconds }}</b-col> 
                    </b-row>
                    <b-row>
                        <b-col>Hari</b-col>
                        <b-col>Jam</b-col>
                        <b-col>Menit</b-col>
                        <b-col>Detik</b-col>
                    </b-row>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show : true,
            displayDays : 0,
            displayHours : 0,
            displayMinutes : 0,
            displaySeconds : 0
        }
    },
    props: ['year', 'month', 'date', 'hour', 'minute'],
    computed: {
        _seconds : ()=> 1000,
        _minutes() {
            return this._seconds * 60;
        },
        _hours() {
            return this._minutes * 60;
        },
        _days() {
            return this._hours * 24;
        },
        end() {
            return new Date(
                this.year,
                this.month - 1, 
                this.date,
                this.hour,
                this.minute
            );
            
        }
    },
    methods: {
        showRemaining() {
            const timer = setInterval(() => {

                // ambil data sekarang
                const now = new Date();
                const distance = this.end.getTime() - now.getTime();

                // console.log(now.getTime());
                if(distance < 0) {
                    clearInterval(timer);
                    this.show = false;
                    return;
                }
                const days = Math.floor(distance / this._days);
                const hours = Math.floor((distance % this._days) / this._hours);
                const minutes = Math.floor((distance % this._hours) / this._minutes);
                const seconds = Math.floor((distance % this._minutes) / this._seconds);

                // console.log(days);
                this.displaySeconds = seconds < 10 ? "0" + seconds : seconds;
                this.displayMinutes = minutes < 10 ? "0" + minutes : minutes;
                this.displayHours = hours < 10 ? "0" + hours : hours;
                this.displayDays = days < 10 ? "0" + days : days;

            }, 1000);
        }
    },
    mounted() {
        this.showRemaining();
    }
}
</script>

<style scoped>

</style>>
