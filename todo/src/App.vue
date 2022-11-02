<template>
  <v-app>
    <Navbar />
    <!-- <Fetch /> -->
    <v-main>
      <router-link to="/">Todo List</router-link> |
      <router-link to="/about">About</router-link> |
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Navbar from "./components/Navbar.vue";
// import Fetch from "./components/Fetch.vue";

export default Vue.extend({
  name: "App",
  components: {
    Navbar,
    // Fetch,
  },

  data: () => ({
    //
  }),
  // created() {
  //   this.fetchTodo;
  // },
});
</script>
