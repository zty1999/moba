<template>
  <div class="category-list">
    <h1>广告位列表</h1>
    <el-table :data="items" >
      <!-- <el-table-column prop="_id" label="ID" width="240"></el-table-column> -->
      <el-table-column prop="name" label="广告位名称" width="140"></el-table-column>
      <el-table-column class="empty"></el-table-column>
			<el-table-column
      fixed="right"
      label="操作"
      width="180">
      <template slot-scope="scope">
        <el-button type="primary" size="small" @click="$router.push(`edit/${scope.row._id}`)">编辑</el-button>
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
			items: []
		}
	},
	created() {
		this.fetch()
	},
	methods: {
		async fetch() {//获取数据
			const res =await this.$request.get('rest/ads')
			this.items = res.data
		},
    async expurgate(row) {
      this.$confirm(`是否确定删除广告"${row.name}"?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        .then(async () => {
          const res = await this.$request.delete(`rest/ads/${row._id}`)//删除数据
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
<style scoped>
.empty {
  flex:1;
}
</style>