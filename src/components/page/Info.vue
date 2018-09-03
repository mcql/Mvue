<template>
  <div class="userinfo">
    <p>用户名:{{userinfo.user_name}}</p>
    <p>昵称:{{userinfo.nick_name}}</p>
    <p>性别:
      <span v-if="userinfo.sex === 1">男</span>
      <span v-else-if="userinfo.sex === 0">女</span>
      <span v-else>保密</span>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      userinfo: {}
    };
  },
  created: function() {
    let username = { username: sessionStorage.getItem("username") };
    this.$api
      .findUserPwd(username)
      .then(res => {
        this.userinfo = res.userinfo;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style scoped>
.userinfo {
  line-height: 40px;
  width: 80%;
  margin: 50px auto;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
}
</style>


