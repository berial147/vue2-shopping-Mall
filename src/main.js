import Vue from 'vue'
import App from './App.vue'
//三级联动的组件----全局组件
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'

import { Button, MessageBox} from 'element-ui'

// Vue.config.productionTip = false
//引入路由
import router from '@/router'

//引入仓库
import store from './store'

//统一接口api文件里面全部请求函数
import * as API from '@/api'

//测试
// import { reqGetBannerList } from '@/api'

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)
Vue.component(Button.name, Button)
import '@/mock/mockServe'

//引入swiper样式
import "swiper/css/swiper.css"

new Vue({
  render: h => h(App),
  //全局事件总线的配置
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  //注册路由：底下的写法KV一致省略V[router的r是小写的]
  router,
  //注册仓库
  store
}).$mount('#app')
