<template>
  <!--  用户登入-->
  <div class="page-account-login">
    <!--  导航条-->
    <van-nav-bar title="用户登录"
                 left-text="返回"
                 left-arrow
                 @click-left="goBack"/>
    <!--  表单输入-->
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
  components: {
    CopyRightVIew
  },
  methods: {
    goBack () {
      // 倒退一级
      this.$router.go(-1)
    }
  },
}
</script>

<style scoped>

</style>
