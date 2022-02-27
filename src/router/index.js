//配置路由的地方
import Vue from 'vue'
import VueRouter from 'vue-router'
//使用插件
//引入路由组件
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Search from '../pages/Search'

Vue.use(VueRouter);
//先把VueRouter原型对象的push，保存一份
let originPush = VueRouter.prototype.push
//重写push/replace
VueRouter.prototype.push = function(location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location,resolve, reject)
    } else {
        originPush.call(this, location, () => {}, () => {})
    }
    // alert(666)
}

//配置路由
export default new VueRouter({
    routes: [
        {
            path: "/home",
            component: Home,
            meta: {show: true}
        },
        {
            path: "/login",
            component: Login,
            meta: {show: false}
        },
        {
            path: "/register",
            component: Register,
            meta: {show: false}
        },
        {
            path: "/search/:keyword?",
            component: Search,
            meta: {show: true},
            name: "search"
        },
        //重定向，在项目跑起来的时候立马让它跑到首页的位置
        {
            path: "*",
            redirect: "/home"
        },
    ]
})