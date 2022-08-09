<template>
  <!-- 精选景点 -->
  <div class="home-fine-box">
    <!-- 顶上导航 -->
    <van-cell
      title="精选景点"
      icon="location-o"
      is-link
      title-style="text-align:left"
      value="更多"
      :to="{name: 'SightList', query: {name: '精选景点'}}"/>
    <!-- // 顶上导航 -->
    <!-- 景点的列表 -->
    <div class="box-main">
      <!--      TODO 下一阶段实现接口调用-->
      <SightItem v-for="item in dataList" :key="item.id" :item="item"/>
    </div>
    <!-- //景点的列表 -->
  </div>
</template>
<script>
import SightItem from '@/components/common/listSight'
import { ajax } from '@/utils/ajax'
import { SightApis } from '@/utils/apis'

export default {
  components: {
    SightItem
  },
  data () {
    return {
      dataList: []
    }
  },
  methods: {
    getfineDataList () {
      ajax.get(SightApis.sightListUrl, {
        params: {
          is_top: 1
        }
      }).then(({ data }) => {
        this.dataList = data.objects
      })
    }
  },
  created () {
    this.getfineDataList()
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
        //text-align: left;
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
