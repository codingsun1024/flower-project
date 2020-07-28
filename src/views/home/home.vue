<template>
  <div>
    <nav-bar class="navbar">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommend="recommend"></home-recommend>
  </div>
</template>

<script>
import navBar from "@/components/common/navbar/navbar";
import HomeSwiper from "./homeChildren/homeSwiper";
import HomeRecommend from "./homeChildren/homeRecommend";

import { getHomeMultiData } from "@/network/home";
export default {
  data() {
    return {
      banners: [],
      recommend: [],
    };
  },
  created() {
    getHomeMultiData().then((res) => {
      this.banners = res.banner.list;
      this.recommend = res.recommend.list;
    });
  },
  components: {
    navBar,
    HomeSwiper,
    HomeRecommend,
  },
};
</script>

<style scoped>
.navbar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>