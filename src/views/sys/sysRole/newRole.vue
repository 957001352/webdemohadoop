<template>
  <div class="app-container">
    <el-page-header content="新增角色" @back="backClick(null)" />
    <div class="content">
      <div class="title"><span class="ganggang">-</span> 基本信息</div>
      <div class="contentBody">
        <el-form ref="forms" :model="forms" :rules="rules" label-position="left" label-width="130px">

          <el-form-item label="角色名称" prop="groupName">
            <el-input v-model="forms.name" placeholder="请输入角色名称" size="small" maxlength="20" @input="forms.name = inputRule(forms.name) " />
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
import { saveSysRole } from '@/api/sys'
export default {
  name: 'NewRole',
  directives: { elDragDialog },
  props: {
    objstr: {
      type: Object,
      default: null
    }

  },
  data() {
    return {
      loading: false,
      type: {
        type: String,
        default: 'add'
      },
      forms: {
        name: ''
      },
      rules: {
        name: [{ required: true, message: '请输入角色', trigger: 'blur' }]
      }
    }
  },
  computed: {},
  mounted() {
    this.type = this.objstr.type
    if (this.type === 'edit') {
      this.forms = {
        name: this.objstr.name
      }
    }
  },
  methods: {
    backClick(type) {
      this.$emit('DetailCallBack', { result: type })
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const params = {
            name: this.forms.name,
            id: this.currentId
          }
          saveSysRole(params).then(res => {
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
  .content {
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
}
</style>
