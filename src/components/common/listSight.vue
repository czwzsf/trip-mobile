<template>
  <div>
    <router-link class="sight-item"
                 :to="{name: 'SightDetail', params: {id: item.id}}">
      <img :src="item.img_url" :alt="item.name">
      <div class="right">
        <h5>{{ item.name }}</h5>
        <van-rate v-bind="item.score" />
        <div class="tips">{{ item.comment_count }}人点评 | 100%满意</div>
        <div class="tips light">{{ item.province }} - {{ item.city }}</div>
        <div class="line-price">￥ {{ item.min_price }} 起</div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'listSight',
  props: ['item'],
  data () {
    // 需要初始化一个datalist
    return {
      datalist: []
    }
  }
}
</script>

<style lang="less">
.home-fine-box {
  padding: 0 10px;

  .van-cell {
    padding: 10px 0;
  }

  .box-main {
    // 景点列表
    .sight-item {
      display: flex;
      margin-top: 10px;
      border-bottom: 1px solid #f6f6f6;

      img {
        width: 100px;
        height: 100px;
      }

      .right {
        text-align: left;
        flex-grow: 1;
        justify-content: left;
        padding-left: 5px;
        position: relative;
      }

      h5 {
        color: #212121;
        font-size: 14px;
        padding: 5px 0;
        margin: 0;
      }

      .line-price {
        position: absolute;
        right: 10px;
        top: 20px;
        display: inline-block;
        color: #f50;
        font-size: 16px;
        font-weight: bold;
      }

      .tips {
        font-size: 12px;
        color: #666;

        &.light {
          color: #999;
        }
      }
    }
  }
}
</style>
