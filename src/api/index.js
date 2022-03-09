//当前这个模块：API进行统一管理
import requests from './request'
import mockRequest from './mockAjax'
//三级联动接口
///api/product/getBaseCategoryList get 无参数   
//发请求：axios发请求返回结果Promise对象
export const reqCategoryList = () => requests.get(`/product/getBaseCategoryList`)

export const reqGetBannerList = () => mockRequest.get( `/banner`)

export const reqGetFloorList = () => mockRequest.get(`/floor`)

export const reqGetSearchInfo = (params) =>  requests({url: "/list", method: "post", data: params})

//获取产品详情信息的接口 URL：/api/item/{ skuId } 请求方式：get

export const reqGetGoodInfo = (skuId) => requests({url: `/item/${skuId}`, method: "get"})

//将产品添加到购物车中（获取更新一个产品的个数）
///api/cart/addToCart/{skuId}/{skuNum} POST

export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({url: `/cart/addToCart/${skuId}/${skuNum}`, method:"post"})

//获取购物车列表数据接口
//URL:/api/cart/cartList method:get
export const reqCartList = () => requests({url: '/cart/cartList', method: 'get'})

//删除购物产品的接口
//URL: /api/cart/deleteCart/{skuId} method: DELETE
export const reqDeleteCartById = (skuId) => requests({url: `/cart/deleteCart/${skuId}`, method: "delete"})