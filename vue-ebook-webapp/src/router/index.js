import Vue from "vue";
import VueRouter from "vue-router";
import eBook from "../views/ebook/index.vue";
// import EbookReader from "../components/ebook/EbookReader.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
  {
    path: "/",
    name: "ebook",
    redirect: "/ebook"
  },
  {
    path: "/ebook",
    component: eBook,
    children: [
      {
        path: ":fileName",
        // component: EbookReader,
        component: () => import("../components/ebook/EbookReader.vue")
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
