import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MyFriends from './views/MyFriends'
import Register from './views/Register'
import Login from './views/Login'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/MyFriends',
      name: 'myFriends',
      component: MyFriends
    },
    {
      path: '/Register',
      name: 'register',
      component: Register
    },
    {
      path: '/Login',
      name: 'login',
      component: Login
    }
  ]
})
