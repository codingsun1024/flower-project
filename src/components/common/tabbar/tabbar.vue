<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>

export default {
};
</script>

<style lang='stylus'>
.tabbar {
  display: flex;
  background: #f6f6f6;
  height: 49px;
  justify-content: space-around;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
}
</style>