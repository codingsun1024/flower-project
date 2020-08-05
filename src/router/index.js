import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const home = () => import('@/views/home/home.vue')
const profile = () => import('@/views//profile/profile.vue')
const car = () => import('@/views/car/car.vue')
const category = () => import('@/views/category/category.vue')
const detail = () => import('@/views/detail/detail.vue')
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
  },
  {
    path: '/detail/:iid',
    component: detail
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
