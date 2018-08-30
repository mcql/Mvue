<template>
    <div class="login">
        <div class="loginform">
            <div class="titlecolor"></div>
            <div class="logintit">User Login</div>
            <div class="titlecolor"></div>
            <el-form :model="logininfo" :rules="rule" ref="logininfo">
                <div class="logininfo">
                    <el-form-item prop="username" class="username">
                        <el-input type="username" v-model="logininfo.username" auto-complete="off" placeholder="username"></el-input>
                    </el-form-item>
                    <el-form-item prop="password" class="password">
                        <el-input type="password" v-model="logininfo.password" auto-complete="off" placeholder="password"></el-input>
                    </el-form-item>
                </div>
                <p class="pout">{{msg}}</p>
                <el-form-item class="loginbtn">
                    <el-button type="success" @click="onSubmit('logininfo')">Sign In</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import '../assets/css/login.css'
export default {
    data(){
        var validateName = (rule, value, callback) => {
            if(!value){
                callback(new Error(" "));
                this.msg = "请输入用户名";
            }else{
                this.msg = '';
                callback();
            }
        };
        var validatePwd = (rule, value, callback) => {
            if(!value){
                callback(new Error(" "));
                this.msg = "请输入密码" ;
            }else{
                this.msg = '';
                callback();
            }
        };
        return{
            msg: '',
            logininfo:{
                username:'',
                password:''
            },
            rule:{
                username: [
                    { validator: validateName, trigger: 'blur' }
                ],
                password: [
                    { validator: validatePwd, trigger: 'blur' }
                ]
            }
        }
    },
    methods:{
        onSubmit:function(formName){
            this.$refs[formName].validate((valid) => {
                if(valid){
                    this.$api.login(this.logininfo).then(res=>{
                        if(res.status == 1){
                            this.$store.commit('LOGIN',this.logininfo.username);
                            this.$router.push({path: '/'});
                        }else{
                            this.msg = "账号密码错误" ;
                        }
                    })
                }else{
                    return false
                }
            })
        }
    }
}
</script>

<style scoped>
.login {width:100%;height:100%;background:url(../assets/images/loginbg.png) no-repeat center center;display:flex;justify-content:center;align-items:center;}
.loginform {width:300px;height:290px;background-color:#1f1f1f;border-radius:3px;box-shadow:0 10px 30px #20171e;overflow:hidden;position: relative;}
.logintit {width:100%;height:45px;text-align:center;color:#bfbfbf;line-height:45px;font-size:15px;font-weight:bold;background:-webkit-linear-gradient(#262626,#0f0f0f);/* Safari 5.1 - 6.0 */        background:-o-linear-gradient(#262626,#0f0f0f);/* Opera 11.1 - 12.0 */        background:-moz-linear-gradient(#262626,#0f0f0f);/* Firefox 3.6 - 15 */        background:linear-gradient(#262626,#0f0f0f);/* 标准的语法 */}
.titlecolor {width:100%;height:1px;background:-webkit-linear-gradient(#6b6b6b,#262626);/* Safari 5.1 - 6.0 */        background:-o-linear-gradient(#6b6b6b,#262626);/* Opera 11.1 - 12.0 */        background:-moz-linear-gradient(#6b6b6b,#262626);/* Firefox 3.6 - 15 */        background:linear-gradient(#6b6b6b,#262626);}
.logininfo {width:240px;margin:35px auto 0;background-color:#141414;overflow:hidden;border-radius: 5px;}
.el-form-item {margin-bottom:0;}
.pout{width:240px;margin:0 auto;font-size: 14px;line-height: 32px;color: #F56C6C;text-align: left;text-indent: 5px;}
.loginbtn{position: absolute;bottom: 30px;left: 30px;}
</style>
