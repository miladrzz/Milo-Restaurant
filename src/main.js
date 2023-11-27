import { createApp } from "vue";
import App from "./App.vue";
import "./main.css";
import * as VueRouter from "vue-router";
import MenuPage from "./pages/MenuPage.vue";
import CartPage from "./pages/CartPage.vue";
import MenuDetailPage from "./pages/MenuDetailPage.vue";
import NotFoundPage from "./pages/NotFoundPage.vue";

createApp(App)
  .use(
    VueRouter.createRouter({
      history: VueRouter.createWebHistory(process.env.BASE_URL),
      routes: [
        {
          path: "/menu",
          component: MenuPage,
        },
        {
          path: "/cart",
          component: CartPage,
        },
        {
          path: "/menu/:menuId",
          component: MenuDetailPage,
        },
        {
          path: "/:pathMatch(.*)*",
          component: NotFoundPage,
        },
      ],
    })
  )
  .mount("#app");
