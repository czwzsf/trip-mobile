<template>
  <!--搜索页面 -->
  <div>
    <!--标题-->
    <van-nav-bar title="搜索景点"
                 left-text="返回"
                 left-arrow
                 @click-left="goBack"
                 v-if="isHome"/>
    <van-nav-bar title="搜索景点" v-else/>
    <!--搜索-->
    <van-search
      v-model="sightname"
      show-action
      label="景点"
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @clear="clear"
    >
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>
    <h2 v-if="is_hot">热门推荐</h2>
    <h2 v-if="is_top">精选景点</h2>
    <!--景点列表-->
    <div class="sight-list">
      <SightItem v-for="item in dataList" :key="item.id" :item="item"/>
    </div>
    <!--分页-->
    <van-pagination v-model="currentPage"
                    :total-items="totalItems"
                    :items-per-page="perPage"
                    @change="pageChange"/>
    <common-footer v-if="!isHome"/>
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
      perPage: 5,
      // 热门景点
      is_hot: '',
      // 精选景点
      is_top: ''
    }
  },
  methods: {
    onSearch () {
      // 判断搜索内容是否为空
      if (!this.sightname) {
        this.$toast('请输入搜索值')
      }
      // 重置数据
      this.dataList = []
      this.currentPage = 1
      // 执行查询
      this.getDataList()
    },
    getDataList () {
      ajax.get(SightApis.sightListUrl, {
        params: {
          name: this.sightname,
          page: this.currentPage,
          limit: this.perPage
        }
      }).then(({
        data: {
          meta,
          objects
        }
      }) => {
        this.dataList = objects
        this.totalItems = meta.total_count
      })
    },
    clear () {
      this.dataList = []
      this.currentPage = 1
      // 执行查询
      this.getDataList()
    },
    /**
     * 页码发生变化后重新加载数据
     */
    pageChange () {
      this.getDataList()
    },
    goBack () {
      this.$router.go(-1)
    },
  },
  computed: {
    // 静态属性
    /**
     * 是否从首页过来
     */
    isHome () {
      return this.is_hot || this.is_top
    }
  },
  mounted () {
    this.is_hot = this.$route.query.is_hot
    this.is_top = this.$route.query.is_top
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
