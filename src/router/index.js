//配置路由的地方
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
//使用插件


Vue.use(VueRouter);
//先把VueRouter原型对象的push，保存一份
let originPush = VueRouter.prototype.push
//重写push/replace
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => { }, () => { })
    }
    // alert(666)
}

//配置路由
const router =  new VueRouter({
    routes: routes, 
    //滚动行为  
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    },
 
})  
 router.beforeEach((to, from, next) => {
    console.log(to.name)
    next()
})  


export default router