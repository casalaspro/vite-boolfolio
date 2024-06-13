import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import AppWorks from './pages/AppPortfolio.vue';
import AppContact from './pages/AppContact.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: 'home',
      component: AppHome
    },
    {
      path: "/portfolio",
      name: 'portfolio',
      component: AppWorks
    },
    {
      path: '/contact',
      name: 'contact',
      component: AppContact
    }
  ]
});

export { router };