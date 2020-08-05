<template>
  <div id="app">
    <main-tab class="footer"></main-tab>
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
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
.footer {
  z-index: 9;
}
</style>

