<template>
    <div class="admin-user-edit">
        <h1 >{{id ? '编辑': '新建'}}管理员</h1>
        <el-form label-width='120px' @submit.native.prevent="save">
          <el-form-item label="用户名">
            <el-input v-model="model.username" ref="focus"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="text" v-model="model.password"></el-input>
            <!-- 用户密码需进行单向不可逆加密  安装bcrypt 在后端模型中进行设置-->
          </el-form-item>
          <el-form-item>
            <el-button type='primary' native-type='submit'>保存</el-button>
          </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
  props: {
    id: {
      type: String
    }
  },
  data() {
    return {
      model: {}

    }
  },
  created() {
    this.id && this.fetch()

  },
  mounted() {
    //window.console.log(this.$refs.text)
    this.$refs.focus.focus()
  },
  methods: {
    async save() {
      let res
      if (this.id) {
        res = await this.$request.put(`rest/admin_users/${this.id}`,this.model)
      
      }else {
        res = await this.$request.post("rest/admin_users",this.model)
      
      }
      this.$router.push('/admin_users/list')
      this.$message({//element-ui中提供的提示方法
        type: 'success',
        message: '保存成功'
      })
      window.console.log(res)
    },
    async fetch() {
      const res = await this.$request.get(`rest/admin_users/${this.id}`)
      this.model = res.data
    },
  }
}
</script>