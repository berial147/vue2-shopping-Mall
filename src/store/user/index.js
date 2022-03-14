import { reqGetCode, reqUserRegister, reqUserLogin } from '@/api'
//登录与注册的模块
const state = {
    code: '',
    token: ''
}
const mutations = {
    GETCODE(state, code) {
        state.code = code
    },
    USERLOGIN(state, token) {
        state.token = token
    }
}
const actions = {
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
        } else {
            return Promise.reject(new Error('faile'))
        }
    }
}
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}