import request from '@/utils/request'

// 附件上传
export function uploadFile(data) {
  return request({
    url: window.configs.api + '/attachment/upload',
    method: 'post',
    data: data,
    heards: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
// 附件列表查询
export function findAttachList(id) {
    return request({
      url: window.configs.api + '/attachment/findByDataId',
      method: 'get',
      params: { 'dataId': id }
    })
}
// 附件删除
export function deleteFile(id) {
  return request({
    url: window.configs.api + '/attachment/deleteById',
    method: 'get',
    params: { 'id': id }
  })
}
