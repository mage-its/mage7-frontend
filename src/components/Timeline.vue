<template>
    <div class="mt-5">
        <h2>Timeline</h2>
        <div class="timeline">
            <div v-for="event in timeline" :key="event._id" class="row no-gutters justify-content-end justify-content-md-around align-items-start  timeline-nodes">
                <div class="col-10 col-md-5 order-3 order-md-1 timeline-content">
                    <h3 class="text-light">{{ event.name }}</h3>
                    <p>{{ event.time }}</p>
                </div>
                <div class="col-2 col-sm-1 px-md-3 order-2 timeline-image text-md-center">
                    <img src="@/assets/alarm.png"/>
                </div>
                <div class="col-10 col-md-5 order-1 order-md-3 py-3 timeline-date">
                
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
      return {
        timeline: []
      }
  },
  methods : {
    getDay(date) {
        date.setHours(date.getHours() - 7);

        var tahun = date.getFullYear();
        var month = date.getMonth();
        var day = date.getDate();

        switch(month) {
            case 0: month = "Januari"; break;
            case 1: month = "Februari"; break;
            case 2: month = "Maret"; break;
            case 3: month = "April"; break;
            case 4: month = "Mei"; break;
            case 5: month = "Juni"; break;
            case 6: month = "Juli"; break;
            case 7: month = "Agustus"; break;
            case 8: month = "September"; break;
            case 9: month = "Oktober"; break;
            case 10: month = "November"; break;
            case 11: month = "Desember"; break;
        }

        day = date + " " + month + " " + tahun;
    
        return day;
    },
    getTime(date) {
        date.setHours(date.getHours() - 7);

        var hour = date.getHours();
        var minute = date.getMinutes();

        if(hour<10)
            hour = "0"+hour;

        if(minute<10)
            minute = "0"+minute;

        var time = hour + ":" + minute;
    
        return time;
    }
    },
    mounted() {
    axios
        .get('http://anavaugm.com:3000/api/v1/session/all')
        .then(res => {
            res.data.data.forEach((event)=>{
                this.timeline.push({
                    name: 'Sesi ' + event.number,
                    time: this.getTime(new Date(event.start)) + " - " + this.getTime(new Date(event.end)),
                })
            })
        })
        .catch(error => console.log(error))
    }
}
</script>

<style scoped>

.timeline {
    padding: 50px 0;
    position: relative;
}
.timeline-nodes {
        padding-bottom: 25px;
        position: relative;
    }
.timeline-nodes:nth-child(even) {
    flex-direction: row-reverse;
}
.timeline h3, .timeline p {
    padding: 5px 15px;
} 
.timeline h3{
    font-weight: lighter;
    background: rgb(50,50, 50);
}
.timeline p, .timeline time {
    color: rgb(50,50, 50)
}
.timeline::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    border-left: 2px dashed rgb(50,50, 50);
    height: 100%;
    z-index: 1;
    transform: translateX(-50%);
}
.timeline-content {
    border: 1px solid rgb(50,50, 50);
    position: relative;
    border-radius: 0 0 10px 10px;
    box-shadow: 0px 3px 25px 0px rgba(10, 55, 90, 0.2)
}
.timeline-nodes:nth-child(odd) h3,
.timeline-nodes:nth-child(odd) p {
    text-align: center;
}
.timeline-nodes:nth-child(odd) .timeline-date {
    text-align: center;
}
 
.timeline-nodes:nth-child(even) .timeline-date {
    text-align: center;
}
.timeline-nodes:nth-child(odd) .timeline-content::after {
    content: "";
    position: absolute;
    top: 5%;
    left: 100%;
    width: 0;
    border-left: 10px solid rgb(50,50, 50);
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
}
.timeline-nodes:nth-child(even) .timeline-content::after {
    content: "";
    position: absolute;
    top: 5%;
    right: 100%;
    width: 0;
    border-right: 10px solid rgb(50,50, 50);
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
}
.timeline-image {
    position: relative;
    z-index: 100;
}
.timeline-image::before {
    content: "";
    width: 80px;
    height: 80px;
    border: 2px dashed rgb(50,50, 50);
    border-radius: 50%;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: #fff;
    z-index: 1;
}
.timeline-image img {
    position: relative;
    z-index: 100;
    width: 30px;
    height: 30px;
}
/*small device style*/

@media (max-width: 767px) {
    .timeline-nodes:nth-child(odd) h3,
    .timeline-nodes:nth-child(odd) p {
    text-align: center
}
.timeline-nodes:nth-child(even) {
    flex-direction: row;
}
.timeline::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 4%;
    width: 0;
    border-left: 2px dashed rgb(50,50, 50);
    height: 100%;
    z-index: 1;
    transform: translateX(-50%);
}
.timeline h3 {
    font-size: 1.7rem;
}
.timeline p {
    font-size: 14px;
}
.timeline-image {
    position: absolute;
    left: 0%;
    top: 60px;
    /*transform: translateX(-50%;);*/
}
.timeline-nodes:nth-child(odd) .timeline-content::after {
    content: "";
    position: absolute;
    top: 5%;
    left: auto;
    right: 100%;
    width: 0;
    border-left: 0;
    border-right: 10px solid rgb(50,50, 50);
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
}
.timeline-nodes:nth-child(even) .timeline-content::after {
    content: "";
    position: absolute;
    top: 5%;
    right: 100%;
    width: 0;
    border-right: 10px solid rgb(50,50, 50);
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
}
.timeline-nodes:nth-child(even) .timeline-date {
    text-align: center;
}
.timeline-image::before {
    width: 65px;
    height: 65px;
}
}

/*extra small device style */
@media (max-width: 575px) {
    .timeline::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 3%;
}
.timeline-image {
    position: absolute;
    left: -5%;
    }
.timeline-image::before {
    width: 60px;
    height: 60px;
}
}

</style>
