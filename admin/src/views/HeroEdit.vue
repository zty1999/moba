<template>
  <div class="heroes-edit">
    <h1 >{{id ? '编辑': '新建'}}英雄</h1>
    <el-form label-width='120px' @submit.native.prevent="save">
    <el-tabs value='basic' type="border-card">
      <el-tab-pane label="基本信息" name="basic">
      <el-form-item label="名称">
        <el-input v-focus v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="称号">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="头像">
        <!-- action的内容表示上传的请求地址 defaults表示默认参数-->
        <el-upload 
          class="avatar-uploader" 
          :action="uploadUrl"
          :headers="getAuthHeaders()"
          :show-file-list="false"
          :on-success="res => $set(model, 'avatar', res.url)">
          <img  v-if="model.avatar" :src="model.avatar" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="Banner">
        <!-- action的内容表示上传的请求地址 defaults表示默认参数-->
        <el-upload 
          class="avatar-uploader" 
          :action="uploadUrl"
          :headers="getAuthHeaders()"
          :show-file-list="false"
          :on-success="res => $set(model, 'banner', res.url)">
          <img  v-if="model.banner" :src="model.banner" class="banner">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="类型">
        <el-select v-model="model.categories" multiple>
            <!-- multiple 属性规定输入字段可选择多个值。 -->
            <el-option 
                v-for="item of categories"  :key='item._id' 
                :label="item.name"  :value='item._id'
            >{{item.name}}
            </el-option> 
        </el-select>
      </el-form-item>
      <el-form-item label="难度">
        <el-rate style="margin-top: 0.6rem;" :max="9" show-score v-model="model.scores.difficult"></el-rate>
      </el-form-item>
      <el-form-item label="技能">
        <el-rate style="margin-top: 0.6rem;" :max="9" show-score v-model="model.scores.skills"></el-rate>
      </el-form-item>
      <el-form-item label="攻击">
        <el-rate style="margin-top: 0.6rem;" :max="9" show-score v-model="model.scores.attack"></el-rate>
      </el-form-item>
      <el-form-item label="生存">
        <el-rate style="margin-top: 0.6rem;" :max="9" show-score v-model="model.scores.survive"></el-rate>
      </el-form-item>
      <el-form-item label="顺风出装">
        <el-select v-model="model.goods1" multiple>
            <!-- multiple 属性规定输入字段可选择多个值。 -->
            <el-option 
                v-for="item of goods"  :key='item._id' 
                :label="item.name"  :value='item._id'
            >{{item.name}}
            </el-option> 
        </el-select>
      </el-form-item>
      <el-form-item label="逆风出装">
        <el-select v-model="model.goods2" multiple>
            <!-- multiple 属性规定输入字段可选择多个值。 -->
            <el-option 
                v-for="item of goods"  :key='item._id' 
                :label="item.name"  :value='item._id'
            >{{item.name}}
            </el-option> 
        </el-select>
      </el-form-item>
      <el-form-item label="使用技巧">
        <el-input type="textarea" v-model="model.usageTips"></el-input>
      </el-form-item>
      <el-form-item label="对抗技巧">
        <el-input type="textarea" v-model="model.battleTips"></el-input>
      </el-form-item>
      <el-form-item label="团战思路">
        <el-input type="textarea" v-model="model.teamTips"></el-input>
      </el-form-item>
      
    </el-tab-pane>
    <el-tab-pane label="技能管理" name="skills" >
      <el-button @click="model.skills.push({})" size='small'><i class="el-icon-plus"></i> 添加技能</el-button>
      <el-row type='flex' style="flex-wrap: wrap;">
        <el-col :md="12" v-for="(item,i) in model.skills" :key="i">
          <el-form-item label="名称" ><el-input v-model="item.name"></el-input></el-form-item>
          <el-form-item label="图标">
          <!-- action的内容表示上传的请求地址 defaults表示默认参数-->
            <el-upload 
              class="avatar-uploader" 
              :action="uploadUrl"
              :headers="getAuthHeaders()"
              :show-file-list="false"
              :on-success="res => $set(item, 'icon', res.url)">
               
              <img  v-if="item.icon" :src="item.icon" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="冷却值" ><el-input v-model="item.delay"></el-input>
          </el-form-item>
          <el-form-item label="消耗" ><el-input v-model="item.cost"></el-input>
          </el-form-item>
          <el-form-item label="描述">
            <el-input type="textarea" v-model="item.description"></el-input>
          </el-form-item>
          <el-form-item label="小提示">
            <el-input type="textarea" v-model="item.tips"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button size="small" type="danger" @click="model.skills.splice(i,1) ">删除</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-tab-pane>
    <el-tab-pane label="最佳搭档" name="partners" >
      <el-button @click="model.partners.push({})" size='small'><i class="el-icon-plus"></i> 添加英雄</el-button>
      <el-row type='flex' style="flex-wrap: wrap;">
        <el-col :md="12" v-for="(item,i) in model.partners" :key="i">
          <el-form-item label="英雄" >
            <el-select filterable v-model="item.hero">
              <el-option v-for="hero in heroes" :key="hero._id"
               :value="hero._id" :label="hero.name">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="描述">
            <el-input type="textarea" v-model="item.description"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button size="small" type="danger" @click="model.partners.splice(i,1) ">删除</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-tab-pane>
  </el-tabs>
    
      <el-form-item style="margin-top: 2rem; float: right; margin-right: 5rem;" >
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
        name: '',
        avatar: '',
        banners: '',
        scores: {
            difficult: 0,
        },
        goods1: [],
        goods2: [],
        usageTips: '',
        battleTips: '',
        teamTips: '', 
        skills: [{
          icon: '',
          name: '',
          delay: '',
          cost: '',
          description: '' ,
          tips: '',
        }],
        partners: []
      },
      categories: [],
      goods: []
    }
  },
   //局部自定义指令
  directives: {
    focus: {
      inserted(el) {
        // el.focus()//无效  原因未知 故使用下面这行代码
        el.getElementsByTagName('input')[0].focus()

      }
    }
  },
  created() {
    this.fetchCategories(),
    this.fetchGoods(),
    this.fetchHeroes(),
    this.id && this.fetch()

  },
  methods: {
    //图片上传后
    //  afterUpload(res) {
    //    window.console.log(res)
    // //    this.$set(this.model, 'avatar', res.url)
    //     this.model.avatar = res.url;
    //     //由于vue的响应式，直接增加属性，不会监听数据变化，所以使用$set()新增监听数据
    //   },
    //   // uploaded(res) {
  
    //   // },

      //删除技能
      // remove() {
      //   let i;
      //   this.model.skills.splice(i,1)
        
        
      // },
   
    async save() {
      let res
      if (this.id) {
        res = await this.$request.put(`rest/heroes/${this.id}`,this.model)
      
      }else {
        res = await this.$request.post("rest/heroes",this.model)
      
      }
      this.$router.push('/heroes/list')
      this.$message({//element-ui中提供的提示方法
        type: 'success',
        message: '保存成功'
      })
      window.console.log(res)
    },
    async fetch() {
    
      const res = await this.$request.get(`rest/heroes/${this.id}`)
    //   this.model = res.data
        this.model = Object.assign({}, this.model, res.data)//Object.assign方法用于对象的合并，方法的第一个参数是目标对象，后面的参数都是合并的源对象。
        window.console.log(res)
    },
    async fetchCategories() {
      const res = await this.$request.get(`rest/categories`)
      this.categories = res.data
    },
    async fetchGoods() {
      const res = await this.$request.get(`rest/goods`)
      this.goods = res.data
    },
    async fetchHeroes() {
      const res = await this.$request.get(`rest/heroes`)
      this.heroes = res.data
    }
  }
}
</script>
<style>

</style>