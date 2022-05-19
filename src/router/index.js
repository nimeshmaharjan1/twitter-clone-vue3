import { createRouter, createWebHistory } from "vue-router";
import UserProfile from "../views/UserProfile.vue";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";
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
  {
    path: "/admin",
    name: "Admin ",
    component: Admin,
    meta: {
      requiresAdmin: true,
    },
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach(async (to, from, next) => {
  const isAdmin = false;
  //* If the meta has requiresAdmin key for that component
  const requiresAdmin = to.matched.some((record) => record.meta.requiresAdmin);
  //* If the component requires admin but the user is not an admin
  if (requiresAdmin && !isAdmin) {
    next({ name: "Home" });
  } else next();
});
export default router;
