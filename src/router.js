import Vue from 'vue';
import Router from 'vue-router';
import ProdsContaGrafica from './components/ProdsContaGrafica.vue';
import ProdsSubstitutos from './components/ProdsSubstitutos.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Substituto',
      path: '/substituto',
      component: ProdsSubstitutos,
    },
    {
      name: 'ContaGrafica',
      path: '/contaGrafica',
      component: ProdsContaGrafica,
    },
  ],
});
