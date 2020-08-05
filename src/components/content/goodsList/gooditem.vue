<template>
  <div class="item" @click="itemClick">
    <img :src="showImg" alt @load="imgLoad" />
    <div class="title">
      <p>{{item.title}}</p>
      <span class="price">{{item.price}}</span>
      <span class="collect">{{item.cfav}}</span>
    </div>
  </div>
</template>

<script>
import SwiperItemVue from "../../common/swiper/SwiperItem.vue";
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    showImg() {
      return this.item.image || this.item.show.img;
    },
  },
  methods: {
    imgLoad() {
      this.$bus.$emit("imgLoad");
    },
    itemClick() {
      this.$router.push("/detail/" + this.item.iid);
    },
  },
};
</script>

<style scoped>
.item {
  width: 50%;
  padding: 0 10px;
}
.item img {
  border-radius: 5px;
  width: 100%;
}
.title {
  font-size: 12px;
  text-align: center;
  margin-bottom: 10px;
  vertical-align: text-bottom;
}
.title p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 5px;
}
.price {
  color: var(--color-high-text);
  padding-right: 5px;
}

.collect::before {
  content: "";
  display: inline-block;
  vertical-align: bottom;
  background: url("~@/assets/img/common/collect.svg");
  width: 13px;
  height: 13px;
  background-size: cover;
  vertical-align: text-top;
}
</style>