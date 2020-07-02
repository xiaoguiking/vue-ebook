<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    // ...mapGetters(["test"])
    ...mapGetters(["test"])
  },
  mounted() {
    this.$store.dispatch("setTest", 4).then(() => {
      // 直接获取
      // console.log(this.$store.state.book.test);
      // 通过getters获取
      console.log(this.test);
    });
  }
};
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
