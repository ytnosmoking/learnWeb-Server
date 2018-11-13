<template>
 <div>
   <!-- this is top100 -->

   <el-button @click="addGoods">添加20条数据</el-button>
   <br>
   <br>
   <!-- <div style="text-align:left;">
      条件1：<br>
       <el-input type="text" v-model="body.name" placeholder="name:"></el-input> <br>
      性别： <el-radio v-model="body.sex" label="1">男</el-radio>
            <el-radio v-model="body.sex" label="0">女</el-radio> <br>
      star：<el-input-number v-model="body.star"  :min="0" :max="5000" label="star"></el-input-number><br>
      money$: <el-input-number v-model="body.money"  :min="0" :max="5000" label="money"></el-input-number><br>
   </div> -->
   <el-form :model="form" label-width="60px" labelPosition="left" size="small" style="width:300px">
      <el-form-item label="姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-radio-group v-model="form.sex">
          <el-radio label="1" >男</el-radio>
          <el-radio label="0" >女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="star">
        <el-rate
          :max="10"
          :icon-classes="['el-icon-web-lessmoney', 'el-icon-web-littlemoney', 'el-icon-web-somemoney']"
          void-icon-class="el-icon-web-lessmoney"
          v-model="form.star"></el-rate>
        <!-- <el-input-number v-model="form.star"  :min="0" :max="5000" ></el-input-number> -->
      </el-form-item>
      <el-form-item label="money">
        <!-- <el-input-number v-model="form.money"  :min="0" :max="5000"></el-input-number> -->
        <el-slider v-model="form.money"
          :max="50"
          show-input
          input-size="mini"
        ></el-slider>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="getGoods">查询</el-button>
      </el-form-item>
   </el-form>

   <div style="margin-bottom:20px;"> 查询结果数据 <el-button>{{goods.length}}</el-button> </div>
    <ul v-show="goods.length!=0">
      <li v-for="(good, index) in goods" :key="good._id"
        class="fl">
        <el-form :model="good" label-width="60px" labelPosition="left" size="small" style="width:200px">
          <el-form-item label="姓名">
            <el-input v-model="good.name"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="sex">
            <el-radio-group v-model="good.sex">
              <el-radio label="1" >男</el-radio>
              <el-radio label="0" >女</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="star">
            <el-rate
              :max="10"
              :icon-classes="['el-icon-web-lessmoney', 'el-icon-web-littlemoney', 'el-icon-web-somemoney']"
              void-icon-class="el-icon-web-lessmoney"

              v-model="good.star">
            </el-rate>
          </el-form-item>
          <el-form-item label="money">
            <el-slider v-model="good.money" :max="50"></el-slider>
            <!-- <el-input-number v-model="good.money"  :min="0" :max="5000"></el-input-number> -->
          </el-form-item>
          <el-form-item label="图像" class="uploadImg">
            <el-upload
              class="upload-demo"
              action="/upload/single"
              :data={id:good._id}
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :on-success="uploadSuccess"
              :show-file-list="false"
              list-type="picture">
              <img v-if="good.url" :src="'http://localhost:3000/'+good.url" alt="">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
        </el-form>
        <div class="el-icon-delete delGood Warning" @click="delGood(good, index)"></div>
        <div class="el-icon-edit editGood Danger" @click="updateGood(good)"></div>
      </li>
    </ul>
 </div>
</template>

<script>
export default {
  name: 'Top100',
  data () {
    return {
      goods: [],
      form: {
        name: '',
        sex: '1',
        star: 0,
        money: 0
      }
    }
  },
  methods: {
    // 增加
    addGoods () {
      this.$store.dispatch('addGoods').then(res => {
        const h = this.$createElement
        this.$notify({
          title: '消息提示',
          message: h('i', { style: 'color: teal' }, res.result.msg)
        })
      })
    },
    // 查
    getGoods () {
      // const name = this.name
      console.log(this.form)
      let params = {}
      for (let key in this.form) {
        if (this.form[key]) {
          params[key] = this.form[key]
        }
      }
      this.$store.dispatch('getGoods', params).then(res => {
        console.log(res)
        this.goods = res
      })
    },
    // 删除
    delGood (good, index) {
      console.log(good)

      this.$store.dispatch('delGood', good).then(res => {
        console.log(res)
        if (res.n === 1) {
          this.goods.splice(index, 1)
        }
      })
    },
    // 更改
    updateGood (good) {
      console.log(good)
      this.$store.dispatch('updateGood', good).then(res => {
        console.log(res)
      })
    },
    // upload
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    uploadSuccess (result) {
      // console.log(res)
      const res = result.result
      this.goods = this.goods.map(good => {
        if (res.id === good._id) {
          good.url = res.files
        }
        return good
      })
      console.log(this.goods)
      // console.log(good)
    }
  }
}
</script>

<style lang='less' scoped>
ul {
  & > li {
    position: relative;
    padding: 10px;
    margin: 0 20px 30px 0;
    border: 1px solid #ccc;
    // height: 60px;
    box-sizing: border-box;
    .uploadImg {
      height: 60px;
      line-height: 60px;
      img {
        height: 60px;
      }
    }
    & > div {
      position: absolute;
      width: 20px;
      height: 20px;

      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      cursor: pointer;
      color: #fff;
      transition: all 0.3s ease;

      &.delGood {
        top: 0;
        right: 0;
        transform: translate(50%, -50%);

        &:hover {
          transform: translate(50%, -50%) scale(1.3);
        }
      }
      &.editGood {
        bottom: 0;
        right: 0;
        transform: translate(50%, 50%);

        &:hover {
          transform: translate(50%, 50%) scale(1.3);
        }
      }
    }
  }
}
.Warning {
  background-color: #e6a23c;
}
.Danger {
  background-color: #f56c6c;
}
</style>
