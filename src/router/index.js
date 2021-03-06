import Vue from 'vue'
import VueRouter from 'vue-router'

import Center from '@/views/Center'
// 账号中心
import Account from '@/views/Center/personal/Account'
import Vip from '@/views/Center/personal/Vip'
import Paypassword from '@/views/Center/personal/Paypassword'
import Resetpassword from '@/views/Center/personal/Resetpassword'
// 交易管理
import Order from '@/views/Center/menagement/Order'
import Logistics from '@/views/Center/menagement/Logistics'
import Collection from '@/views/Center/menagement/Collection'
import Record from '@/views/Center/menagement/Record'
// 设置
import Information from '@/views/Center/setting/Information'
import Address from '@/views/Center/setting/Address'
// 交流中心
import community from '@/views/Community'
// 分享
import Writing from '@/views/Community/Writing'
// 我的分享
import MyShare from '@/views/Community/MyShare'
// 文章
import Essay from '@/components/community/Essay'
// 其他人的分享
import OtherShare from '@/views/Community/OtherShare'

// 首页
import Home from '@/views/Home.vue'
// 登录
import Login from "@/views/login.vue"

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home'},
  { path: '/center', component: Center, redirect: '/account', children: [
    { path: '/account', component: Account},
    { path: '/vip', component: Vip},
    { path: '/paypassword', component: Paypassword},
    { path: '/resetpassword', component: Resetpassword},
    { path: '/order', component: Order},
    { path: '/logistics', component: Logistics},
    { path: '/collection', component: Collection},
    { path: '/record', component: Record},
    { path: '/information', component: Information},
    { path: '/address', component: Address},
  ]},
  { path: '/community', component: community},
  { path: '/writing', component: Writing},
  { path: '/myshare', component: MyShare},
  { path: '/essay', component: Essay},
  { path: '/othershare', component: OtherShare},

  { path: '/home', component: Home},
  { path: '/login', component: Login}
]

const router = new VueRouter({
  routes
})

export default router
