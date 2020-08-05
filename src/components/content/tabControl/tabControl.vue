<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      v-for="(item,index) in citys"
      :key="item"
      @click="itemActive(index)"
    >
      <span :class="{active:index===currentIndex}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    citys: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemActive(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    },
  },
};
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  background: #fff;
  line-height: 44px;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item span {
  padding-bottom: 5px;
}
.active {
  border-bottom: 2px solid var(--color-tint);
  color: var(--color-high-text);
}
</style>