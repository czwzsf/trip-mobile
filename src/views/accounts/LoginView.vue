<template>
  <!--  用户登入-->
  <div class="page-account-login">
    <!--  导航条-->
    <van-nav-bar title="用户登录"
                 left-text="返回"
                 left-arrow
                 @click-left="goBack"/>
    <!--  表单输入-->
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        label="用户名"
        placeholder="用户名"
        maxlength="11"
        clearable
        :rules="ruleName"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
    <!--  文字提示-->
    <div class="tips">
      登入表示同意 用户使用协议及 隐私条款
    </div>
    <div class="tips">
      没有账号，
      <router-link to="#">点击注册</router-link>
    </div>
    <!--  版权信息¬-->
    <CopyRightVIew/>
  </div>

</template>

<script>
import CopyRightVIew from '@/components/common/CopyRightVIew'

export default {
  name: 'LoginView',
  data () {
    return {
      // 用户名的验证规则
      username: '',
      password: '',
      ruleName: [{
        required: true,
        message: '请填写用户名'
      }, {
        pattern: /1\d{10}/,
        message: '请填写正确的手机号'
      }],
    }
  },
  components: {
    CopyRightVIew
  },
  methods: {
    goBack () {
      // 倒退一级
      this.$router.go(-1)
    },
    onSubmit (values) {
      console.log('submit', values)
    },
  },
}
</script>

<style scoped>

</style>
