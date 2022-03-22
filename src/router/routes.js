//引入路由组件(路由懒加载)
const Home = () => import('../pages/Home')
const Login = () => import('../pages/Login')
const Register = () => import('../pages/Register')
const Search = () => import('../pages/Search')
const Detail = () => import('../pages/Detail')
const AddCartSuccess = () => import('../pages/AddCartSuccess')
const ShopCart = () => import('../pages/ShopCart')
const Trade = () => import('../pages/Trade')
const Pay = () => import('../pages/Pay')
const PaySuccess = () => import('../pages/PaySuccess')
const Center = () => import('../pages/Center')
const MyOrder = () => import('../pages/Center/myOrder')
const GroupOrder = () => import('../pages/Center/groupOrder')

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
            meta: { isShow: true},
            beforeEnter: (to, from, next) => {
                if (from.path == '/shopcart') {
                    next()
                } else {
                    next(false)
                }
            }
        },
        {
            path: "/pay",
            component: Pay,
            meta: {isShow: true},
            beforeEnter: (to, from, next) => {
                if (from.path == '/trade') {
                    next()
                } else {
                    next(false)
                }
            }
        },
        {
            path: "/paysuccess",
            component: PaySuccess,
            meta: {isShow: true}
        },
        {
            path: '/center',
            component: Center,
            meta: {isShow: true},
            children: [
                {
                    path: 'myorder',
                    component: MyOrder
                },
                {
                    path: 'grouporder',
                    component: GroupOrder
                },
                {
                    path: '/center',
                    redirect: '/center/myorder'
                }
            ]
        },
        //重定向，在项目跑起来的时候立马让它跑到首页的位置

        {
            path: "*",
            redirect: "/home"
        }
]