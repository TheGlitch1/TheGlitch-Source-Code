import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import $ from 'jquery'
import VueCarousel from 'vue-carousel';
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'bootstrap/dist/css/bootstrap.css'
import './assets/style.css'
import './assets/glitch-style.css'
// import "https://cdn.lordicon.com/lusqsztk.js"
import VueTour from 'vue-tour'

require('vue-tour/dist/vue-tour.css');

Vue.use(VueTour);
Vue.use(VueCarousel);
Vue.use(VueAxios, axios)

Vue.config.productionTip = false
    /*
    Global components 
    */
    // import HeaderComponent from '@/components/Header'
    // import IntroductionComponent from '@/components/Introduction'
    // import AboutComponent from '@/components/About'

// Vue.component('HeaderComponent ',Header )
// Vue.component('IntroductionComponent',Introduction)
// Vue.component('AboutComponent',About)



new Vue({
    render: h => h(App),
}).$mount('#app')