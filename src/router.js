import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import AppWorks from './pages/AppPortfolio.vue';
import AppContact from './pages/AppContact.vue';
import App404 from './pages/App404.vue';

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
    },
    {
      path: '/not-found',
      name: 'not-found',
      component: App404
    }
  ]
});

export { router };