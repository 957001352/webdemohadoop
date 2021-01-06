<template>
  <div class="app-container">
    <div class="searchInfo">
      <span class="seachname">
        角色名称:
      </span>
      <el-input v-model="searchKey.name" placeholder="请输角色名称" class="inputCls" clearable />
      <el-button class="primaryBtn" style="margin-left: 7px;" type="primary" @click="searchBtn">
        <svg-icon icon-class="search" /> 查询
      </el-button>
      <el-button class="resetBtn" style="margin-left: 7px;" type="default" icon="el-icon-refresh-right" @click="resetBtn">
        重置
      </el-button>
    </div>
    <div class="searchInfo">
      <el-button v-if="hasPermission('programmeMould/add')" class="addBtn" type="default" icon="el-icon-plus" @click="addBtn"> 新增</el-button>
      <el-button v-if="hasPermission('programmeMould/delete')" class="deleteBtn" type="default" @click="deleteAll()">
        <svg-icon icon-class="delete" /> 批量删除
      </el-button>
    </div>
    <div class="el-tablenew">
      <el-table v-loading="loading" :data="list" :row-class-name="tableRowClassName" border style="width: 100%" height="calc(100vh - 337px)" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55" align="center" />
        <el-table-column prop="date" label="序号" align="center" width="55">
          <template slot-scope="scope">
            {{ scope.$index + 1 }}
          </template>
        </el-table-column>
        <el-table-column prop="name" label="角色名称" align="center" />
        <el-table-column prop="createDate" label="创建时间" align="center" width="100px">
          <template slot-scope="scope">
            <span>{{ scope.row.createDate && scope.row.createDate.length> 10 ? scope.row.createDate.substring(0,10):scope.row.createDate }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center" width="150px">
          <template slot-scope="scope">
            <el-button v-if="hasPermission('programmeMould/edit')" type="text" class="addTextBtn" @click="editBtn(scope.row)">
              <svg-icon icon-class="edit" /> 编辑
            </el-button>
            <el-button v-if="hasPermission('programmeMould/delete')" type="text" class="deleteTextBtn" @click="deleteBtn(scope.row)">
              <svg-icon icon-class="delete" /> 删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <pagination :total="total" :page.sync="pageIndex" :limit.sync="pageSize" class="pagePadd" @pagination="handleCurrentChange" />
    </div>
    <div v-if="dialogVisible" class="showDialogsty">
      <newEdit :objstr="objstr" @DetailCallBack="DetailCallBack" />
    </div>
  </div>
</template>
<script>
import { saveBtn, deleteBtn, deleteBatch, findPageList } from '@/api/common'
import Pagination from '@/./components/Pagination'
import elDragDialog from '@/directive/el-drag-dialog' // base on element-ui
import newEdit from '@/views/sys/sysRole/newRole' // 维修执行
export default {
  name: 'SysRole',
  directives: { elDragDialog },
  components: { Pagination, newEdit },
  data() {
    return {
      loading: false,
      dialogVisible: false,
      objstr: null,
      searchKey: {},
      total: 0,
      pageIndex: 1,
      pageSize: 10,
      currentId: null,
      multipleSelection: [],
      list: []
    }
  },
  computed: {},
  mounted() {
    this.fetchDate()
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 === 1) {
        return 'table-row'
      }
      return ''
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    fetchDate() {
      const params = {
        name: this.searchKey.name + '' ? this.searchKey.name : null,
        pageNum: this.pageIndex,
        pageSize: this.pageSize
      }
      findPageList(this, params, '/sysRole/findPageList')
    },
    searchBtn() {
      this.fetchDate()
    },
    resetBtn() {
      this.searchKey = {
        name: ''
      }
      this.pageIndex = 1
      this.pageSize = 10
      this.fetchDate()
    },
    handleCurrentChange() {
      this.fetchDate()
    },
    DetailCallBack(result) {
      this.dialogVisible = false
      if (result.result === '1') {
        this.fetchDate()
      }
    },
    addBtn() {
      this.objstr = { type: 'add' }
      this.dialogVisible = true
    },
    editBtn(item) {
      this.objstr = item
      this.objstr.type = 'edit'
      this.dialogVisible = true
    },
    deleteAll() {
      deleteBatch(this, '/sysRole/delete')
    },
    deleteBtn(item) {
      deleteBtn(this, { id: item.id }, '/sysRole/delete')
    }
  }
}
</script>
<style lang="scss" scoped>
.app-container {
  .searchInfo {
    width: 100%;
    margin-bottom: 16px;
  }
}
.showDialogsty {
  width: 100%;
  height: calc(100vh - 85px);
  position: absolute;
  top: 84px;
  left: 0;
  background: #fff;
  z-index: 99;
}
</style>
