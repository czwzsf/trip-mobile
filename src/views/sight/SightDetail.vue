<template>
  <div class="page-sight-detail">
    <!-- 页面头部 -->
    <van-nav-bar
      left-text="返回"
      left-arrow
      @click-left="goBack"
      fixed
    />
    <!-- 大图 -->
    <div class="sight-banner">
      <van-image
        width="100%"
        height="70%"
        :src="sightdetail.img"
      />
      <div class="tips">
        <router-link :to="{name:'SightImage', params:{id}}">
          <van-icon name="video-o"/>
          <span>{{ sightdetail.image_count }} 图片</span>
        </router-link>
        <div class="title">{{ sightdetail.name }}</div>
      </div>
    </div>
    <!-- 评分、景点介绍 -->
    <div class="sight-info">
      <div class="left">
        <div class="info-title">
          <strong>{{ sightdetail.score }}</strong>
          <small>很棒</small>
        </div>
        <div class="info-tips">{{ sightdetail.comment_count }}评论</div>
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
    <van-cell :title="fullArea" icon="location-o"
              is-link
              :title-style="{'text-align': 'left'}">
      <template #right-icon>
        <van-icon name="arrow"/>
      </template>
    </van-cell>
    <!-- 门票列表 -->
    <div class="sight-ticket">
      <van-cell title="门票" icon="cart-o" title-style="text-align:left"/>
      <div class="ticket-item" v-for="i in ticketlist" :key="i.pk">
        <div class="left">
          <div class="title">{{ i.name }}</div>
          <div class="tips">
            <van-icon name="clock-o"/>
            <span>{{i.desc}}</span>
          </div>
          <div class="tags">
            <van-tag mark type="primary">标签</van-tag>
          </div>
        </div>
        <div class="right">
          <div class="price">
            <span>¥</span>
            <strong>{{i.price}}</strong>
            <router-link to="#">
              <van-button type="warning" size="small">预定</van-button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- 用户评价 -->
    <div class="sight-comment">
      <van-cell title="热门评论" icon="comment-o" title-style="text-align:left"/>
      <CommentItem/>
      <!--TODO 后期更新跳转链接地址-->
      <router-link class="link-more" :to="{name:'SightComment', params: {id}}" fixed>查看更多</router-link>
    </div>
    <!--    <common-footer/>-->
  </div>
</template>

<script>
// import commonFooter from '@/components/common/commonFooter'
import CommentItem from '@/components/sight/CommentItem'
import { SightApis } from '@/utils/apis'
import { ajax } from '@/utils/ajax'

export default {
  name: 'SightDetail',
  data () {
    return {
      id: '',
      // 景点的详细信息
      sightdetail: {},
      // 门票列表
      ticketlist: []
    }
  },
  components: {
    // commonFooter,
    CommentItem
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    /*
    * 获取景点详细信息
    *  */
    getSightDetail () {
      // 接收网页中的id
      const url = SightApis.sightDetailUrl.replace('#{id}', this.id)
      ajax.get(url).then(({ data }) => {
        this.sightdetail = data
      })
    },
    getTicketList () {
      // 接收网页中的id
      const url = SightApis.sightTicketUrl.replace('#{id}', this.id)
      ajax.get(url).then(({ data: {objects} }) => {
        this.ticketlist = objects
      })
    }
  },
  created () {
    this.id = this.$route.params.id
    this.getSightDetail()
    this.getTicketList()
  },
  computed: {
    fullArea () {
      let area = this.sightdetail.province + this.sightdetail.city
      if (this.sightdetail.area) {
        area += this.sightdetail.area
      }
      if (this.sightdetail.town) {
        area += this.sightdetail.town
      }
      return area
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

  // 门票列表
  .sight-ticket {
    margin-top: 5px;
    background-color: #ffffff;

    .ticket-item {
      display: flex;
      border-bottom: 1px solid #f6f6f6;
      padding-bottom: 10px;

      .left {
        flex: 1;
        text-align: left;
        padding: 5px 10px;

        .title {
          padding: 5px 0px;
        }

        .tips {
          font-size: 12px;
        }
      }

      .right {
        width: 100px;

        .price {
          color: #ff9800;

          strong {
            font-size: 20px;
          }
        }
      }
    }
  }

  //评论列表
  .sight-comment {
    margin-top: 10px;
    background-color: #fff;
  }

  // 查看更多
  .link-more {
    display: block;
    color: #666;
    padding: 10px;
  }
}
</style>
