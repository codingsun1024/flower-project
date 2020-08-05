<template>
  <swiper class="title">
    <swiper-item class="swipreImg" v-for="item in topImages" :key="item">
      <img :src="item" alt />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/swiper";
export default {
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>

<style scoped>
.title {
  height: 300px;
  overflow: hidden;
}
</style>