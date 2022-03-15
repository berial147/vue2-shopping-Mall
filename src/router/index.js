//配置路由的地方
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '@/store'
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
 router.beforeEach( async(to, from, next) => {
     next()
    let token = store.state.user.token
    let name = store.state.user.userInfo.name
    if (token) {
        if (to.path == '/login') {
            next('/home')
            console.log(111)
        } else {
            if (name) {
                next()
            } else {
              
                try {
                    await store.dispatch('getUserInfo')
                    next()
                } catch(error) {
                    //token失效了获取不到用户信息，重新登录
                    //清除token
                    await store.dispatch('userLogout')
                    next()
                }
            }
        }
    } else {

        //未登录暂时没有处理完毕
        next()
    }
})  


export default router