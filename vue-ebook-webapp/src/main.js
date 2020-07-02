import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import less from "less";
import "./assets/fonts/daysOne.css"; //引入字体图标第二种方式
import "./assets/styles/global.less";

Vue.config.productionTip = false;

Vue.use(less);
new Vue({
  router,
  store,
  // eslint-disable-next-line
  render: (h) => h(App),
}).$mount("#app");
