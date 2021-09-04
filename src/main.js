/* eslint-disable */
import Vue from 'vue';
import ShardsVue from 'shards-vue';

// Styles
import 'bootstrap/dist/css/bootstrap.css';
import '@/scss/shards-dashboards.scss';
import '@/assets/scss/date-range.scss';
import '@/assets/css/scrollbar.css';

// Core
import App from './App.vue';
import router from './router';

// Layouts
import Default from '@/layouts/Default.vue';

import './registerServiceWorker'
import store from './store'
import VueCarousel from 'vue-carousel';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue2Editor from "vue2-editor";
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import AOS from 'aos'
import 'aos/dist/aos.css'
import vueSmoothScroll from 'vue2-smooth-scroll'
import HighchartsVue from 'highcharts-vue'
import VueParticles from 'vue-particles'
import VueTabs from 'vue-nav-tabs'
import 'vue-nav-tabs/themes/vue-tabs.css'
import Vuelidate from 'vuelidate'
import CKEditor from 'ckeditor4-vue'
import firebase from "firebase/app";
import 'core-js'
import {ValidationProvider} from 'vee-validate/dist/vee-validate.full.esm'


Vue.use(BootstrapVue);
Vue.use(Vue2Editor);
Vue.use(vueSmoothScroll);
Vue.use(HighchartsVue);
Vue.use(VueCarousel);
Vue.use(VueParticles)
Vue.use(VueTabs)
Vue.use(Vuelidate)
Vue.use(CKEditor);

const firebaseConfig = {
  apiKey: "AIzaSyAv0nZpXD2V_VIGawrMfnJzgcHzo1h3N98",
  authDomain: "mage-7.firebaseapp.com",
  projectId: "mage-7",
  storageBucket: "mage-7.appspot.com",
  messagingSenderId: "1072548170590",
  appId: "1:1072548170590:web:a6e52b5940b5e2e71b9dcf"
};

firebase.initializeApp(firebaseConfig);

ShardsVue.install(Vue);

Vue.mixin({
    data: function() {
        return {
            get endpointAPI() {
                // return "http://52.149.214.161/";
                // return "https://mage-its.com/";
                return process.env.VUE_APP_API_URL;
            },
        }
    }
});

Vue.component('default-layout', Default);
Vue.component('ValidationProvider', ValidationProvider);

Vue.config.productionTip = false;
Vue.prototype.$eventHub = new Vue();

new Vue({
    router,
    store,
    created() {
        AOS.init()
    },
    render: h => h(App),
}).$mount('#app');


if (process.env.NODE_ENV === 'production') {
console.log('%cSTOP!', 'font-size:10em;color:red;')
console.log(`%cThis is a browser feature intended for developers.
Do NOT copy and paste something here if you do not understand it.

You can learn more at:
https://en.wikipedia.org/wiki/Self-XSS`,
'font-size:2em')
}
