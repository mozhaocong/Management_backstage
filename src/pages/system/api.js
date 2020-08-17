import http from '@/config/http'
export default {
  getInfo(data) {   // 获取订单详情接口
    return http.get('/order/order/getInfo',  {
      params: data
    })
  },
  getPage(data) {   // 分页查询订单列表
    return http.get('/order/order/getPage',  {
      params: data
    })
  },
}