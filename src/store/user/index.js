import { reqGetCode, reqUserRegister, reqUserLogin, reqUserInfo, reqLogout } from '@/api'
import { setToken, getToken, removeToken } from '@/utils/token'
//登录与注册的模块
const state = {
    code: '',
    token: getToken(),
    userInfo: {}
}
const mutations = {
    GETCODE(state, code) {
        state.code = code
    },
    USERLOGIN(state, token) {
        state.token = token
    },
    USERINFO(state, userInfo) {
        state.userInfo = userInfo
    },
    CLEAR(state) {
        state.token = ''
        state.userInfo = {}
        removeToken()
    }
}
const actions = {
    //获取验证码
    async getCode({commit}, phone) {
        let result = await reqGetCode(phone)
        if (result.code == 200) {
            commit('GETCODE', result.data)
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    //用户注册
    async userRegister({commit},user) {
        let result = await reqUserRegister(user)
        // console.log(result)
        if (result.code == 200) {
            // console.log('1212312')
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    //用户登录[token]
    async userLogin({commit}, data) {
        let result = await reqUserLogin(data)
        //服务器下发的token，用户的唯一标识符
        //将来经常通过带token找服务器要用户信息
        if (result.code == 200) {
            commit("USERLOGIN", result.data.token)
            setToken(result.data.token)
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    //token验证
    async getUserInfo({commit}) {
        let result = await reqUserInfo()
        console.log(result)
        if (result.code == 200) {
            commit('USERINFO', result.data)
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }   
    },
    async userLogout({commit}) {
        let result = await reqLogout()
       if (result.code == 200) {
           commit('CLEAR')
           return 'ok'
       } else {
           return Promise.reject(new Error('faile'))
       }
    },
    
}
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}