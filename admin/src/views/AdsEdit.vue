<template>
  <div class="ads-edit">
    <h1 >{{id ? '编辑': '新建'}}广告位</h1>
    <el-form label-width='120px' @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name" ref="focus"></el-input>
      </el-form-item>
      <el-form-item label="广告">
      <el-button @click="model.items.push({})" size='small'><i class="el-icon-plus"></i> 添加广告</el-button>
      <el-row type='flex' style="flex-wrap: wrap;">
        <el-col :md="24" v-for="(item,i) in model.items" :key="i">
          <el-form-item label="跳转链接（URL）" ><el-input v-model="item.url"></el-input></el-form-item>
          <el-form-item label="图片" style="margin: 1rem;" >
          <!-- action的内容表示上传的请求地址 defaults表示默认参数-->
            <el-upload 
              class="avatar-uploader" 
              :action="uploadUrl"
              :headers="getAuthHeaders()"
              :show-file-list="false"
              :on-success="res => $set(item, 'image', res.url)">       
              <img  v-if="item.image" :src="item.image" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item>
            <el-button size="small" type="danger" @click="model.items.splice(i,1) ">删除</el-button>
          </el-form-item>
        </el-col>
      </el-row>
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
      model: {
        items: []
      },
      
    }
  },
  mounted() {
    //window.console.log(this.$refs.text)
    this.$refs.focus.focus()
  },
  created() {
    this.id && this.fetch()
  },
  methods: {
    async save() {
      let res
      if (this.id) {
        res = await this.$request.put(`rest/ads/${this.id}`,this.model)
      
      }else {
        res = await this.$request.post("rest/ads",this.model)
      
      }
      this.$router.push('/ads/list')
      this.$message({//element-ui中提供的提示方法
        type: 'success',
        message: '保存成功'
      })
      window.console.log(res)
    },
    async fetch() {
      const res = await this.$request.get(`rest/ads/${this.id}`)
      this.model = Object.assign({},this.model,res.data)
    },
  }
}
</script>