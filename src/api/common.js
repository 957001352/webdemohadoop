import request from '@/utils/request'

// 删除
export function deleteFun(url, data) {
  return request({
    url: window.configs.api + url,
    method: 'get',
    params: data
  })
}
// 保存
export function saveFun(url, data) {
  return request({
    url: window.configs.api + url,
    method: 'post',
    data: data
  })
}
// 列表查询
export function findListFun(url, data) {
  return request({
    url: window.configs.api + url,
    method: 'get',
    params: data
  })
}
// 新增/修改
export function saveBtn(_this, formName, params, url) {
  saveFun(url, params).then(res => {
    _this.loading = false
    if (res.code === 0) {
      _this.$message({
        message: '操作成功!',
        type: 'success'
      })
      _this.dialogVisible = false
      _this.fetchDate()
      _this.$refs[formName].resetFields()
    } else if (res.code === 1000) {
      _this.$message({
        message: res.msg,
        type: 'error'
      })
    }
  })
}
// 单条删除
export function deleteBtn(_this, params, url) {
  _this.$confirm('确定删除吗?', '操作提示', {
    confirmButtonText: '确认删除',
    cancelButtonText: '取消'
  }).then(() => {
    deleteFun(url, params).then(res => {
      _this.loading = false
      if (res.code === 0) {
        _this.$message({
          message: '删除成功!',
          type: 'success'
        })
        if (_this.list.length === 1 && _this.pageIndex > 1) {
          _this.pageIndex = _this.pageIndex - 1
        }
        _this.fetchDate()
      } else if (res.code === 1000) {
        _this.$message({
          message: res.msg,
          type: 'error'
        })
      }
    })
  })
}
// 批量删除
export function deleteBatch(_this, url) {
  if (_this.multipleSelection.length === 0) {
    _this.$message({
      message: '请选择需要删除的数据!',
      type: 'warning'
    })
    return false
  }
  const list = []
  for (const item of _this.multipleSelection) {
    list.push(item.id)
  }
  _this.$confirm('确定删除吗?', '操作提示', {
    confirmButtonText: '确认删除',
    cancelButtonText: '取消'
  }).then(() => {
    const params = {
      id: list.join(',')
    }
    deleteFun(url, params).then(res => {
      _this.loading = false
      if (res.code === 0) {
        _this.$message({
          message: '删除成功!',
          type: 'success'
        })
        if (_this.list.length === 1 && _this.pageIndex > 1) {
          _this.pageIndex = _this.pageIndex - 1
        }
        _this.fetchDate()
      } else if (res.code === 1000) {
        _this.$message({
          message: res.msg,
          type: 'error'
        })
      }
    })
  })
}
// 分页查询
export function findPageList(_this, params, url) {
  _this.list = []
  _this.multipleSelection = []
  _this.loading = true
  findListFun(url, params).then(res => {
    _this.loading = false
    if (res.code === 0) {
      _this.list = res.data.list
      _this.total = res.data.total
    }
  })
}
