import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Admin from '@/components/Admin'
import ChangePwd from '@/components/page/ChangePwd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Admin,
      children:[
        {
          path:'/ChangePwd',
          component: ChangePwd
        }
      ] 
    },{
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
