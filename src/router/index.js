import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchView from '@/views/SearchView'
import SightList from '@/views/SightList'
import SightDetail from '@/views/SightDetail'
import SightInfo from '@/views/SightInfo'
import SightComment from '@/views/SightComment'
import SightImage from '@/views/SightImage'
// 使用vue-router插件
Vue.use(VueRouter)

const routes = [
  {
    // 首页
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    // 搜索界面
    path: '/search',
    name: 'search',
    component: SearchView
  },
  // 景点列表
  {
    path: '/sight/list',
    name: 'SightList',
    component: SightList
  },
  // 景点详情
  {
    path: '/sight/detail/:id',
    name: 'SightDetail',
    component: SightDetail
  },
  // 景点介绍
  {
    path: '/sight/info/:id',
    name: 'SightInfo',
    component: SightInfo
  },
  // 评论列表
  {
    path: '/sight/comment/:id',
    name: 'SightComment',
    component: SightComment
  },
  // 景点下的图片
  {
    path: '/sight/image/:id',
    name: 'SightImage',
    component: SightImage
  }

]

const router = new VueRouter({
  routes
})

export default router
