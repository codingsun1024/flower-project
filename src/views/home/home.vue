<template>
  <div>
    <nav-bar class="navbar">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      v-show="isShowTab"
      :citys="['流行','新款','精选']"
      @tabClick="tabClick"
      ref="tabControl"
      class="tab"
    ></tab-control>
    <scroll
      ref="scroll"
      @scroll="getPosition"
      class="content"
      :probe-type="3"
      :pull-up-load="true"
      @loadMore="loadMore"
    >
      <home-swiper class="swiper" :banners="banners" @imageLoad="imageLoad"></home-swiper>
      <home-recommend :recommend="recommend"></home-recommend>
      <home-feature></home-feature>
      <tab-control :citys="['流行','新款','精选']" @tabClick="tabClick" ref="controlTab"></tab-control>
      <good-list :good="currentList"></good-list>
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import navBar from "@/components/common/navbar/navbar";
import tabControl from "@/components/content/tabControl/tabControl";
import goodList from "@/components/content/goodsList/goodList";
import scroll from "@/components/common/scroll/scroll";

import HomeSwiper from "./homeChildren/homeSwiper";
import HomeRecommend from "./homeChildren/homeRecommend";
import HomeFeature from "./homeChildren/homeFeature";

import { getHomeMultiData, getGoodList } from "@/network/home";
import { debounce } from "@/common/utiles";
import { itemListenerMixin, back } from "@/common/mixin.js";
export default {
  data() {
    return {
      banners: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowTab: false,
      controlTab: 0,
    };
  },
  mixins: [itemListenerMixin, back],
  computed: {
    currentList() {
      return this.goods[this.currentType].list;
    },
  },

  created() {
    this.getHomeMultiData();
    this.getGoodList("pop");
    this.getGoodList("new");
    this.getGoodList("sell");
  },

  mounted() {
    let refresh = debounce(this.$refs.scroll.refresh, 200);
    this.$bus.$on("imgLoad", () => {
      refresh();
    });
  },
  activated() {
    this.$refs.scroll.refresh();
  },
  update() {
    let refresh = debounce(this.$refs.scroll.refresh, 200);
    this.$bus.$on("imgLoad", () => {
      refresh();
    });
  },
  methods: {
    //offsetTop
    imageLoad() {
      this.controlTab = this.$refs.controlTab.$el.offsetTop;
    },
    //loadMORE
    loadMore() {
      this.getGoodList(this.currentType);
    },
    //方法
    getPosition(position) {
      this.isShowTab = -position.y > this.controlTab;
      this.isShowBackTop = -position.y > 300;
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
      }
      this.$refs.tabControl.currentIndex = index;
      this.$refs.controlTab.currentIndex = index;
    },
    // backTop() {
    //   this.$refs.scroll.scrollTop(0, 0);
    // },
    //请求
    pullingUp() {
      this.getGoodList(this.currentType);
    },
    getHomeMultiData() {
      getHomeMultiData().then((res) => {
        this.banners = res.banner.list;
        this.recommend = res.recommend.list;
      });
    },
    getGoodList(type) {
      let page = this.goods[type].page + 1;
      getGoodList(type, page).then((res) => {
        this.goods[type].list.push(...res.list);
        this.goods[type].page += 1;
        this.$refs.scroll.scroll.finishPullUp();
      });
    },
  },
  components: {
    navBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    tabControl,
    goodList,
    scroll,
  },
};
</script>

<style scoped>
.navbar {
  position: fixed;
  height: 44px;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--color-tint);
  color: #fff;
  z-index: 99;
}

.content {
  /* height: calc(100vh - 93px); */
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.tab {
  position: relative;
  margin-top: 44px;
  background: #fff;
  z-index: 10;
}
</style>