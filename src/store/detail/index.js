import { reqGetGoodInfo, reqAddOrUpdateShopCart} from '@/api'
//封装游客身份模块uuid-->生成一个随机字符串（不能再变了）
import { getUUID } from '@/utils/uuid_token'

const state = {
    goodInfo: {},
    uuid_token: getUUID()
}
const mutations = {
    GETGOODINFO(state, goodInfo) {
        state.goodInfo = goodInfo
    }
}
const actions = {
    //获取产品信息的action
    async getGoodInfos({ commit }, skuId) {
        let result = await reqGetGoodInfo(skuId)
        if (result.code == 200) {
            commit('GETGOODINFO', result.data)
        }
    },

    //将产品添加到购物车中
    async addOrUpdateShopCart({commit}, {skuId, skuNum}) {
        let result = await reqAddOrUpdateShopCart(skuId, skuNum)
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
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
    spuSaleAttrList(state) {
        return state.goodInfo.spuSaleAttrList || []
    }
}

export default {
    state,
    mutations,
    actions,
    getters

}