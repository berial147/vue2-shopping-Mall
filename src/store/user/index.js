import { reqGetCode, reqUserRegister, reqUserLogin } from '@/api'
//登录与注册的模块
const state = {
    code: ''
}
const mutations = {
    GETCODE(state, code) {
        state.code = code
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
            console.log('1111')
            return Promise.reject(new Error('faile'))
        }
    },
    //用户登录[token]
    async userLogin({commit}, data) {
        let result = await reqUserLogin(data)
        console.log(result)
    }
}
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}