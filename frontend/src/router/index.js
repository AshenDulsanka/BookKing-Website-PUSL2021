import { createWebHistory, createRouter } from 'vue-router';

// Import components for routes
import UserSignUp from '../pages/auth/UserSignUp.vue';
import UserLogin from '../pages/auth/userLogin.vue';
import ServiceProviderSignUp from '../pages/auth/ServiceProviderSignUp.vue';
import ServiceProviderLogin from '../pages/auth/ServiceProviderLogin.vue';
import UserDashboard from '../pages/dashboard/UserDashboard.vue';
import ServiceProviderDashboard from '../pages/dashboard/ServiceProviderDashboard.vue';
import AddPage from '../pages/dashboard/AddPage.vue';
import SingleProductPage from '../pages/public/SingleProductPage.vue';
import Reviews from '../pages/public/Reviews.vue';
import Hotels from '../pages/public/Hotels.vue';
import AboutUs from '../pages/public/AboutUs.vue';
import HomeView from '../pages/public/HomeView.vue';
import AdminLogin from '../pages/admin/adminLogin.vue';
import AdminDashboard from '../pages/admin/adminDashboard.vue';
import ContactUs from '../pages/public/ContactUs.vue';
import Vehicles from '../pages/public/Vehicles.vue';
import Tours from '../pages/public/Tours.vue';
import forgotPassword from '../pages/auth/forgotPassword.vue';
import spforgetPassword from '../pages/auth/spForgotPassword.vue';
import updateService from '../pages/dashboard/serviceUpdate.vue';

const routes = [
  // Auth
  { path: '/login', component: UserLogin },
  { path: '/signup', component: UserSignUp },
  { path: '/spsignup', component: ServiceProviderSignUp },
  { path: '/splogin', component: ServiceProviderLogin },
  { path: '/forgotPassword', component: forgotPassword },
  { path: '/spforgotPassword', component: spforgetPassword },

  // Dashboard
  { path: '/userdashboard', component: UserDashboard },
  { path: '/spdashboard', component: ServiceProviderDashboard },
  { path: '/addpage', component: AddPage },
  { path: '/updateService', component: updateService },

  // Admin
  { path: '/secret', component: AdminLogin },
  { path: '/adminDashboard', component: AdminDashboard },

  // Public
  { path: '/', component: HomeView },
  { path: '/product/:id', component: SingleProductPage, props: true },
  { path: '/reviews', component: Reviews },
  { path: '/hotels', component: Hotels },
  { path: '/vehicles', component: Vehicles },
  { path: '/tours', component: Tours },
  { path: '/aboutus', component: AboutUs },
  { path: '/contactus', component: ContactUs }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
