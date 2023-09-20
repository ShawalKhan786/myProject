import { createRouter, createWebHistory } from 'vue-router'
import LayoutView from '@/layouts/LayoutView.vue';
import HomeView from '../views/HomeView.vue'

import ContactView from '../views/ContactView.vue'
import AboutView from '../views/AboutView.vue'
import MyResume from '../views/MyResume.vue'
import BlogView from '../views/BlogView.vue'

const routes = [
  {
    path: '/',
    component: LayoutView,
    children: [
      {
        path: '/',
        component: HomeView,
        name: 'home',
      },
      {
        path: '/webresume',
        component: MyResume,
        name: 'resume',
      },
      
      {
        path: '/contact',
        component: ContactView,
        name: 'contact',
      },
      {
        path: '/about',
        component: AboutView,
        name: 'about',
      },
      {
        path: '/blog',
        component: BlogView,
        name: 'blog',
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
