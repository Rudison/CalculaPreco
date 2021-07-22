import Vue from "vue";
import Router from "vue-router";
import ProdsContaGrafica from "./components/ProdsContaGrafica";
import ProdsSubstitutos from "./components/ProdsSubstitutos";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      name: "Substituto",
      path: "/substituto",
      component: ProdsSubstitutos,
    },
    {
      name: "ContaGrafica",
      path: "/contaGrafica",
      component: ProdsContaGrafica,
    },
  ],
});
