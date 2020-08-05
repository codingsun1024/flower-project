<template>
  <div class="wrap">
    <div class="left">
      <check-button class="icon" :isChecked="checkAll" @click.native="clickAll"></check-button>
      <div>全选</div>
      <div>合计:{{totalPrice}}</div>
    </div>
    <div class="right">结算:({{calculate}})</div>
  </div>
</template>

<script>
import checkButton from "@/components/content/checkButton/checkButton";
export default {
  computed: {
    totalPrice() {
      return (
        "￥" +
        this.$store.state.productList
          .filter((item) => {
            return item.checked;
          })
          .reduce((pre, next) => {
            return pre + next.price * next.count;
          }, 0)
      );
    },
    calculate() {
      return this.$store.state.productList.filter((item) => item.checked)
        .length;
    },
    checkAll() {
      if (this.$store.state.productList.length === 0) return false;
      return !this.$store.state.productList.filter((item) => !item.checked)
        .length;
    },
  },
  methods: {
    clickAll() {
      if (this.checkAll) {
        this.$store.state.productList.forEach((item) => (item.checked = false));
      } else {
        this.$store.state.productList.forEach((item) => (item.checked = true));
      }
    },
  },
  components: {
    checkButton,
  },
};
</script>

<style scoped>
.wrap {
  display: flex;
  justify-content: space-between;
  height: 44px;
  align-items: center;
  background: #eee;
}
.left {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 200px;
}
.icon {
  margin: 0 10px;
}
.right {
  margin: 0 10px;
  padding: 13px;
  width: 90px;
  background: red;
  color: #fff;
  text-align: center;
}
</style>