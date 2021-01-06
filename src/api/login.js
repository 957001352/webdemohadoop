import request from '@/utils/request'

export function login(data) {
  return request({
    url:  window.configs.api +'/login',
    method: 'post',
    params: data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: {
      token
    }
  })
}

export function logout() {
  return request({
    url: window.configs.api +'/logout',
    method: 'get'
  })
}
// 获取后台接口数据
export function getDemo() {
  return request({
    url: window.configs.api + '',
    method: 'get'
  })
}
