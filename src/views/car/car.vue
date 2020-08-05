<template>
  <div>
    <cart-nav></cart-nav>
    <scroll class="content" ref="scroll">
      <cart-list v-for="(itemInfo,index) in cartList" :key="index" :itemInfo="itemInfo"></cart-list>
    </scroll>
    <cart-bottom class="cart-bottom"></cart-bottom>
  </div>
</template>

<script>
import cartNav from "./carChildren/cartNav";
import cartList from "./carChildren/cartList";
import cartBottom from "./carChildren/cartBottom";
import scroll from "@/components/common/scroll/scroll";
import { mapGetters } from "vuex";
export default {
  components: {
    cartNav,
    cartList,
    cartBottom,
    scroll,
  },
  computed: {
    ...mapGetters(["cartList"]),
  },
  activated() {
    this.$refs.scroll.refresh();
  },
};
</script>

<style scoped>
.content {
  height: calc(100vh - 93px - 44px);
  overflow: hidden;
}
.cart-bottom {
  position: relative;
}
</style>