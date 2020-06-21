var serverBase='http://47.104.229.170:8080/Shopping'
var v1 = serverBase +'/api/v1/'
export default {
    BASE_SERVER_URL: serverBase,
    /* 登录url */
    API_URL_LOGIN: v1 + "login",
    /* 查询热销商品 get请求 参数：无*/
    API_URL_CATALOG_PRODUCTS_HOT: v1 + "catalog/product",
    /* 获取用户电子钱包余额 post请求 参数：userId*/
    API_URL_CUSTOMER_Account: v1 + "/account/userAccount",
    /* 用户充值到电子钱包中 post请求 参数：userId, amount充值金额*/
    API_URL_CUSTOMER_Recharge_Account: v1 + "account/recharge"
}
