import { reqGetGoodInfo } from '@/api'

const state = {
    goodInfo: {}
}
const mutations = {
    GETGOODINFO(state, goodInfo) {
        state.goodInfo = goodInfo
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
        return state.goodInfo.categoryView || {}
    },
    skuInfo(state) {
        return state.goodInfo.skuInfo || {}
    },
    skuSaleAttrList(state) {
        return state.goodInfo.skuInfo.skuSaleAttrValueList || []
    }
}

export default {
    state,
    mutations,
    actions,
    getters

}