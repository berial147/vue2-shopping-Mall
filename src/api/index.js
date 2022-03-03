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

