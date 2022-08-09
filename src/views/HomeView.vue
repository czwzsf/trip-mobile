<template>
  <div class="page-home">
    <h1>慕旅游网</h1>
    <!--    <van-button type="primary">主要按钮</van-button>-->

    <home-banner/>
    <home-hot/>
    <home-fine/>
    <common-footer/>
  </div>
</template>

<script>
import homeBanner from '@/components/home/homeBanner'
import homeFine from '@/components/home/homeFine'
import homeHot from '@/components/home/homeHot'
import commonFooter from '@/components/common/commonFooter'

export default {

  name: 'HomeView',
  components: {
    homeBanner,
    homeHot,
    homeFine,
    commonFooter
  },
  created () {
  }
}
</script>
<style lang="less" scoped>
.page-home {

}
</style>
