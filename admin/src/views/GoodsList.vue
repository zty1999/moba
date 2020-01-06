<template>
  <div>
    <header class="page-header">
      <h2>物品列表</h2>
      <div class="search-wrapper">
        <input type="text" v-model="searchVal" placeholder="search...">
      </div>
    </header>
    <el-table :data="newitems" class="list-box">
      <!-- <el-table-column prop="_id" label="ID" width="240"></el-table-column> -->
      <el-table-column prop="name" label="物品名称" width="200"></el-table-column>
      <el-table-column prop="icon" label="图标" width="200">
        <template slot-scope="scope">
          <img :src="scope.row.icon" alt="" style="height: 3rem; width: 3rem;">
        </template>
      </el-table-column>
      <el-table-column   class="empty">
      </el-table-column>
			<el-table-column 
      fixed="right"
      label="操作"
      width="180">
      <template slot-scope="scope">
        <el-button type="primary" size="small" @click="$router.push(`/goods/edit/${scope.row._id}`)">编辑</el-button>
        <el-button type="danger" size="small"  @click="expurgate(scope.row)">删除</el-button>
         <!-- scope.row 表示当前一行的数据  -->
      </template>
      </el-table-column>
    </el-table>
  <!-- <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage1"
      :hide-on-single-page="value"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="100"
      layout="sizes, prev, pager, next, jumper"
      :total="200">
    </el-pagination>
  </div> -->
  </div>
</template>
<script>
export default {
  data() {
		return {
      //接口中获取的数据
      items: [],
      currentPage1: 1,
      value: true,
      //搜索输入框绑定的数据
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
			const res =await this.$request.get('rest/goods')
			this.items = res.data
		},
    async expurgate(row) {
      this.$confirm(`是否确定删除物品"${row.name}"?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        .then(async () => {
          const res = await this.$request.delete(`rest/goods/${row._id}`)//删除数据
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.fetch()//数据删除后更新页面
          window.console.log(res)//原本不需要打印，但是声明后不调用会报错
        })
      
    },
    handleSizeChange(val) {
        window.console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        window.console.log(`当前页: ${val}`);
      }

	
	},


}
</script>
<style lang="scss">
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
.list-box {
  margin-bottom: 20px;
}
.empty {
  flex: 1;
}
.el-pagination {
  float: right;
  padding: 30px 0;
}
</style>