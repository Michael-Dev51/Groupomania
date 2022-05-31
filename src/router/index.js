import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AllPost from "../views/AllPost.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    //redirect: '/login',
    name: 'home',
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: () => import('../components/Login.vue'),
  },
  {
    path: "/signup",
    name: "SignUp",
    component : () => import('../components/Signup.vue'),
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: () => import('../components/ForgotPassword.vue')
  },
  {
    path: "/allPost",
    name: "AllPost",
    component: AllPost,
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

/*router.beforeEach((to, from, next) => {
  if(to.name !== 'Login' && !isAuthenticated) next({name: 'Login'})
  
  else next()
})*/

export default router
