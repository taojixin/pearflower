import Vue from 'vue'
import App from './App.vue'
import router from './router'

// import dotenv from './config'
import '@/mockjs/index'
// 按需引入elementUI组件
import '@/plugins/element'
// 引入全局样式
import '@/assets/css/global.css'
// 引入字体图标
import '@/assets/fonts/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
