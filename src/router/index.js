import { createRouter, createWebHistory } from 'vue-router'
import LayoutView from '@/layouts/LayoutView.vue';
import Home from '../views/Home.vue'
import MyResume from '../views/MyResume.vue'

import AboutView from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    component: LayoutView,
    children: [
      {
        path: 'home',
        component: Home,
        name: 'home',
      },
      {
        path: '/',
        component: MyResume,
        name: 'resume',
      },
      {
        path: '/about',
        component: AboutView,
        name: 'about',
      },
     
      // Add more routes here
    ],
   
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
