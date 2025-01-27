import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Detail from '../views/Detail.vue'
import Calculator from '../views/Calculator.vue'
import CalculatorIdeal from '../views/CalculatorIdeal.vue'
import CalculatorMacros from '../views/CalculatorMacros.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'Cart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Cart.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/calculator/bmi',
    name: 'Calculator',
    component: Calculator
  },
  {
    path: '/calculator/ideal',
    name: 'CalculatorIdeal',
    component: CalculatorIdeal
  },
  {
    path: '/calculator/macros',
    name: 'CalculatorMacros',
    component: CalculatorMacros
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
