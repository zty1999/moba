<template>
  <div class="about">
    <h1>{{id ? '编辑' : '新建'}}文章</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="所属分类">
        <el-select v-model="model.categories" multiple>
          <el-option
            v-for="item in categories"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="详情">
        <vue-editor id="editor" v-model="model.body" useCustomImageHandler @image-added="handleImageAdded" ></vue-editor>
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
    id: {}
  },
  data() {
    return {
      model: {
        categories: []

      },
      categories: [],
    };
  },
  methods: {
    async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      //富文本编辑器的图片上传  编辑器自带图片上传使用base64进行编码存储在接口中，使接口体积变大
      const formData = new FormData();
      formData.append("file", file);
      const res = await this.$request.post("upload", formData);
      Editor.insertEmbed(cursorLocation, "image", res.data.url);
      resetUploader();
   
    },
    async save() {
      let res
      if (this.id) {
        res = await this.$request.put(`rest/articles/${this.id}`, this.model);window.console.log(res)
      } else {
        res = await this.$request.post('rest/articles', this.model);window.console.log(res)
      }
      this.$router.push("/articles/list");
      this.$message({
        type: "success",
        message: "保存成功"
      });
      
    },
    async fetch() {
      const res = await this.$request.get(`rest/articles/${this.id}`);
      this.model = res.data;
    },
    async fetchCatgories() {
      const res = await this.$request.get(`rest/categories`);
      this.categories = res.data;
    }
  },
  created() {
    this.fetchCatgories();
    this.id && this.fetch();
  }
};
</script>