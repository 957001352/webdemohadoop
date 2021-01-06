<template>
  <div class="app-container">
    <div class="searchInfo">
      <span class="seachname">
        集团名称:
      </span>
      <el-input v-model="searchKey.groupName" placeholder="请输集团名称" class="inputCls" clearable />
      <el-button class="primaryBtn" style="margin-left: 7px;" type="primary" @click="searchBtn">
        <svg-icon icon-class="search" /> 查询
      </el-button>
      <el-button class="resetBtn" style="margin-left: 7px;" type="default" icon="el-icon-refresh-right" @click="searchrestBtn">
        重置
      </el-button>
    </div>
    <div class="searchInfo">
      <el-button v-if="hasPermission('programmeMould/add')" class="addBtn" type="default" icon="el-icon-plus" @click="addBtn"> 新增</el-button>
      <el-button v-if="hasPermission('programmeMould/add')" class="addBtn" type="default" icon="el-icon-plus" @click="jump"> 新增嵌入</el-button>
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
        <el-table-column prop="groupCode" label="集团编码" align="center" />
        <el-table-column prop="groupName" label="集团名称" align="center" />
        <el-table-column prop="businessModel" label="经营模式" align="center">
          <template slot-scope="scope">
<!--            {{ scope.row.businessModel === '0' ? '集团': '自营' }}-->
<!--            <span v-if="scope.row.operate == 0">集团</span>-->
<!--            <span v-if="scope.row.operate == 1">自营</span>-->
            <span v-if="scope.row.businessModel !== null">{{ businessModelList[scope.row.businessModel].name }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="dataSource" label="数据来源" align="center"/>
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
    <el-dialog v-el-drag-dialog :title="dialogTitle" :visible.sync="dialogVisible" :close-on-click-modal="false" width="665px" class="dialogs" @close="resetFrom('forms')">
      <el-form ref="forms" :model="forms" :rules="rules" label-position="left" label-width="120px">
        <el-form-item label="集团编码" prop="groupCode">
          <el-input v-model="forms.groupCode" placeholder="请输入集团编码" size="small" maxlength="20" @input="forms.groupCode = inputRule(forms.groupCode) " />
        </el-form-item>
        <el-form-item label="集团名称" prop="groupName">
          <el-input v-model="forms.groupName" placeholder="请输入集团名称" size="small" maxlength="20" @input="forms.groupName = inputRule(forms.groupName) " />
        </el-form-item>
        <el-form-item label="经营模式" prop="businessModel">
          <el-select v-model="forms.businessModel" placeholder="请选择" size="small" style="width: 100%">
            <el-option v-for="(item, index) in businessModelList" :key="index" :label="item.name" :value="item.id" />
          </el-select>
        </el-form-item>
        <el-form-item label="数据来源" prop="dataSource">
          <el-select v-model="forms.dataSource" placeholder="请选择" size="small" style="width: 100%">
            <el-option v-for="(item, index) in dataSourceList" :key="index" :label="item.groupName" :value="item.groupId" />
          </el-select>
        </el-form-item>
        <el-form-item label="logo">
          <el-upload v-if="dialogTitle!=='详情'" :action="''" :before-remove="beforeRemove" :on-remove="handleRemove" :file-list="fileList" :http-request="uploadImage">
            <el-button class="primaryBtn" size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button class="defaultBtn" style="width: 120px;border-radius: 4px" @click="dialogVisible = false">取消</el-button>
        <el-button class="primaryBtn" :disabled="disabled" style="width: 120px;" type="primary" @click="submitForm('forms')">确定</el-button>
      </span>
    </el-dialog>
    <div v-if="dialogVisibles" class="repairsty">
      <info :objstr="objstr" @DetailCallBack="DetailCallBack" />
    </div>
  </div>
</template>
<script>
import { findSysGroupList, saveSysGroup, deleteSysGroup, findAllGroupList } from '@/api/sys'
import { uploadFile, findAttachList, deleteFile } from '@/api/upload'
import Pagination from '@/./components/Pagination'
import elDragDialog from '@/directive/el-drag-dialog' // base on element-ui
import info from '@/views/sys/sysGroup/info' // 维修执行
export default {
  name: 'SysGroup',
  directives: { elDragDialog },
  components: { Pagination, info },
  data() {
    return {
      loading: false,
      dialogVisible: false,
      dialogVisibles: false,
      objstr: null,
      disabled: false,
      dialogTitle: '',
      searchKey: {
        name: '',
        programme: ''
      },
      total: 0,
      pageIndex: 1,
      pageSize: 10,
      currentId: null,
      multipleSelection: [],
      maintainObjList: [],
      dataSourceList: [],
      forms: {
        name: '',
        obj: ''
      },
      businessModelList: [
        {
          id: '0',
          name: '集团'
        },
        {
          id: '1',
          name: '自营'
        }
      ],
      rules: {
        groupCode: [
          {
            required: true,
            message: '请输入集团编码',
            trigger: 'blur'
          }
        ],
        groupName: [
          {
            required: true,
            message: '请输入集团名称',
            trigger: 'blur'
          }
        ],
        businessModel: [
          {
            required: true,
            message: '请选择经营模式',
            trigger: 'blur'
          }
        ]
      },
      fileList: [],
      list: []
    }
  },
  computed: {},
  mounted() {
    this.findAllGroupList()
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
    findAllGroupList() {
      findAllGroupList().then(res => {
        this.dataSourceList = res.data ? res.data : []
      })
    },
    fetchDate() {
      this.list = []
      this.multipleSelection = []
      this.loading = true
      const params = {
        groupName: this.searchKey.groupName + '' ? this.searchKey.groupName : null,
        pageNum: this.pageIndex,
        pageSize: this.pageSize
      }
      findSysGroupList(params).then(res => {
        this.loading = false
        if (res.code === 0) {
          this.list = res.data.list
          this.total = res.data.total
        }
      })
    },
    searchBtn() {
      this.fetchDate()
    },
    searchrestBtn() {
      this.searchKey = {
        name: '',
        programme: ''
      }
      this.pageIndex = 1
      this.pageSize = 10
      this.fetchDate()
    },
    handleCurrentChange() {
      this.fetchDate()
    },
    addBtn() {
      this.dialogTitle = '新增集团'
      this.forms = {
        groupCode: '',
        groupName: '',
        businessModel: ''
      }
      this.dialogVisible = true
    },
    editBtn(item) {
      this.dialogTitle = '编辑集团'
      this.dialogVisible = true
      this.currentId = item.groupId
      if (item.logo !== null) {
          findAttachList(item.logo).then(res => {
            this.fileList = res.data
          })
      }
      this.forms = {
        groupCode: item.groupCode,
        groupName: item.groupName,
        dataSource: item.dataSource,
        businessModel: item.businessModel
      }
    },
    beforeRemove(file, fileList) {
      return this.$confirm('确定移除' + file.name + '？')
    },
    handleRemove(file, fileList) {
      deleteFile(file.id)
      return this.$confirm('确定移除' + file.name + '?')
    },
    uploadImage(item) {
      const formDatas = new FormData()
      if (this.currentId !== 0) {
        formDatas.append('dataId', this.currentId)
        formDatas.append('file', item.file)
        formDatas.append('isAdd', true)
      } else {
        formDatas.append('file', item.file)
        formDatas.append('isAdd', true)
      }
      uploadFile(formDatas).then(res => {
        if (res.code === 0) {
          this.currentId = res.data.dataId
          //this.fileList = [res.data]
          this.fileList.push(res.data)
          this.$message({
            type: 'success',
            message: '上传成功！'
          })
        }
      })
    },
    jump() {
      this.dialogVisibles = true
    },
    DetailCallBack(result) {
      this.dialogVisibles = false
      if (result.result === '1') {
        this.fetchDate()
      }
    },
    deleteAll() {
      if (this.multipleSelection.length === 0) {
        this.$message({
          message: '请选择需要删除的数据!',
          type: 'warning'
        })
        return false
      }
      const list = []
      for (const item of this.multipleSelection) {
        list.push(item.groupId)
      }
      this.$confirm('确定批量删除吗?', '操作提示', {
        confirmButtonText: '确认删除',
        cancelButtonText: '取消'
      }).then(() => {
        const params = {
          id: list.join(',')
        }
        deleteSysGroup(params).then(res => {
          this.loading = false
          if (res.code === 0) {
            this.$message({
              message: '删除成功!',
              type: 'success'
            })
            if (this.list.length === list.length && this.pageIndex > 1) {
              this.pageIndex = this.pageIndex - 1
            }
            this.fetchDate()
          } else if (res.code === 1000) {
            this.$message({
              message: res.msg,
              type: 'error'
            })
          }
        })
      })
    },
    deleteBtn(item) {
      this.$confirm('确定删除吗?', '操作提示', {
        confirmButtonText: '确认删除',
        cancelButtonText: '取消'
      }).then(() => {
        const params = {
          id: item.groupId
        }
        deleteSysGroup(params).then(res => {
          this.loading = false
          if (res.code === 0) {
            this.$message({
              message: '删除成功!',
              type: 'success'
            })
            if (this.list.length === 1 && this.pageIndex > 1) {
              this.pageIndex = this.pageIndex - 1
            }
            this.fetchDate()
          } else if (res.code === 1000) {
            this.$message({
              message: res.msg,
              type: 'error'
            })
          }
        })
      })
    },
    resetFrom(formName) {
      this.$refs[formName].resetFields()
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const params = {
            groupId: this.currentId,
            groupCode: this.forms.groupCode,
            groupName: this.forms.groupName,
            businessModel: this.forms.businessModel,
            dataSource: this.forms.dataSource,
            logo: this.currentId
            //groupId: this.dialogTitle === '新增集团' ? null : this.currentId
          }
          saveSysGroup(params).then(res => {
            this.loading = false
            if (res.code === 0) {
              this.$message({
                message: '操作成功!',
                type: 'success'
              })
              this.dialogVisible = false
              this.fetchDate()
              this.$refs[formName].resetFields()
            } else if (res.code === 1000) {
              this.$message({
                message: res.msg,
                type: 'error'
              })
            }
          })
        }
      })
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
.repairsty {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background: #fff;
  z-index: 99;
}
</style>
