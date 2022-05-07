import Vue from 'vue'
import VueRouter from 'vue-router'

import Center from '@/views/Center'
// 账号中心
import Account from '@/views/personal/Account'
import Vip from '@/views/personal/Vip'
import Paypassword from '@/views/personal/Paypassword'
import Resetpassword from '@/views/personal/Resetpassword'
// 交易管理
import Order from '@/views/menagement/Order'
import Logistics from '@/views/menagement/Logistics'
import Collection from '@/views/menagement/Collection'
import Record from '@/views/menagement/Record'
// 设置
import Information from '@/views/setting/Information'
import Address from '@/views/setting/Address'
// 交流中心
import community from '@/views/community'


Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/community'},
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
  { path: '/community', component: community}
]

const router = new VueRouter({
  routes
})

export default router
