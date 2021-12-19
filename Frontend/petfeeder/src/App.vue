<template>
  <div>
    <!-- <login></login>
    <register></register>
    <the-app></the-app> -->
    <router-view />
  </div>
</template>

<script>
import Login from "./components/layout/Login.vue";
import Register from "./components/layout/Register.vue";
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
