import Vue from 'vue';
import App from './App.vue';
import Vuelidate from 'vuelidate';

import './plugins/bootstrap-vue';
import './plugins/vue-js-modal';
import './plugins/vuelidade';
import 'animate.css';
import '../vue.config';

import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
