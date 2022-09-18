import { createRouter, 
         createWebHistory } 
  from 'vue-router';

import HomeView 
  from '../views/HomeView.vue';


const routes = 
[
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/about-me',
    name: 'about me',
    component: () => import('../views/AboutUsView.vue')
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: () => import('../views/GalleryView.vue')
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue' )
  },
  {
    path: '/logout',
    name: 'logout',
    component: () => import( '../views/LogoutView.vue')
  },

  {
    path: '/settings',
    name: 'settings',
    component: () => import('../views/SettingsView.vue')
  },

  {
    path: '/subscription',
    name: 'subscription',
    component: () => import( '../views/SubscriptionView.vue')
  }
]

const router = createRouter(
  {
    history: createWebHistory(process.env.BASE_URL),
    routes
  }
);

export default router
