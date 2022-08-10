<template>
  <div class="page-sight-detail">
    <!-- 页面头部 -->
    <van-nav-bar
      left-text="返回"
      left-arrow
      @click-left="goBack"
    />
    <!-- 大图 -->
    <div class="sight-banner">
      <van-image
        width="100%"
        height="100%"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
      />
      <div class="tips">
        <router-link :to="{name:'SightImage', params:{id:1}}">
          <van-icon name="video-o"/>
          <span>10 图片</span>
        </router-link>
      </div>
    </div>
    <!-- 评分、景点介绍 -->
    <div class="sight-info">
      <div class="left">
        <div class="info-title">
          <strong>4分</strong>
          <small>很棒</small>
        </div>
        <div class="info-tips">50 评论</div>
        <van-icon name="arrow"/>
      </div>
      <div class="right">
        <div class="info-title">
          <span>景点介绍</span>
        </div>
        <div class="info-tips">开放时间、贴士</div>
        <van-icon name="arrow"/>
      </div>
    </div>
    <!-- 地址信息 -->
    <van-cell title="广东省广州市番禺区番禺大道" icon="location-o"
              is-link
              :title-style="{'text-align': 'left'}">
      <template #right-icon>
        <van-icon name="arrow" />
      </template>
    </van-cell>
    <!-- 门票列表 -->
    <!-- 用户评价 -->
    <common-footer/>
  </div>
</template>

<script>
import commonFooter from '@/components/common/commonFooter'

export default {
  name: 'SightDetail',
  components: {
    commonFooter
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less">
.page-sight-detail {
  .van-nav-bar {
    background-color: transparent;
  }

  // 景点大图
  .sight-banner {
    position: relative;

    .tips {
      position: absolute;
      left: 10px;
      bottom: 10px;
      font-size: 16px;
      color: #fff;

      .pic-sts {
        color: #fff;
        border-radius: 30px;
        font-size: 14px;
        background-color: rgba(0, 0, 0, 0.4);
      }
    }
  }

  // 评分、景点介绍
  .sight-info {
    display: flex;
    background-color: #fff;
    border-bottom: 1px solid #f6f6f6;

    & > div {
      flex: 1;
      position: relative;
    }

    .right {
      border-left: 1px solid #f6f6f6;
    }

    .info-title {
      text-align: left;
      padding: 5px 10px;

      strong {
        color: #ff8300;
      }
    }

    .info-tips {
      color: #999;
      font-size: 12px;
      text-align: left;
      padding: 5px 10px;
    }

    .van-icon {
      position: absolute;
      right: 5px;
      top: 5px
    }
  }
}
</style>
