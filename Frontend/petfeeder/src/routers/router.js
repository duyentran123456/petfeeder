import Vue from "vue";
import VueRouter from "vue-router";

//component
import Login from "../components/layout/Login.vue";
import Register from "../components/layout/Register.vue";
import TheApp from "../components/layout/TheApp.vue";
import Dashboard from "../views/page/Dashboard.vue";
import History from "../views/page/History.vue";
import ListDevice from "../views/page/ListDevice.vue";
import ManageUser from "../views/page/ManageUser.vue";
import SettingFeed from "../views/page/SettingFeed.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/app/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  { path: "/login", name: "Login", component: Login },
  { path: "/register", name: "Register", component: Register },
  {
    path: "/app",
    redirect: "/app/dashboard",
    name: "TheApp",
    component: TheApp,
    meta: { anonymous: true },
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "history",
        name: "History",
        component: History,
      },
      {
        path: "list-device",
        name: "ListDevice",
        component: ListDevice,
      },
      {
        path: "manage-user",
        name: "ManageUser",
        component: ManageUser,
      },
      {
        path: "setting-feed",
        name: "SettingFeed",
        component: SettingFeed,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
