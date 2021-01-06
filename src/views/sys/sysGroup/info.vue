<template>
  <div class="app-container">
    <el-page-header content="来料检验规范" @back="backClick(null)" />
    <div class="content1">
      <div class="title"><span class="ganggang">-</span> 基本信息</div>
      <div class="contentBody">
        <el-form ref="forms" :model="forms" :rules="rules" label-position="left" label-width="130px">
          <!--
          <el-row>
            <el-col :span="6">
              <el-form-item label="零件编号:" prop="code">
                <el-select v-model="forms.code" :disabled="type !== 'add'" placeholder="请选择零件编号" style="width: 90%;" filterable @change="handleMateriel()">
                  <el-option v-for="(item, index) in materielList" :key="index" :label="item.code" :value="index" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="零件名称:" prop="name">
                <el-input v-model="forms.name" :disabled="true" placeholder="零件名称" maxlength="20" style="width: 90%" />
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="零件图号及版本:" prop="version">
                <el-input v-model="forms.version" :disabled="type !== 'add'" placeholder="零件图号及版本" maxlength="20" style="width: 90%" />
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="客户:" prop="customer">
                <el-input v-model="forms.customer" :disabled="type !== 'add'" placeholder="客户" maxlength="20" style="width: 90%" />
              </el-form-item>
            </el-col>
          </el-row>
          -->
          <el-form-item label="维修前照片" prop="logo">
            <el-upload :action="''" :limit="4" :file-list="fileList" :before-remove="beforeRemove" :before-upload="beforeFile" :http-request="uploadImage" list-type="picture-card">
              <i class="el-icon-plus" />

            </el-upload>
            <el-input v-model="forms.logo" style="display:none" />
          </el-form-item>
          <el-form-item label="集团编码" prop="groupCode">
            <el-input v-model="forms.groupCode" placeholder="请输入集团编码" size="small" maxlength="20" @input="forms.groupCode = inputRule(forms.groupCode) " />
          </el-form-item>
          <el-form-item label="集团名称" prop="groupName">
            <el-input v-model="forms.groupName" placeholder="请输入集团名称" size="small" maxlength="20" @input="forms.groupName = inputRule(forms.groupName) " />
          </el-form-item>
          <el-form-item label="经营模式" prop="businessModel">
            <el-input v-model="forms.businessModel" placeholder="请输入经营模式" size="small" maxlength="20" @input="forms.businessModel = inputRule(forms.businessModel) " />
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="bottom">
      <el-button type="primary" @click="submitForm('forms')">保存</el-button>
    </div>
  </div>
</template>
<script>
import elDragDialog from '@/directive/el-drag-dialog' // base on element-ui
import { findSysGroupList, saveSysGroup } from '@/api/sys'
import { uploadFile } from '@/api/upload'
export default {
  name: 'IncomingStandardInfo',
  directives: { elDragDialog },
  props: {
    objstr: {
      type: Object,
      default: null
    },
    type: {
      type: String,
      default: 'add'
    }
  },
  data() {
    return {
      loading: false,
      forms: {
        groupCode: '',
        groupName: ''
      },
      rules: {
        groupCode: [{ required: true, message: '请输入集团编码', trigger: 'blur' }],
        groupName: [{ required: true, message: '请输入集团名称', trigger: 'blur' }],
        dataSource: [{ required: true, message: '请输入变更原因', trigger: 'blur' }]
      },
      uploadIndex: -1,
      fileList: [],
      uploadImg: window.configs.api,
      list: [] // 规范分类classify：0外观，1包装，2材质，3尺寸，4备注，5巡检时间
    }
  },
  computed: {},
  mounted() {
    //this.getAllCodeRequest()
  },
  methods: {
    backClick(type) {
      this.$emit('DetailCallBack', { result: type })
    },
    /**
     * 文件上传之前 判断格式
     */
    beforeFile(file) {
      const isLt2M = file.size / 1024 / 1024 < 5
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 5MB!')
        return false
      }
    },
    uploadImage(item) {
      const formDatas = new FormData()
      formDatas.append('file', item.file)
      formDatas.append('isAdd', true)
      uploadFile(formDatas).then(res => {
        if (res.code === 0) {
          this.fileList.push(res.data)
          // if (this.forms.logo) {
          //   this.forms.logo = this.forms.logo + ',' + res.data.webPath
          // } else {
          //   this.forms.logo = res.data.webPath
          // }
          const self = this
          setTimeout(() => {
            self.$refs.forms.validateField('beforeFile')
          }, 500)
          this.$message({
            type: 'success',
            message: '上传成功！'
          })
        }
      })
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    beforeRemove(file, fileList) {
      return this.$confirm('确定移除' + file.name + '？')
    },
    // handleRemove(file) {
    //   this.forms.beforeFile = ''
    //   for (let i = 0; i < this.fileList.length; i++) {
    //     if (this.fileList[i].webPath === file.webPath) {
    //       this.fileList.splice(i, 1)
    //       break
    //     } else {
    //       if (this.forms.logo) {
    //         this.forms.logo = this.forms.logo + ',' + file.webPath
    //       } else {
    //         this.forms.logo = file.webPath
    //       }
    //     }
    //   }
    // },
    /**
     * 点击下载附件
     */
    download(item) {
      const requestUrl = window.configs.api + '/attachment/downByPath?path=' + item.path
      // window.open(encodeURI(requestUrl), '_blank')
      var world = window.open(encodeURI(requestUrl))
      setTimeout(() => {
        world.close()
      }, 1000)
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
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const params = {
            groupCode: this.forms.groupCode,
            groupName: this.forms.groupName,
            businessModel: this.forms.businessModel,
            dataSource: this.forms.dataSource,
            logo: this.forms.logo,
            groupId: this.dialogTitle === '新增集团' ? null : this.currentId
          }
          saveSysGroup(params).then(res => {
            this.loading = false
            if (res.code === 0) {
              this.$message({
                message: '操作成功!',
                type: 'success'
              })
              this.backClick('1')
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
  .content1 {
    width: 100%;
    margin: 15px 0px;
    background-color: #fff;
    border: 1px solid #dfdfdf;
    border-radius: 4px;
    .title {
      padding: 10px 25px;
      /* border-bottom: 1px solid #dfdfdf; */
      font-size: 14px;
      .ganggang {
        font-size: 18px;
        display: inline-block;
        margin-right: 4px;
      }
    }
    .contentBody {
      padding: 10px 25px;
      .el-row {
        padding: 10px 0px;
      }
      ::v-deep .el-table__row {
        td {
          border-bottom: 1px solid #dfdfdf;
        }
      }
      ::v-deep .el-input.is-disabled .el-input__inner {
        color: #323232;
      }
      ::v-deep .el-textarea.is-disabled .el-textarea__inner {
        color: #323232;
      }
      ::v-deep .is-leaf {
        border-color: #dfdfdf;
      }
      ::v-deep .is-group {
        tr:nth-child(2) {
          .is-leaf {
            border-top: 1px solid #dfdfdf;
          }
        }
      }
    }
  }
  .bottom {
    padding: 20px 20px;
    text-align: right;
    background-color: #fff;
    margin-bottom: 10px;

    .el-button {
      width: 121px;
      height: 32px;
      background-color: #006fe6;
      border-radius: 4px;
      font-size: 14px;
      line-height: 7px;
    }
    .unpass {
      background-color: #fff;
      border: 1px solid #006fe6 !important;
      color: #006fe6;
    }
  }
  .linelog {
    line-height: 25px;
  }
  .logtit {
    display: inline-block;
    width: 105px;
  }
}
</style>
