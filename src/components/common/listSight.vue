<template>
  <div>
    <a href="#" class="sight-item"
       v-bind:v-for="item in datalist"
       v-bind:key="item.id">
      <div class="img">
        <img :src="item.img_url" alt="数据库没有数据">
      </div>
      <h5 class="van-ellipsis">{{ item.name }}</h5>
      <div class="line-price">
        <span class="price">￥{{ item.min_price }}</span>起
      </div>
    </a>
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
        text-align: left;
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
