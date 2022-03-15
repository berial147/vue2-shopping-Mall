import {reqAddressInfo, reqOrderInfo} from '@/api'

const state = {
    address: [],
    order: {}
}
const mutations = {
    GETUSERADDRESS(state, address) {
        state.address = address
    },
    GETORDERDATA(state, order) {
        state.order = order
    }
}
const actions = {
    //获取用户地址信息
    async getUserAddress({commit}) {
        let result = await reqAddressInfo()
        if (result.code == 200) {
            commit('GETUSERADDRESS',result.data)
        }
    },
    async getOrderData({commit}) {
        let result = await reqOrderInfo()
        if (result.code == 200) {
            commit('GETORDERDATA', result.data)
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