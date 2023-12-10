import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactView from "../views/ContactView.vue";
import PortfolioView from "../views/PortfolioView.vue";
import error from '../components/404.vue'; 



const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: error },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: PortfolioView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/AboutView.vue");
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.afterEach(() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  });
  
export default router;
