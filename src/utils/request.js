import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // '', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 50000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['Authorization'] = getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    if (response.data.code) {
      switch (response.data.code) {
        case 7001: // token过期
          Message({
            message: '登录信息过期，请重新登录!',
            type: 'error',
            duration: 5 * 1000
          })
          // 清除token信息并跳转到登录页面
          setTimeout(() => {
            window.location.href = window.configs.loginUrl
          }, 2000)
          break
        case 7002: // 无操作权限
          Message({
            message: '您没有操作权限!',
            type: 'error',
            duration: 5 * 1000
          })
          break
        case 1005: // 数据加载延迟
          Message({
            message: response.data.msg,
            type: 'error',
            duration: 5 * 1000
          })
          break
        case -1: // 未知错误
          Message({
            message: response.data.msg,
            type: 'error',
            duration: 5 * 1000
          })
          break
        case -2: // 操作失败
          Message({
            message: response.data.msg,
            type: 'error',
            duration: 5 * 1000
          })
          break
      }
    }
    return response.data
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
