import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateForm from '../components/CreateForm.vue'
import Admin from '../components/Admin.vue'
import HomePage from '../components/HomePage.vue'
import ListCert from '../components/ListCert.vue'
import CertList from '../components/CertList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/homePage',
    name: 'home-page',
    component: HomePage
  },
  {
    path: '/listCert',
    name: 'list-cert',
    component: ListCert
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