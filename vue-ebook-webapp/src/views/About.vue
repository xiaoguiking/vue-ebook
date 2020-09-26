<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2 class="test">ABCD</h2>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
// @import "./assets/styles/global.less";
@import "../assets/styles/global.less";
.about {
  h1 {
    color: red;
  }
  .test {
    font-family: "Days One";
    color: orange;
    // font-size: 1rem;
    // font-size: 1rem;
    // font-size: px2rem(20);
    .rem(font-size, 80);
  }
}
</style>
