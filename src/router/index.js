import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateForm from '../components/CreateForm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'create-form',
    component: CreateForm
  }
]

const router = new VueRouter({
  
    routes
  
})

export default router