import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchView from '@/views/SearchView'
import SightList from '@/views/sight/SightList'
import SightDetail from '@/views/sight/SightDetail'
import SightInfo from '@/views/sight/SightInfo'
import SightComment from '@/views/sight/SightComment'
import SightImage from '@/views/sight/SightImage'
import LoginView from '@/views/accounts/LoginView'
import RegisterView from '@/views/accounts/RegisterView'
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
  },
  // 用户登入
  {
    path: '/account/login/',
    name: 'AccountLogin',
    component: LoginView
  },
  // 用户注册
  {
    path: '/account/register/',
    name: 'AccountRegister',
    component: RegisterView
  }
]

const router = new VueRouter({
  routes
})

export default router
