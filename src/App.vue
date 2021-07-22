<template>
  <div id="app">
    <Header />
    <Menu />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./views/Header.vue";
import Menu from "./views/Menu.vue";

export default {
  name: "App",
  components: {
    Header,
    Menu,
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
}
#app {
  display: flex;
  flex-direction: column;
}
</style>
