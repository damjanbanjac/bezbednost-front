import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateForm from '../components/create-form.vue'

Vue.use(VueRouter)



const routes = [
  {
    path: '/',
    name: 'create-form',
    component: CreateForm,
    meta: {
      requiresAuth: true
    } 
  }
]

const router = new VueRouter({
  
    routes
  })

export default router