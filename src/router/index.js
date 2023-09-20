import { createRouter, createWebHistory } from 'vue-router'
import LayoutView from '@/layouts/LayoutView.vue';
import HomeView from '../views/HomeView.vue'


import AboutView from '../views/AboutView.vue'
import MyResume from '../views/MyResume.vue'


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
        path: '/about',
        component: AboutView,
        name: 'about',
      }
     
     
      // Add more routes here
    ],
   
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
