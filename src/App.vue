<template>
  <div id="app">
    <main-tab></main-tab>
    <router-view></router-view>
  </div>
</template>
<script>
import mainTab from "@/components/tabbar/maintab.vue";

export default {
  components: {
    mainTab,
  },
};
</script>
<style lang="stylus">
* {
  margin: 0;
  padding: 0;
}
</style>
