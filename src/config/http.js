import axios from 'axios'

let origin = 'http://report.gdkeyong.com/service'
axios.defaults.baseURL = origin
let headers = {
  'Content-Type': 'application/json'
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
    // if(res.data.code === 1004) {
    //   window.appVue.routeLogin(false)
    //   return res
    // }
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
    // console.log(window.appVue)
    // console.log(res.data.code)
    return res
  },
  err => {
    // console.log('结束res', err)
    window.h5vue.$message.error(`接口请求：${err}`);
    return Promise.reject(err)
  }
)

export default http