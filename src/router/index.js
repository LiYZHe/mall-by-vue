import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('../views/home/Home')
const Category = () => import ('../views/category/Category.vue')
const Shopcar = () => import('../views/shopcar/Shopcar.vue')
const Mine = () => import('../views/mine/Mine.vue')

  const routes = [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },{
      path:'/category',
      component:Category
    },{
      path:'/shopcar',
      component:Shopcar
    },{
      path:'/mine',
      component:Mine
    }
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
