<template>
  <nav-bar class="nav">
    <div slot="center">购物车({{productListLength}})</div>
  </nav-bar>
</template>

<script>
import navBar from "@/components/common/navbar/navbar";
import cartList from "./cartList";
import { mapGetters } from "vuex";
export default {
  components: {
    navBar,
  },
  computed: {
    ...mapGetters(["productListLength"]),
  },
};
</script>

<style scoped>
.nav {
  color: #fff;
  background: var(--color-tint);
}
</style>