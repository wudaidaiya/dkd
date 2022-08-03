<template>
  <div class="bgcs">
    <div class="Signbox">
      <img
        class="imgdkd"
        src="http://likede2-admin.itheima.net/img/logo.595745bd.png"
        alt=""
      />
      <el-form
        :model="loginForm"
        status-icon
        :rules="loginFormRules"
        ref="loginForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item prop="loginName">
          <el-input
            type="text"
            autocomplete="off"
            prefix-icon="el-icon-mobile-phone"
            v-model="loginForm.loginName"
            placeholder="请输入账号"
          >
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            class="input2"
            :type="isshow ? 'password' : 'text'"
            autocomplete="off"
            prefix-icon="el-icon-unlock"
            v-model="loginForm.password"
            placeholder="请输入密码"
          ></el-input>
          <div class="icons" @click="isShow">
            <i v-show="!isshow" class="el-icon-view"></i
            ><i v-show="isshow" class="iconfont icon-biyan"></i>
          </div>
        </el-form-item>
        <el-form-item prop="code">
          <el-input
            class="inputVerification"
            prefix-icon="el-icon-orange"
            v-model="loginForm.code"
            placeholder="请输入验证码"
          ></el-input
          ><img
            @click="imgFn"
            class="imgVerification"
            :src="$store.state.user.imgcode"
            alt=""
          />
        </el-form-item>
        <el-form-item>
          <el-button @click="loginFn" class="btn" type="primary"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value2: "",
      isshow: true,
      loginForm: {
        loginName: "admin",
        password: "admin",
        code: "",
        loginType: 0,
        clientToken: "",
      },
      loginFormRules: {
        loginName: [
          { required: true, message: "请输入昵称", trigger: "blur" },
          {
            pattern: /^[a-zA-Z0-9_-]{4,10}$/,
            message: "请输入4-10位昵称",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            pattern: /^[a-zA-Z0-9_-]{4,10}$/,
            message: "请输入4-10位密码",
            trigger: "blur",
          },
        ],
        code: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          {
            pattern: /^[a-zA-Z0-9_-]{4}$/,
            message: "请输入4位验证码",
            trigger: "blur",
          },
        ],
      },
    };
  },
  created() {
    this.imgFn();
  },
  methods: {
    isShow() {
      this.isshow = !this.isshow;
    },
    async loginFn() {
      await this.$refs.loginForm.validate();
      await this.$store.dispatch("user/getToken", this.loginForm);
      this.$router.push("/");
       // 成功提示
     this.$message.success('登陆成功')
    },
    imgFn() {
      this.loginForm.clientToken = Math.round(Math.random() * 100);
      this.$store.dispatch("user/getimgcode", this.loginForm.clientToken);
      // console.log(111111);
    },
  },
};
</script>

<style scoped>
.bgcs {
  width: 100%;
  height: 100%;
  background: url("http://likede2-admin.itheima.net/img/background.be4fae7d.png")
    no-repeat;
  background-size: cover;
}
.Signbox {
  position: absolute;
  width: 518px;
  height: 388px;
  top: 50%;
  left: 50%;
  margin-top: -194px;
  margin-left: -259px;
  padding: 76px 35px 0;
  background: #fff;
  -webkit-box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
  box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
  border-radius: 10px;
}
.el-form-item--feedback {
  margin-left: -100px;
}
::v-deep.el-input--prefix .el-input__inner {
  height: 50px !important;
}
.inputVerification {
  position: relative;
  width: 350px;
}
.imgVerification {
  position: absolute;
  width: 100px;
  height: 50px;
  background-color: #000;
}
.btn {
  width: 448px;
  height: 52px;
}
.imgdkd {
  position: absolute;
  width: 96px;
  height: 96px;
  top: -46px;
  left: 50%;
  margin-left: -48px;
}
.icons {
  position: absolute;
  right: 15px;
  top: 7px;
}
</style>
