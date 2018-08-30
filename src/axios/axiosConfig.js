import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import { Message,Loading } from 'element-ui'

axios.defaults.timeout = 5000;
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

Vue.prototype.$static = '';
axios.defaults.baseURL = '';

var loadingInstance;

axios.interceptors.request.use(
    config => {
        loadingInstance =  Loading.service({
            lock : true,
            text : '数据加载中,请稍后...',
            spinner : 'el-icon-loading',
            background : 'rgba(0,0,0,.7)'
        })
        if(config.method === post ){
            config.data = qs.stringify(config.data)
        }
        return config
    },
    err => {
        loadingInstance.close()
        Message.error("请求错误")
        return Promise.reject(err)
    }
)

axios.interceptors.response.use(
    data => {
        loadingInstance.close()
        return data
    },
    err => {
        Message.error('请求失败')
        loadingInstance.close()
        return Promise.reject(err)
    }
)

export function post(url,params){
    return new Promise((resolve,reject) => {
        axios.post(url,params)
        .then(res=>{
            resolve(res.data)
        },err=>{
            reject(err.data)
        })
        .catch(err=>{
            alert("");
            reject(err.data)
        })
    })
}

export function get(url,params){
    return new Promise((reslove,reject) => {
        axios.post(url,{params: params}).then(res=>{
            resolve(res.data)
        },err=>{
            reject(err.data)
        }).catch(err=>{
            reject(err.data)
        })
    })
}