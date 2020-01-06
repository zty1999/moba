<template>
  <div class="category-edit">
    <h1>{{id ? '编辑': '新建'}}物品</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name" ref="text"></el-input>
      </el-form-item>
      <el-form-item label="图标">
        <!-- action的内容表示上传的请求地址 defaults表示默认参数-->
        <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          :headers="getAuthHeaders()"
          :show-file-list="false"
          :on-success="afterUpload"
        >
          <img v-if="model.icon" :src="model.icon" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
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
      model: {},
    }
  },
  created() {
    this.id && this.fetch()

  },
  mounted() {
    //window.console.log(this.$refs.text)
    this.$refs.text.focus()
  },
  methods: {
     afterUpload(res) {
       window.console.log(res)
       this.$set(this.model, 'icon', res.url)
        // this.model.icon = res.url;
        //由于vue的响应式，直接增加属性，不会监听数据变化，所以使用$set()新增监听数据
      },
    async save() {
      let res;
     if(this.id) {
        res = await this.$request.put(`rest/goods/${this.id}`,this.model)

      } else {
        res = await this.$request.post("rest/goods",this.model)
  
      }
      this.$router.push('/goods/list')
      this.$message({//element-ui中提供的提示方法
        type: 'success',
        message: '保存成功'
      })
      window.console.log(res)
    },
    async fetch() {
      const res = await this.$request.get(`rest/goods/${this.id}`)
      this.model = res.data
    },
  }
}
</script>
<style>
</style>