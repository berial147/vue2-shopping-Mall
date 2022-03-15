//引入路由组件
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Search from '../pages/Search'
import Detail from '../pages/Detail'
import AddCartSuccess from '../pages/AddCartSuccess'
import ShopCart from '../pages/ShopCart'
import Trade from '../pages/Trade'

//路由配置信息
export default [
        {
            path: "/home",
            component: Home,
            meta: { show: true }
        },
        {
            path: "/login",
            component: Login,
            meta: { show: false }
        },
        {
            path: "/register",
            component: Register,
            meta: { show: false }
        },
        {
            path: "/search/:keyword?",
            component: Search,
            meta: { show: true },
            name: "search"
        },
        {
            path: "/detail/:skuid?",
            component: Detail,
            meta: { isShow: true },
            // scrollBehavior(to, from, savedPosition) {
            //     return { top: 0 }
            // }
        },
        {
            path: "/addcartsuccess",
            name: 'addcartsuccess',
            component: AddCartSuccess,
            meta: {isShow: true}
        },
        {
            path: "/shopcart",
            component: ShopCart,
            meta: {isShow: true}
        },
        {
            path: "/trade",
            component: Trade,
            meta: { isShow: true}
        },
        //重定向，在项目跑起来的时候立马让它跑到首页的位置

        {
            path: "*",
            redirect: "/home"
        }
]