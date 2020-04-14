import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateForm from '../components/CreateForm.vue'
import Admin from '../components/Admin.vue'
import HomePage from '../components/HomePage.vue'
import CertList from '../components/CertList.vue'
import CertProfile from '../components/CertProfile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/homePage',
    name: 'home-page',
    component: HomePage
  },
  {
    path: '/CertProfile/:id',
    name: 'cert-profile',
    component: CertProfile
  },
  {
    path: '/userForm',
    name: 'create-form',
    component: CreateForm
  },
  {
    path: '/adminForm',
    name: 'admin-form',
    component: Admin
  },
  {
    path: '/certList',
    name: 'cert-list',
    component: CertList
  }
]

const router = new VueRouter({
  
    routes
  
})

export default router