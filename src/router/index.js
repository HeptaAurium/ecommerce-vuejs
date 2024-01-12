import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/home/Main.vue";

function guardMyroute(to, from, next) {
  var isAuthenticated = false;

  if (localStorage.getItem('CURRENT_USER'))
    isAuthenticated = true;
  else
    isAuthenticated = false;
  if (isAuthenticated) {
    next();
  }
  else {
    next('/login');
  }
}

const routes = [
  {
    path: "/",
    component: Home,
    meta: {
      title: "Homepage | _get.it.here_"
    }
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 };
  },
});

router.beforeEach((toRoute, fromRoute, next) => {
  let titleFromParams = toRoute.query?.pageTitle;

  if (titleFromParams) {
    window.document.title = `${titleFromParams}` + " | _get.it.here_"
  } else {
    window.document.title = toRoute.meta && toRoute.meta.title ? toRoute.meta.title : 'Home';
  }
  next();
})

export default router;
