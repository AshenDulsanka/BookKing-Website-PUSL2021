import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import adminDashboard from './pages/adminDashboard.vue'
import './global.css'

const routes = [
  {
    path: '/',
    name: 'adminDashboard',
    component: adminDashboard
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((toRoute, fromRoute, next) => {
  const documentTitle =
    toRoute?.meta && toRoute?.meta?.title ? toRoute?.meta?.title : 'Admin Dashboard'
  window.document.title = documentTitle
  if (toRoute?.meta?.description) {
    addMetaTag(toRoute?.meta?.description)
  }
  next()
})

const addMetaTag = (value) => {
  let element = document.querySelector(`meta[name='description']`)

  if (element) {
    element.setAttribute('content', value)
  } else {
    element = `<meta name="description" content="${value}" />`
    document.head.insertAdjacentHTML('beforeend', element)
  }
}

createApp(App).use(router).mount('#app')

export default router

/* =============== SHOW MENU =============== */
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

/* Menu show */
navToggle.addEventListener('click', () => {
  navMenu.classList.add('show-menu')
})

/* Menu hidden */
navClose.addEventListener('click', () => {
  navMenu.classList.remove('show-menu')
})

/* =============== SEARCH =============== */
const search = document.getElementById('search')
const searchBtn = document.getElementById('search-btn')
const searchClose = document.getElementById('search-close')

/* Search show */
searchBtn.addEventListener('click', () => {
  search.classList.add('show-search')
})

/* Search hidden */
searchClose.addEventListener('click', () => {
  search.classList.remove('show-search')
})

/* =============== LOGIN =============== */
const login = document.getElementById('login')
const loginBtn = document.getElementById('login-btn')
const loginClose = document.getElementById('login-close')

/* Login show */
loginBtn.addEventListener('click', () => {
  login.classList.add('show-login')
})

/* Login hidden */
loginClose.addEventListener('click', () => {
  login.classList.remove('show-login')
})
