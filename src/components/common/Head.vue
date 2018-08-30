<template>
    <div class="head">
        <el-dropdown trigger="click">
            <span class="el-dropdown-link">
                {{username}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="chgpwd">个人信息</el-dropdown-item>
                <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
export default {
    data(){
        return{
            username:''
        }
    },
    mounted(){
        this.username = sessionStorage.getItem("username");
    },
    methods:{
        logout:function(){
            this.$store.commit('LOGOUT');
            this.$router.push({path: '/Login'});
        },
        chgpwd:function(){
            this.$router.push({path: '/ChangePwd'})
        }
    }
}
</script>

<style scoped>
.head{width: 100%;height: 60px;border-bottom: 1px solid #fafafa;box-sizing: border-box;background-color: #545c64;}
.el-dropdown-selfdefine{line-height: 60px;margin-right: 20px;display: inline-block;color: #fff;}
.head{text-align: right;}
</style>

