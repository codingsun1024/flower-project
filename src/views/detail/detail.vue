<template>
  <div class="container">
    <detail-item class="nav" @tabClick="tabClick" ref="nav"></detail-item>
    <scroll class="content" ref="scroll" @scroll="scroll" :probe-type="3">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo" @imgLoad="imgLoad"></detail-goods-info>
      <detail-params-info :paramInfo="paramInfo" ref="params"></detail-params-info>
      <detail-commend-info :commentInfo="commentInfo" ref="recommend"></detail-commend-info>
      <good-list :good="recommend" ref="list"></good-list>
    </scroll>

    <detail-bottom @addCart="addToCart"></detail-bottom>
    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import detailItem from "@/views/detail/detailChild/detailNavBar";
import detailSwiper from "@/views/detail/detailChild/detailSwiper";
import detailBaseInfo from "@/views/detail/detailChild/detailBaseInfo";
import detailGoodsInfo from "@/views/detail/detailChild/detailGoodsInfo";
import detailShopInfo from "@/views/detail/detailChild/detailShopInfo";
import detailParamsInfo from "@/views/detail/detailChild/detailParamsInfo";
import detailCommendInfo from "@/views/detail/detailChild/detailCommendInfo";
import detailBottom from "@/views/detail/detailChild/detailBottom";
import goodList from "@/components/content/goodsList/goodList";

import scroll from "@/components/common/scroll/scroll";

import { itemListenerMixin, back } from "@/common/mixin.js";
import { debounce } from "@/common/utiles";

import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "@/network/detail";
import axios from "axios";
import { mapActions } from "vuex";
export default {
  name: "detail",
  data() {
    return {
      iid: "",
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommend: [],
      scrollPosition: [],
      debounceScroll: null,
      currentIndex: 0,
    };
  },
  methods: {
    //addCart
    ...mapActions(['addCart']),
    addToCart() {
      let product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;

      // this.$store.dispatch("addCart", product).then((res) => {
      //   alert(res);
      // });
      this.addCart(product).then((res) => {
        alert(res);
      });
    },
    //scrollTo
    tabClick(index) {
      this.$refs.scroll.scrollTo(0, -this.scrollPosition[index], 200);
    },
    imgLoad() {
      this.$refs.scroll.refresh();
      this.debounceScroll();
    },
    //导航联动
    scroll(position) {
      let y = -position.y;
      let length = this.scrollPosition.length;
      for (let i = 0; i < length - 1; i++) {
        if (
          // (this.currentIndex !== i &&
          //   i < length - 1 &&
          //   y >= this.scrollPosition[i] &&
          //   y < this.scrollPosition[i + 1]) ||
          // (i === length - 1 && y > this.scrollPosition[i])
          this.currentIndex !== i &&
          y >= this.scrollPosition[i] &&
          y < this.scrollPosition[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
      this.isShowBackTop = -position.y > 300;
    },
  },
  mixins: [itemListenerMixin, back],
  components: {
    detailItem,
    detailSwiper,
    detailBaseInfo,
    detailGoodsInfo,
    scroll,
    detailShopInfo,
    detailParamsInfo,
    detailCommendInfo,
    detailBottom,
    goodList,
  },
  created() {
    this.iid = this.$route.params.iid;
    axios
      .get("http://123.207.32.32:8000/api/x6/detail?iid=" + this.iid)
      .then((res) => {
        let result = res.data.result;
        this.topImages = res.data.result.itemInfo.topImages;
        this.goods = new Goods(
          result.itemInfo,
          result.columns,
          result.shopInfo.services
        );
        this.shop = new Shop(result.shopInfo);
        this.detailInfo = result.detailInfo;
        this.paramInfo = new GoodsParam(
          result.itemParams.info,
          result.itemParams.rule
        );
        if (result.rate.cRate !== 0) {
          this.commentInfo = result.rate.list[0];
        }
      });
    getRecommend().then((res) => {
      this.recommend = res.list;
    });
    this.debounceScroll = debounce(() => {
      this.scrollPosition = [];
      this.scrollPosition.push(0);
      this.scrollPosition.push(this.$refs.params.$el.offsetTop);
      this.scrollPosition.push(this.$refs.recommend.$el.offsetTop);
      this.scrollPosition.push(this.$refs.list.$el.offsetTop);
      this.scrollPosition.push(Number.MAX_VALUE);
    });
  },
};
</script>

<style scoped>
.container {
  position: relative;
  z-index: 10;
  background: #fff;
}
.nav {
  position: relative;
  z-index: 10;
  background: #fff;
}
.content {
  height: calc(100vh - 93px);
}
</style>