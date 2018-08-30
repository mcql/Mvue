// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUi from 'element-ui'
import api from './api/'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/index'


Vue.config.productionTip = false
Vue.prototype.$api = api

Vue.use(ElementUi)

router.beforeEach((to,from,next) => {
  if(to.path === "/Login"){
    sessionStorage.removeItem("isLogin");
    sessionStorage.removeItem("username");
    next();
  }else{
    if(sessionStorage.getItem("isLogin")){
      next();
    }else{
      next({"path":"/Login"})
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
