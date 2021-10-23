import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Shop from '../views/Shop.vue'
import Menu from '../views/Menu.vue'
import DetailMenu from '../views/DetailMenu.vue'
import Chart from '../views/Chart.vue'
import Payment from '../views/Payment.vue'
import SuccessState from '../views/SuccessState.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/menu/:id',
    name: 'Detail Menu',
    component: DetailMenu
  },
  {
    path: '/chart',
    name: 'Chart',
    component: Chart
  },
  {
    path: '/payment',
    name: 'Payment',
    component: Payment
  },
  {
    path: '/success',
    name: 'SuccessState',
    component: SuccessState
  }
]

const router = new VueRouter({
  routes
})

export default router
