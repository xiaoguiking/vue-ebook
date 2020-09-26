<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
document.addEventListener("ODMContentLoaded", () => {
  const html = document.querySelector("html");
  let fontSize = window.innerHeight / 10;
  fontSize = fontSize > 50 ? 50 : fontSize;
  html.style.fontSize = fontSize + "px";
  console.log(html.style.fontSize);
});
</script>
<style lang="less" scoped>
// 引入全局global.less样式
@import "./assets/styles/global.less";
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
