<template>
  <div class="app-container">
    <div class="searchInfo">
      <span class="seachname">
        品牌名称:
      </span>
      <el-input v-model="searchKey.name" placeholder="请输品牌名称" class="inputCls" clearable />
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
        <el-table-column prop="groupName" label="所属集团" align="center"/>
        <el-table-column prop="brandCode" label="品牌编码" align="center" />
        <el-table-column prop="name" label="品牌名称" align="center" />
        <el-table-column prop="operationModel" label="运营模式" align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.operationModel !== null">{{ operationModelList[scope.row.operationModel].name }}</span>
          </template>
        </el-table-column>
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
        <el-form-item label="所属集团" prop="groupId">
          <el-select v-model="forms.groupId" placeholder="请选择" size="small" style="width: 100%">
            <el-option v-for="(item, index) in sysGroupList" :key="index" :label="item.groupName" :value="item.groupId" />
          </el-select>
        </el-form-item>
        <el-form-item label="品牌编码" prop="brandCode">
          <el-input v-model="forms.brandCode" placeholder="请输入品牌编码" size="small" maxlength="20" @input="forms.brandCode = inputRule(forms.brandCode) " />
        </el-form-item>
        <el-form-item label="品牌名称" prop="name">
          <el-input v-model="forms.name" placeholder="请输入品牌名称" size="small" maxlength="20" @input="forms.name = inputRule(forms.name) " />
        </el-form-item>
        <el-form-item label="运营模式" prop="operationModel">
          <el-select v-model="forms.operationModel" placeholder="请选择" size="small" style="width: 100%">
            <el-option v-for="(item, index) in operationModelList" :key="index" :label="item.name" :value="item.id" />
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button class="defaultBtn" style="width: 120px;border-radius: 4px" @click="dialogVisible = false">取消</el-button>
        <el-button class="primaryBtn" :disabled="disabled" style="width: 120px;" type="primary" @click="submitForm('forms')">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { findAllGroupList } from '@/api/sys'
import { saveBtn, deleteBtn, deleteBatch, findPageList } from '@/api/common'
import Pagination from '@/./components/Pagination'
import elDragDialog from '@/directive/el-drag-dialog' // base on element-ui
export default {
  name: 'SysBrand',
  directives: { elDragDialog },
  components: { Pagination },
  data() {
    return {
      loading: false,
      dialogVisible: false,
      disabled: false,
      dialogTitle: '',
      searchKey: {},
      total: 0,
      pageIndex: 1,
      pageSize: 10,
      currentId: null,
      multipleSelection: [],
      forms: {},
      operationModelList: [
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
        groupId: [
          {
            required: true,
            message: '请选择所属集团',
            trigger: 'blur'
          }
        ],
        brandCode: [
          {
            required: true,
            message: '请输入品牌编码',
            trigger: 'blur'
          }
        ],
        name: [
          {
            required: true,
            message: '请输入品牌名称',
            trigger: 'blur'
          }
        ],
        operationModel: [
          {
            required: true,
            message: '请选择运营模式',
            trigger: 'blur'
          }
        ]
      },
      sysGroupList: [],
      list: []
    }
  },
  computed: {},
  mounted() {
    this.findAllGroupList()
    this.fetchDate()
  },
  methods: {
    findAllGroupList() {
      findAllGroupList().then(res => {
        this.sysGroupList = res.data ? res.data : []
      })
    },
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
      findPageList(this, params, '/sysBrand/findPageList')
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
    addBtn() {
      this.dialogTitle = '新增品牌'
      this.forms = {
        groupId: '',
        brandCode: '',
        name: '',
        operationModel: ''
      }
      this.dialogVisible = true
    },
    editBtn(item) {
      this.dialogTitle = '编辑品牌'
      this.dialogVisible = true
      this.currentId = item.id
      this.forms = {
        groupId: item.groupId,
        brandCode: item.brandCode,
        name: item.name,
        operationModel: item.operationModel
      }
    },
    deleteAll() {
      deleteBatch(this, '/sysBrand/delete')
    },
    deleteBtn(item) {
      deleteBtn(this, { id: item.id }, '/sysBrand/delete')
    },
    resetFrom(formName) {
      this.$refs[formName].resetFields()
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const params = {
            groupId: this.forms.groupId,
            brandCode: this.forms.brandCode,
            name: this.forms.name,
            operationModel: this.forms.operationModel,
            id: this.currentId
          }
          saveBtn(this, formName, params, '/sysBrand/save')
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
