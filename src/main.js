/* eslint-disable */
import Vue from 'vue';
import ShardsVue from 'shards-vue';

// Styles
import 'bootstrap/dist/css/bootstrap.css';
import '@/scss/shards-dashboards.scss';
import '@/assets/scss/date-range.scss';

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
import firebase from "firebase";
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
    apiKey: "AIzaSyDgDLzyCw7khH7N2CT444qYNS5Cjius19s",
    authDomain: "mage7-d24e8.firebaseapp.com",
    projectId: "mage7-d24e8",
    storageBucket: "mage7-d24e8.appspot.com",
    messagingSenderId: "586510507889",
    appId: "1:586510507889:web:0801724cf2e089ed8560d0"
};

firebase.initializeApp(firebaseConfig);

ShardsVue.install(Vue);

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