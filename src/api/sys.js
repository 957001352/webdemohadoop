import request from '@/utils/request'

// 集团-列表
export function findSysGroupList(data) {
  return request({
    url: window.configs.api + '/sysGroup/findPageList',
    method: 'get',
    params: data
  })
}

// 新增/修改集团
export function saveSysGroup(data) {
  return request({
    url: window.configs.api + '/sysGroup/save',
    method: 'post',
    data: data
  })
}
// 删除集团
export function deleteSysGroup(data) {
  return request({
    url: window.configs.api + '/sysGroup/delete',
    method: 'get',
    params: data
  })
}
// 查询所有集团
export function findAllGroupList() {
  return request({
    url: window.configs.api + '/sysGroup/findList',
    method: 'get'
  })
}
// 品牌-列表
export function findSysBrandList(data) {
  return request({
    url: window.configs.api + '/sysBrand/findPageList',
    method: 'get',
    params: data
  })
}

// 新增/修改品牌
export function saveSysBrand(data) {
  return request({
    url: window.configs.api + '/sysBrand/save',
    method: 'post',
    data: data
  })
}
// 删除品牌
export function deleteSysBrand(data) {
  return request({
    url: window.configs.api + '/sysBrand/delete',
    method: 'get',
    params: data
  })
}

// 新增/修改角色
export function saveSysRole(data) {
  return request({
    url: window.configs.api + '/sysRole/save',
    method: 'post',
    data: data
  })
}
