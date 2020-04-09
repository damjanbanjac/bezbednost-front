import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateForm from '../components/CreateForm.vue'
import Admin from '../components/Admin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/userForm',
    name: 'create-form',
    component: CreateForm
  },
  {
    path: '/adminForm',
    name: 'admin-form',
    component: Admin
  }
]

const router = new VueRouter({
  
    routes
  
})

export default router