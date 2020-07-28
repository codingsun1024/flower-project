<template>
  <div class="home-recommend">
    <div class="recommend" v-for="item in recommend" :key="item.link">
      <a :href="item.link">
        <img :src="item.image" alt />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.home-recommend {
  display: flex;
  width: 100%;
  text-align: center;
  padding: 5px;
  border-bottom: 10px solid #eee;
}
.recommend {
  flex: 1;
}
.recommend img {
  width: 70px;
  height: 65px;
  border-radius: 100%;
}
</style>