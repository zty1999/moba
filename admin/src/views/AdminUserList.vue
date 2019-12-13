<template>
  <div class="category-list">
    <h1>管理员列表</h1>
    <el-table  :data="items" >
      <el-table-column prop="_id" label="ID" width="240"></el-table-column>
      <el-table-column prop="username" label="用户名" width="140"></el-table-column>
			<el-table-column
      fixed="right"
      label="操作"
      width="180">
      <template slot-scope="scope">
        <el-button type="primary" size="small" @click="$router.push(`/admin_users/edit/${scope.row._id}`)">编辑</el-button>
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
      items: [{
        _id: '',
        username: {}
      }]
		}
	},
	created() {
    this.fetch(),
    this.$forceUpdate()
	},
	methods: {
		async fetch() {//获取数据
			const res =await this.$request.get('rest/admin_users')
      this.items = res.data
      window.console.log(res)
		},
    async expurgate(row) {
      this.$confirm(`是否确定删除管理员"${row.username}"?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        .then(async () => {
          const res = await this.$request.delete(`rest/admin_users/${row._id}`)//删除数据
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
<style lang="sass" scoped>

</style>