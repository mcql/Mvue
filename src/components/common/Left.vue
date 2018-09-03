<template>
    <div class="left">
        <div class="title">Mvue</div>
        <el-menu background-color="#545c64" router text-color="#fff" active-text-color="#ffd04b">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>产品管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/ProductList">产品列表</el-menu-item>
                    <el-menu-item index="/Productype">产品分类</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>文章管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/NewsList">文章列表</el-menu-item>
                    <el-menu-item index="/Newstype">文章分类</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
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
export default {};
</script>

<style scoped>
.left {
  width: 100%;
  height: 100%;
  background-color: #545c64;
}
.left li {
  text-align: left;
}
.title {
  width: 200px;
  font-size: 26px;
  color: #fff;
  line-height: 59px;
  border-bottom: 1px solid #fafafa;
  border-right: 1px solid #fafafa;
  box-sizing: border-box;
}
</style>

