import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

//auth
import UserSignUp from './pages/auth/UserSignUp.vue'
import userLogin from './pages/auth/userLogin.vue'

//dashboard
import UserDashboard from './pages/dashboard/UserDashboard.vue'

//public
import SingleProductPage from './pages/public/SingleProductPage.vue'

//css
import './global.css'

const routes = [

  //auth
  {
    path: '/',
    component: userLogin
  },
  {
    path: '/signup',
    component: UserSignUp
  },

  //dashboard
  {
    path: '/userdashboard',
    component: UserDashboard
  },

  //public
  {
    path: '/productPage',
    component: SingleProductPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
