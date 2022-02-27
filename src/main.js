import Vue from 'vue'
import App from './App.vue'
//三级联动的组件----全局组件
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'

// Vue.config.productionTip = false
//引入路由
import router from '@/router'

//引入仓库
import store from './store'

//测试
// import { reqGetBannerList } from '@/api'

Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
import '@/mock/mockServe'

//引入swiper样式
import "swiper/css/swiper.css"

new Vue({
  render: h => h(App),
  //全局事件总线的配置
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  //注册路由：底下的写法KV一致省略V[router的r是小写的]
  router,
  //注册仓库
  store
}).$mount('#app')
