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
        path: '/Home',
        component: Home,
        name: 'Home',
      },
      {
        path: '/Resume',
        component: MyResume,
        name: 'MyResume',
      },
      {
        path: '/about',
        component: AboutView,
        name: 'About',
      },
     
      // Add more routes here
    ],
   
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
