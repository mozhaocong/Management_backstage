import axios from 'axios'
import constant from './constant'
let origin = constant.origin
axios.defaults.baseURL = origin
let headers = {
  // 'Content-Type': 'application/json',
  'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
  'token' : 'TOKEN_4b8e64abc1224d8cb5cf4ca8514fb8e3' // 正式要删除的
}
const http = axios.create({
  headers
})
http.interceptors.request.use(
  config => {
    // console.log('开始config', config)
    return config
  },
  err => {
    Promise.reject(err)
  }
)

http.interceptors.response.use(
  res => {
    let data = ['getPage', 'getList', 'getById']
    let message = true
    data.forEach(item => {
        if(res.config.url.indexOf(item) > -1) {
          message = false
        }
    })
    if(message) {
      window.h5vue.$message({
        message: res.data.message,
        type: 'success'
      });
    }
    return res
  },
  err => {
    window.h5vue.$message.error(`接口请求：${err}`);
    return Promise.reject(err)
  }
)

export default http