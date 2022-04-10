import Vue from 'vue'
import VueRouter from 'vue-router'

import Center from '@/views/Center'

import Account from '@/views/personal/Account'
import Vip from '@/views/personal/Vip'
import Paypassword from '@/views/personal/Paypassword'
import Resetpassword from '@/views/personal/Resetpassword'

import Order from '@/views/menagement/Order'
import Logistics from '@/views/menagement/Logistics'
import Collection from '@/views/menagement/Collection'
import Record from '@/views/menagement/Record'

import Information from '@/views/setting/Information'
import Address from '@/views/setting/Address'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/center'},
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
  ]}
]

const router = new VueRouter({
  routes
})

export default router
