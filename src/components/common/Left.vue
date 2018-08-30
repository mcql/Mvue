<template>
    <div class="left">
        <div class="title">Mvue</div>
        <el-menu background-color="#545c64" router text-color="#fff" active-text-color="#ffd04b">
            <el-submenu index="1">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
                </template>
                <el-menu-item-group>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="/ChangePwd">
                <i class="el-icon-setting"></i>
                <span slot="title">个人信息</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.left{width: 100%;height: 100%;background-color: #545c64;}
.left li{text-align: left;}
.title{width:200px;font-size: 26px;color: #fff;line-height: 59px;border-bottom: 1px solid #fafafa;border-right: 1px solid #fafafa;box-sizing: border-box}
</style>

