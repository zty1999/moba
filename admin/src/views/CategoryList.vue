<template>
  <div class="category-list">
    <header class="page-header">
      <h2>分类列表</h2>
      <div class="search-wrapper">
        <input type="text" v-model="searchVal" placeholder="search...">
      </div>
    </header>
    <el-table :data="items" >
      <!-- <el-table-column prop="_id" label="ID" width="240"></el-table-column> -->
      <el-table-column prop="parent.name" label="上级分类" width="240"></el-table-column>
      <el-table-column prop="name" label="分类名称" width="140"></el-table-column>
      <el-table-column class="empty"></el-table-column>
			<el-table-column
      fixed="right"
      label="操作"
      width="180">
      <template slot-scope="scope">
        <el-button type="primary" size="small" @click="$router.push(`/category/edit/${scope.row._id}`)">编辑</el-button>
        <el-button type="danger" size="small"  @click="expurgate(scope.row)">删除</el-button>
        <!-- scope.row 表示当前一行的数据 -->
      </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
		return {
      items: [],
      searchVal: '',
      
		}
	},
	created() {
		this.fetch()
  },
  computed: {
    //搜索功能
    newitems() {
      return this.items.filter((item) => {
        return item.name.includes(this.searchVal)
      })
    }    

  },
	methods: {
		async fetch() {//获取数据
			const res =await this.$request.get('rest/categories')
			this.items = res.data
		},
    async expurgate(row) {
      this.$confirm(`是否确定删除分类"${row.name}"?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        .then(async () => {
          const res = await this.$request.delete(`rest/categories/${row._id}`)//删除数据
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.fetch()//数据删除后更新页面
          window.console.log(res)//原本不需要打印，但是res声明后不调用会报错
        })
      
    }

	
	},


}
</script>
<style lang="scss" scoped>
.page-header {
  display: flex;
  align-items: center;
  padding: 0 20px;
  h2 {
    flex: 1;
  }
  .search-wrapper {
    display: flex;
    justify-content: center;
    flex: 1;
    input {
      padding: 5px 10px;
      border: none;
      border-bottom: 1px solid #eee;
    }
  }
}
.empty {
  flex: 1;
}
</style>