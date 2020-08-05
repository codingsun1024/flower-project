<template>
  <div class="goodlist">
    <good-item v-for="item in good" :key="item.image" :item="item"></good-item>
  </div>
</template>

<script>
import goodItem from "./gooditem";
export default {
  props: {
    good: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    goodItem,
  },
};
</script>

<style scoped>
.goodlist {
  display: flex;
  flex-wrap: wrap;
}
</style>