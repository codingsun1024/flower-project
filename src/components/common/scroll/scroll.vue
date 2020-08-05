<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      props: {
        type: Number,
        default: false,
      },
    },
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      click: true,
    });
    this.scroll.on("scroll", (position) => {
      this.$emit("scroll", position);
    });
    this.scroll.on("pullingUp", () => {
      this.$emit("loadMore");
      this.scroll.finishPullUp();
    });
  },
  methods: {
    scrollTop(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(0, 0, time);
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    scrollTo(x, y, delay) {
      this.scroll.scrollTo(x, y, delay);
    },
  },
};
</script>

<style scoped>
</style>