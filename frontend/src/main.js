import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

//auth
import UserSignUp from './pages/auth/UserSignUp.vue'
import userLogin from './pages/auth/userLogin.vue'
import ServiceProviderSignUp from './pages/auth/ServiceProviderSignUp.vue'
import ServiceProviderLogin from './pages/auth/ServiceProviderLogin.vue'

//dashboard
import UserDashboard from './pages/dashboard/UserDashboard.vue'
import ServiceProviderDashboard from './pages/dashboard/ServiceProviderDashboard.vue'

//public
import SingleProductPage from './pages/public/SingleProductPage.vue'
import Reviews from './pages/public/Reviews.vue'
import Hotels from './pages/public/Hotels.vue'
import AboutUs from './pages/public/AboutUs.vue'

//admin
import adminLogin from './pages/admin/adminLogin.vue'
import adminDashboard from './pages/admin/adminDashboard.vue'

//css
import './global.css'

const routes = [

  //auth
  {
    path: '/',
    component: userLogin
  },
  {
    path: '/usersignup',
    component: UserSignUp
  },
  {
    path: '/spsignup',
    component: ServiceProviderSignUp
  },
  {
    path: '/splogin',
    component: ServiceProviderLogin
  },

  //dashboard
  {
    path: '/userdashboard',
    component: UserDashboard
  },
  {
    path: '/spdashboard',
    component: ServiceProviderDashboard
  },

  //admin
  {
    path: '/adminlogin',
    component: adminLogin
  },
  {
    path: '/adminDashboard',
    component: adminDashboard
  },

  //public
  {
    path: '/productPage',
    component: SingleProductPage
  },
  {
    path: '/reviews',
    component: Reviews
  
  },
  {
    path: '/hotels',
    component: Hotels
  },
  {
    path: '/aboutus',
    component: AboutUs
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
