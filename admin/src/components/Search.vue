<template>
  <div class="search">
    <div class="search-wrapper">
      <input type="text" v-model="searchVal" placeholder="search...">
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: []
      //从接口中获取的数据，原数组
    }
  },
  computed: {//v-for中绑定的为newitems新数组
    newitems() {
      return this.items.filter((item) => {
        return item.name.includes(this.searchVal)
      })
      // es6的字符串新特性.startsWith=> 调用方法的字符串是否以括号里的字符串开头
      //filter js自带方法 => 数组过滤筛选（遍历数组，将满足条件的元素添加到新数组中，并返回新数组）
      //var arr = [].filter((item) => {retun 条件})
      //数组方法所以由数组调用filter方法   item是被便利的元素
      //数组元素.name是否以this.searchVal开头,把该元素保存在新数组中
      //过滤筛选后得到一个新数组，返回
      // return this.items;
    }    

  },
}
</script>
<style lang="scss" scoped>
  .search-wrapper {
    display: flex;
    justify-content: center;
    input {
      padding: 5px 10px;
      border: none;
      border-bottom: 1px solid #eee;
    }
  }
</style>