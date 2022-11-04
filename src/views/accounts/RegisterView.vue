<template>
  <div class="page-account-register">
    <!--  导航条-->
    <van-nav-bar title="用户登录"
                 left-text="返回"
                 left-arrow
                 @click-left="goBack"/>
    <!--  表单输入-->
    <van-form @submit="onSubmit">
      <van-field
        v-model="form.username"
        label="手机号码"
        placeholder="手机号码"
        maxlength="11"
        clearable
        :rules="ruleName"
      />
      <van-field
        v-model="form.sms_code"
        center
        clearable
        label="短信验证码"
        placeholder="请输入短信验证码"
      >
        <template #button>
          <van-button size="small" type="primary">发送验证码</van-button>
        </template>
      </van-field>
      <van-field
        v-model="form.nickname"
        label="用户昵称"
        placeholder="用户昵称"
        maxlength="32"
        clearable
        :rules="[{ required: true, message: '请输入用户昵称' }]"
      />
      <van-field
        v-model="form.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="rulePassword"
      />
      <van-field
        v-model="form.passwordRepeat"
        type="password"
        name="确认密码"
        label="确认密码"
        placeholder="密码"
        :rules="rulePassword"
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
  name: 'RegisterView',
  data () {
    return {
      // 用户名的验证规则
      form: {
        username: '',
        nickname: '',
        sms_code: '',
        password: '',
        passwordRepeat: ''
      },
      ruleName: [{
        required: true,
        message: '请填写用户名'
      }, {
        pattern: /1\d{10}/,
        message: '请填写正确的手机号'
      }],
      // 重复密码验证
      rulePassword: [
        {
          required: true,
          message: '请重复一次密码'
        }, {
          validator: () => this.form.password === this.form.passwordRepeat,
          message: '两次密码输入不一致'
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
