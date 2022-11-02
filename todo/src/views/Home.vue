<template>
  <div class="home">
    <Fetch />
    <h1>Home Page</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Fetch from "../components/Fetch.vue";

export default Vue.extend({
  name: "Home",
  components: {
    Fetch,
  },
});
</script>
