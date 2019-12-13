<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<!-- <template>
     <!-- <div class="article-list"> -->
        <!-- <h1 >{{id ? '编辑': '新建'}}文章</h1>
        <el-form label-width='120px' @submit.native.prevent="save">
          <el-form-item label="所属分类">
            <el-select v-model="model.categories" multiple>
              <el-option  
                v-for="item of categories "
                :key="item._id"
                :label="item.name"
                :value="item._id">
              </el-option>  
            </el-select>
          </el-form-item>
          <el-form-item label="标题">
            <el-input v-model="model.title"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type='primary' native-type='submit'>保存</el-button>
          </el-form-item>
        </el-form> -->
    <!-- </div>
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
        categories: [],
      },
      categories: []
    }
  },
  created() {
    this.id && this.fetch(),
    this.fetchCategories()
  },
  methods: {
    async save() {
      let res 
      if (this.id) {
        res = await this.$request.put(`rest/articles/${this.id}`,this.model)
      
      }else {
        res = await this.$request.post("rest/articles",this.model)
      
      }
      this.$router.push('/articles/list')
      this.$message({//element-ui中提供的提示方法
        type: 'success',
        message: '保存成功'
      })
      window.console.log(res)
    },
    async fetch() {
      const res = await this.$request.get(`rest/articles/${this.id}`)
      this.model = res.data
    },
    async fetchCategories() {
      const res = await this.$request.get(`rest/categories`)
      this.categories = res.data
    }
  }
}
</script> -->






<template>
  <!-- <div class="article-list"> -->
    <!-- <h1>文章列表</h1>
    <el-table :data="items" >
      <el-table-column prop="_id" label="ID" width="240"></el-table-column> -->
      <!-- <el-table-column prop="categories.title" label="所属分类" width="240"></el-table-column> -->
      <!-- <el-table-column prop="title" label="标题" width="140"></el-table-column>
			<el-table-column
      fixed="right"
      label="操作"
      width="180">
      <template slot-scope="scope">
        <el-button type="primary" size="small" @click="$router.push(`/articles/edit/${scope.row._id}`)">编辑</el-button>
        <el-button type="danger" size="small"  @click="expurgate(scope.row)">删除</el-button> -->
        <!-- scope.row 表示当前一行的数据 -->
      <!-- </template> -->
  <!-- //     </el-table-column>
  //   </el-table>
  // </div> -->
</template>
<script>
export default {
  data() {
		return {
			items: []
		}
	},
	created() {
    this.fetch()
	},
	// methods: {
	// 	async fetch() {//获取数据
	// 		const res =await this.$request.get('rest/articles')
	// 		this.items = res.data
  //   },
  //   async expurgate(row) {
  //     this.$confirm(`是否确定删除文章"${row.title}"?`, '提示', {
  //         confirmButtonText: '确定',
  //         cancelButtonText: '取消',
  //         type: 'warning'
  //       })
  //       .then(async () => {
  //         const res = await this.$request.delete(`rest/articles/${row._id}`)//删除数据
  //         this.$message({
  //           type: 'success',
  //           message: '删除成功!'
  //         });
  //         this.fetch()//数据删除后更新页面
  //         window.console.log(res)//原本不需要打印，但是res声明后不调用会报错
  //       })
      
  //   }
	// },
}
</script>