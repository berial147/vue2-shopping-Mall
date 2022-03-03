import { reqGetGoodInfo } from '@/api'

const store = {
    goodInfo: {}
}
const mutations = {
    GETGOODINFO(state, goodInfo) {
        state.goodInfo = JSON.parse(JSON.stringify(goodInfo))
    }
}
const actions = {

    async getGoodInfos({ commit }, skuId) {
        let result = await reqGetGoodInfo(skuId)
        if (result.code == 200) {
            commit('GETGOODINFO', result.data)
        }
    }
}
const getters = {
    categoryView(state) {
        console.log(state.goodInfo, '11111111111')
        return state.goodInfo.categoryView || {}
    },
    goodInfos(state) {
        return state.goodInfo
    }
}

export default {
    store,
    mutations,
    actions,
    getters

}