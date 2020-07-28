<template>
  <tab-bar>
    <tab-Item path="/home">
      <img slot="icon" src="@/assets/img/tabbar/home.svg" alt />
      <img slot="icon-active" src="@/assets/img/tabbar/home_active.svg" alt />
      <div slot="text" class="tab-bar-text">首页</div>
    </tab-Item>
    <tab-Item path="/category">
      <img slot="icon" src="@/assets/img/tabbar/category.svg" alt />
      <img slot="icon-active" src="@/assets/img/tabbar/category_active.svg" alt />
      <div slot="text" class="tab-bar-text">分类</div>
    </tab-Item>
    <tab-Item path="/car">
      <img slot="icon" src="@/assets/img/tabbar/shopcart.svg" alt />
      <img slot="icon-active" src="@/assets/img/tabbar/shopcart_active.svg" alt />
      <div slot="text" class="tab-bar-text">首页</div>
    </tab-Item>
    <tab-Item path="/profile">
      <img slot="icon" src="@/assets/img/tabbar/profile.svg" alt />
      <img slot="icon-active" src="@/assets/img/tabbar/profile_active.svg" alt />

      <div slot="text" class="tab-bar-text">首页</div>
    </tab-Item>
  </tab-bar>
</template>

<script>
import tabBar from "@/components/common/tabbar/tabbar";
import tabItem from  "@/components/common/tabbar/tabitem";
export default {
  components: {
    tabBar,
    tabItem,
  },
};
</script>

<style>
</style>