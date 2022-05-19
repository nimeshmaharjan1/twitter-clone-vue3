import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import UserProfile from "../views/UserProfile.vue";
import Home from "../views/Home.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/user/:userId",
    name: "User-Profile",
    component: UserProfile,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
