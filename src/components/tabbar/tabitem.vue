<template>
  <div>
    <div class="tab-bar-item" @click="itemClick">
      <slot v-if="!isActive" name="icon"></slot>
      <slot v-else name="icon-active"></slot>
      <div :style="isStyleActive">
        <slot name="text"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
    },
    activeStyle: {
      type: String,
      default: "coral",
    },
  },
  data() {
    return {};
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    isStyleActive() {
      return this.isActive ? { color: this.activeStyle } : {};
    },
  },
};
</script>

<style lang='stylus'>
.tab-bar-item {
  text-align: center;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-bottom: 3px;
}
</style>