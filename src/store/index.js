import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    username : undefined,
    isLogin : false
}

const mutations = {
    LOGIN(state,username){
        state.isLogin = true;
        state.username = username;
        sessionStorage.setItem("username",username);
        sessionStorage.setItem("isLogin",true);
    },
    LOGOUT(state){
        state.isLogin = false;
        state.username = undefined;
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("isLogin")
    }
}

const actions = {
    login(context,name){
        context.commit('LOGIN',name);
    },
    logout(context){
        context.commit("LOGOUT");
    }
}

export default new Vuex.Store({
    state,mutations,actions
})