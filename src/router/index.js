import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Admin from '@/components/Admin'
import ChangePwd from '@/components/page/ChangePwd'
import NewsList from '@/components/news/NewsList'
import NewsType from '@/components/news/NewsType'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Admin,
      children: [
        {
          path: '/ChangePwd',
          component: ChangePwd
        }, {
          path: '/NewsList',
          component: NewsList
        }, {
          path: "NewsType",
          component: NewsType
        }
      ]
    }, {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
