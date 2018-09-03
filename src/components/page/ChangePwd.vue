<template>
  <div>
    <v-info></v-info>
    <el-form :model="changePwd" class="changePwd" :rules="chgPwd" ref="changePwd" label-position="left" label-width="100px">
      <el-form-item label="初始密码" prop="oldpwd">
        <el-input v-model="changePwd.oldpwd" type="password"></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="newpwd">
        <el-input v-model="changePwd.newpwd" type="password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="repwd">
        <el-input v-model="changePwd.repwd" type="password"></el-input>
      </el-form-item>
      <el-form-item class="subbtn">
        <el-button @click="submitForm('changePwd')">提交</el-button>
      </el-form-item>
      <v-dialog :subCode='subCode'></v-dialog>
    </el-form>
    <v-region></v-region>
  </div>
</template>

<script>
import vDialog from "../common/Dialog.vue";
import vInfo from "../page/Info.vue";
import vRegion from "../common/Region.vue";
import { valid } from "semver";
export default {
  components: {
    vDialog,
    vInfo,
    vRegion
  },
  methods: {
    submitForm(changePwd) {
      this.$refs[changePwd].validate(valid => {
        alert("success");
      });
    }
  },
  created: function() {
    let username = { username: sessionStorage.getItem("username") };
    this.$api
      .findUserPwd(username)
      .then(res => {
        //获取到原始密码
        this.realpwd = res["pwd"];
      })
      .catch(err => {
        console.log(err);
      });
  },
  data() {
    var checkOldpwd = (rule, value, callback) => {
      if (value === "") {
        this.subCode.dialogVisible = true;
        this.subCode.msg = "初始密码不能为空";
      } else if (this.realpwd != value) {
        this.subCode.dialogVisible = true;
        this.subCode.msg = "初始密码输入错误";
      } else {
        callback();
      }
    };
    var checkNewpwd = (rule, value, callback) => {
      if (value === "") {
        this.subCode.dialogVisible = true;
        this.subCode.msg = "新密码不能为空";
      } else if (value.length < 6) {
        this.subCode.dialogVisible = true;
        this.subCode.msg = "密码长度不能小于6位";
      } else {
        callback();
      }
    };
    var checkRepwd = (rule, value, callback) => {
      if (value === "") {
        this.subCode.dialogVisible = true;
        this.subCode.msg = "确认密码不能为空";
      } else if (value != this.changePwd.newpwd) {
        this.subCode.dialogVisible = true;
        this.subCode.msg = "两次的修改密码不同";
      } else {
        callback();
      }
    };
    return {
      changePwd: {
        oldpwd: "",
        newpwd: "",
        repwd: ""
      },
      chgPwd: {
        oldpwd: [{ validator: checkOldpwd, trigger: "blur" }],
        newpwd: [{ validator: checkNewpwd, trigger: "blur" }],
        repwd: [{ validator: checkRepwd, trigger: "blur" }]
      },
      subCode: {
        dialogVisible: false,
        msg: ""
      },
      realpwd: ""
    };
  }
};
</script>

<style scoped>
.changePwd {
  width: 80%;
  margin: 50px auto 0;
}
</style>


