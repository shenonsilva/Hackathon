import Vue from 'vue'
import VueRouter from 'vue-router'
import Telaum from "./views/Telaum.vue"
import Teladois from "./views/Teladois.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Telaum
  },
  {
    path: '/classificacao',
    name: 'Classificação',
    component: Teladois
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
