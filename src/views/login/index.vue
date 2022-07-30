<template>
  <div class='bgcs'>
   <div class='Signbox'>
    <img class='imgdkd' src="http://likede2-admin.itheima.net/img/logo.595745bd.png" alt="">
   <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item>
    <el-input type="text" autocomplete="off" prefix-icon='el-icon-mobile-phone' v-model="value" placeholder="请输入账号">
    </el-input>
  </el-form-item>
  <el-form-item>
    <el-input class='input2' :type="isshow ? 'password': 'text'" autocomplete="off"  prefix-icon='el-icon-unlock' v-model="value1" placeholder="请输入密码"></el-input>
    <div class='icons'><i @click='isShow' class='el-icon-view'></i></div>
  </el-form-item>
  <el-form-item>
    <el-input class="inputVerification"  prefix-icon='el-icon-orange' v-model="value2" placeholder="请输入验证码"></el-input><img class="imgVerification" src="https://likede2-java.itheima.net/api/user-service/user/imageCode/ducml7NNDE0Apecv1cSc2eX6U1rVquFg" alt="">
  </el-form-item>
  <el-form-item>
    <el-button class="btn" type="primary">登录</el-button>
  </el-form-item>
</el-form>
   </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 'amlsd',
      value1: '12312',
      value2: '',
      isshow: true
    }
  },
  methods: {
    isShow() {
      this.isshow = !this.isshow
    }
  }
}
</script>

<style scoped>
.bgcs{
  width: 100%;
  height: 100%;
  background: url('http://likede2-admin.itheima.net/img/background.be4fae7d.png') no-repeat;
  background-size: cover;
}
.Signbox{
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
.el-form-item--feedback{
  margin-left: -100px;
}
::v-deep.el-input--prefix .el-input__inner{
  height: 50px !important;
}
.inputVerification{
  position: relative;
  width: 350px;
}
.imgVerification{
  position: absolute;
  width: 100px;
  height: 50px;
  background-color: #000;
}
.btn{
  width: 448px;
  height: 52px;
}
.imgdkd{
      position: absolute;
    width: 96px;
    height: 96px;
    top: -46px;
    left: 50%;
    margin-left: -48px;
}
.icons{
  position: absolute;
  right: 15px;
  top: 7px;
}

</style>
