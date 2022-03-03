import Vue from 'vue'
import Vuex from 'vuex'

//需要使用插件一次

Vue.use(Vuex)

//引入小仓库
import home from './home'
import search from './search'
import detail from './detail'

export default new Vuex.Store({
    //实现vuex仓库模块式开发储存数据
    modules: {
        home,
        search,
        detail 
    }
})
// export default store

