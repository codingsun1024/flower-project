<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="back">
        <img src="~@/assets/img/common/back.svg" alt />
      </div>
      <div class="title" slot="center">
        <div
          class="item"
          v-for="(item,index) in title"
          @click="addc(index)"
          :key="item"
          :class="{active:index===currentIndex}"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import navBar from "@/components/common/navbar/navbar";
export default {
  data() {
    return {
      title: ["商品", "参数", "评价", "推荐"],
      currentIndex: 0,
    };
  },
  components: {
    navBar,
  },
  methods: {
    addc(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    },
    back() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.title {
  display: flex;
}
.item {
  flex: 1;
  font-size: 14px;
}
.active {
  color: var(--color-high-text);
}
.back img {
  margin-top: 10px;
}
</style>