<template>
  <div>
    <!-- <login></login>
    <register></register>
    <the-app></the-app> -->
    <router-view />
  </div>
</template>

<script>
import Login from "./views/page/Login.vue";
import Register from "./views/page/Register.vue";
import TheApp from "./components/layout/TheApp.vue";

export default {
  name: "App",
  components: {
    // Login,
    // Register,
    // TheApp,
  },
};
</script>

<style>
</style>
