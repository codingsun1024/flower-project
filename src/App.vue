<template>
  <div id="app">
    <main-tab></main-tab>
    <router-view></router-view>
  </div>
</template>
<script>
import mainTab from "@/components/content/maintab.vue";
import axios from "axios";
export default {
  components: {
    mainTab,
  },
};
</script>
<style >
@import "./assets/css/base.css";
</style>

