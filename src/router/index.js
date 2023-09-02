import { createRouter, createWebHistory } from 'vue-router'
import LayoutView from '@/layouts/LayoutView.vue';
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    component: LayoutView,
    children: [
      {
        path: '',
        component: HomeView,
        name: 'Home',
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
