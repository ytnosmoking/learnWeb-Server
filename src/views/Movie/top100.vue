<template>
 <div>
   this is top100

   <el-button @click="addGoods">添加20条数据</el-button>
   <br>
   <br>
   <div style="text-align:left;">
      条件1：<br>
       <el-input type="text" v-model="body.name" placeholder="name:"></el-input> <br>
      性别： <el-radio v-model="body.sex" label="1">男</el-radio>
            <el-radio v-model="body.sex" label="0">女</el-radio> <br>
      star：<el-input-number v-model="body.star"  :min="0" :max="5000" label="star"></el-input-number><br>
      money$: <el-input-number v-model="body.money"  :min="0" :max="5000" label="money"></el-input-number><br>
   </div>

   <el-button @click="getGoods">获取部分数据</el-button>

  <div class="clearfix"></div>
    <ul
      style="text-align:left;margin:0 20px 40px 0;padding:0 10px;border:1px solid red;"
      v-show="goods.length!=0"
      v-for="(good, index) in goods"
      :key="good._id"
      class="fl singleDetail"
      >
      <li>
        <el-input type="text" v-model="good.name" placeholder="name:"></el-input>
      </li>
      <li>sex:
        <el-radio v-model="good.sex" label="1">男</el-radio>
        <el-radio v-model="good.sex" label="0">女</el-radio>
      </li>

      <li>star:
        <el-input-number
          v-model="good.star"
          :min="0" :max="5000" label="star"></el-input-number>
      </li>
      <li>money:
        <el-input-number
          v-model="good.money"
          :min="0" :max="5000" label="money"></el-input-number>
      </li>
      <li>
        <el-upload
          v-if="!good.url"
          class="upload-demo"
          action="/upload/single"
          :data={id:good._id}
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :on-success="uploadSuccess"
          :show-file-list="false"
          list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
        <img v-else v-lazy="'http://localhost:3000/'+good.url" alt="">
      </li>
      <li class="el-icon-delete" @click="delGood(good, index)"></li>
      <li class="el-icon-edit" @click="updateGood(good)"></li>

    </ul>
  <div> this is upload</div>

  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>

 </div>
</template>

<script>
export default {
  name: 'Top100',
  data () {
    return {
      goods: [],
      body: {
        name: '',
        sex: '1',
        star: 0,
        money: 0
      }
      // fileList2: [],
      // headers: {
      //   'Content-Type': 'multipart/form-data'
      // }
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
      console.log(this.body)
      let params = {}
      for (let key in this.body) {
        if (this.body[key]) {
          params[key] = this.body[key]
        }
      }
      this.$store.dispatch('getGoods', params).then(res => {
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
        // if (res.n === 1) {
        //   this.goods.splice(index, 1)
        // }
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
          good.url = res.files.file.path
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
  position: relative;
  &.singleDetail > li {
    padding: 10px;
    height: 60px;
    box-sizing: border-box;
    & > img,
    & > div {
      height: 100%;
    }
  }
  & > li:nth-child(n + 6) {
    width: 20px;
    height: 20px;
    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;
    // border: 1px solid #000;
    border-radius: 50%;
    cursor: pointer;
    background-color: #ccc;
    transition: all 0.3s ease;
    &:hover {
      transform: translate(50%, -50%) scale(1.3);
    }
  }
  & > li:nth-child(6) {
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
  }
  & > li:nth-child(7) {
    bottom: 0;
    right: 0;
    transform: translate(50%, 50%);
    &:hover {
      transform: translate(50%, 50%) scale(1.3);
    }
  }
}
</style>
