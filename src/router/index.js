import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const home = () => import('@/views/home.vue')
const profile = () => import('@/views/profile.vue')
const car = () => import('@/views/car.vue')
const category = () => import('@/views/category.vue')
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/profile',
    component: profile
  },
  {
    path: '/car',
    component: car
  },
  {
    path: '/category',
    component: category
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
