<template>
  <!--搜索页面 -->
  <div>
    <!--标题-->
    <van-nav-bar title="搜索景点"/>
    <!--搜索-->
    <van-search
      v-model="sightname"
      show-action
      label="景点"
      placeholder="请输入搜索关键词"
      @search="onSearch"
    >
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>
    <!--景点列表-->
    <div class="sight-list">
      <SightItem v-for="item in dataList" :key="item.id" :item="item"/>
    </div>
    <!--分页-->
    <van-pagination v-model="currentPage" :total-items="totalItems" :items-per-page="perPage"/>
    <common-footer/>
  </div>
</template>

<script>
import SightItem from '@/components/common/listSight'
import { ajax } from '@/utils/ajax'
import { SightApis } from '@/utils/apis'
import commonFooter from '@/components/common/commonFooter'

export default {
  name: 'SearchView',
  data () {
    return {
      sightname: '',
      dataList: [],
      // 总记录数
      totalItems: 0,
      // 当前的页码
      currentPage: 1,
      // 每页数据的大小
      perPage: 5
    }
  },
  methods: {
    onSearch () {

    },
    getDataList () {
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
    this.getDataList()
  },
  components: {
    SightItem,
    commonFooter
  }
}
</script>

<style lang="less">
.page-search {
  padding-bottom: 60px;

h2 {
  font-size: 16px;
  text-align: left;
  padding: 5px 10px;
  margin: 0;
}
.sight-list {
  padding: 10px;
  background: #fff;
  margin-bottom: 10px;
}
}
</style>
