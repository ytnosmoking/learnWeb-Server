<template>
  <div class="content">

    <el-form ref="form" :model="form" class="form" label-width="80px">
      <h3>登录</h3>
      <el-form-item label="用户名">
        <el-input v-model="form.username"/>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" type="password" @keyup.enter.native="login"/>
      </el-form-item>

      <el-button type="primary" @click="login">登录</el-button>
    </el-form>
  </div>
</template>

<script>
// eslint-disable-next-line
import { setToken } from "@/utils/tools";
// import { configRouter } from '@/router/config';

export default {
  name: 'Login',
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login', this.form).then(res => {
        if (res && res.token) {
          setToken(res.token)
          // this.$router.addRoutes(configRouter);
          console.log(this.$router)
          this.$router.push({ path: '/' })
        }
      })
    }
  }
}
</script>

<style lang='less' scoped>
.content {
  height: 100%;
  background: #409eff;
  display: grid;
  justify-content: center;
  align-content: center;
  .form {
    text-align: center;
    & > h3 {
      height: 80px;
      line-height: 80px;
      font-size: 24px;
      font-weight: bold;
    }
    width: 400px;
    height: 300px;
    padding: 0 20px 10px 10px;
    box-sizing: border-box;
    background-color: #fff;

    border-radius: 5px;

    box-shadow: 0 1px 3px #000;
    transition: all 0.3s ease;
    &:hover {
      box-shadow: 2px 5px 10px #000;
    }
  }
}
</style>
