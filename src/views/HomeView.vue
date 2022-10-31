<template>
  <div class="page-home">
    <h1>慕旅游网</h1>
    <!--    <van-button type="primary">主要按钮</van-button>-->
    <home-banner/>
    <home-hot/>
    <p>当前登入的用户是：{{ username }}-{{ nickname }}</p>
    <p>
      <input type="text" v-model="uname">
      <input type="button" value="提交" @click="submit">
    </p>
    <home-fine/>
    <common-footer/>
  </div>
</template>

<script>
import homeBanner from '@/components/home/homeBanner'
import homeFine from '@/components/home/homeFine'
import homeHot from '@/components/home/homeHot'
import commonFooter from '@/components/common/commonFooter'
import { mapState } from 'vuex'

export default {

  name: 'HomeView',
  components: {
    homeBanner,
    homeHot,
    homeFine,
    commonFooter,
  },
  data () {
    return {
      uname: ''
    }
  },
  created () {
  },
  // computed: {
  //   user () {
  //     return this.$store.state.user
  //   }
  // },
  computed: mapState({
    username: state => state.user.username,
    nickname: state => state.user.nickname
  }),
  methods: {
    submit () {
      // 异步
      this.$store.dispatch(
        'updateUser', {
          uname: this.uname
        }
      )
    }
  }
}
</script>
<style lang="less" scoped>
.page-home {

}
</style>
