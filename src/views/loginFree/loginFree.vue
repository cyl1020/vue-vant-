<template>
  <div class="login_free">
    <el-form
      v-show="!isShow"
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <h3 class="login_free-header">用户登录</h3>
      <el-form-item label="用户名" prop="username">
        <el-input
          placeholder="请输入用户名"
          v-model="ruleForm.username"
          prefix-icon="el-icon-user"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          placeholder="请输入密码"
          v-model="ruleForm.password"
          prefix-icon="el-icon-s-custom"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item class="login_free-option">
        <input type="checkbox" v-model="ruleForm.loginFree" id="free" />
        <label for="free">七天免登录</label>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >登录</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <div class="login_free-content" v-show="isShow">
      恭喜你登录成功
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginFree",
  data() {
    return {
      isShow: false,
      initialUserName: "123456",
      InitialPassWord: "123456",
      ruleForm: {
        username: "",
        password: "",
        loginFree: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 4,
            max: 12,
            message: "长度在 4 到 12 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 4,
            max: 12,
            message: "长度在 4 到 12 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  mounted() {
    this.isLogin();
  },
  methods: {
    submitForm(formName) {
      const { username, password, loginFree } = this.ruleForm;
      const { initialUserName, InitialPassWord } = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (username == initialUserName && password == InitialPassWord) {
            this.isShow = true;
            this.$message({
              type: "success",
              message: "登录成功",
            });
            if (loginFree) {
              this.saveCookie(username);
            }
          } else {
            this.$message({
              type: "error",
              message: "登录失败",
            });
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    saveCookie(username, exdays = 1) {
      let d = new Date();
      // d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      d.setTime(d.getTime() + exdays * 60 * 1000);
      //toUTCString 根据世界时 (UTC) 把 Date 对象转换为字符串
      let expires = "expires=" + d.toUTCString();
      document.cookie = "key=" + username + ";" + expires + ";path=/";
    },

    //将获取到的cookie转换为一个对象
    getCookieObj() {
      let theCookie = document.cookie;
      //如果当前浏览器没有cookie就不继续往下处理了
      if (!theCookie) return;
      let cookieArr = theCookie.split(";");
      let cookieObj = {};

      cookieArr.forEach(function(item) {
        let tempArr = item.split("=");
        let theKey = tempArr[0].trim();
        let theValue = tempArr[1].trim();
        cookieObj[theKey] = theValue;
      });
      return cookieObj;
    },

    isLogin() {
      let cookieObj = this.getCookieObj();
      //当cookieObj和里面的key值都存在的时候免登录
      if (cookieObj && cookieObj.key) {
        this.isShow = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login_free {
  .el-form {
    width: 50%;
    margin: 20px auto;
    background-color: #fff;
    border-radius: 20px;
    padding: 20px;

    .el-input {
      width: 70%;
    }
  }

  &-header {
    text-align: center;
    margin-bottom: 20px;
  }

  &-option {
    /deep/ .el-form-item__content {
      display: flex;
      align-items: center;
    }

    label {
      margin-left: 10px;
    }
  }

  &-content {
    width: 100%;
    height: 500px;
    text-align: center;
    line-height: 500px;
  }
}
</style>
