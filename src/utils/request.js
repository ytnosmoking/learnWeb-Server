import axios from 'axios'
import {
  Message,
  Loading
} from 'element-ui'
// import store from '@/store'

const BASE_URL = process.env.NODE_ENV === 'production'
  ? 'http://test.fqweb.pms.efanghang.com' : ''

const service = axios.create({
  baseURL: BASE_URL,
  timeout: 10000
})
let loadingService

service.interceptors.request.use(config => {
  loadingService = Loading.service({
    lock: true,
    text: 'Loading',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  })
  return config
}, err => {
  console.log(err)
  Promise.reject(err)
})

service.interceptors.response.use(response => {
  loadingService.close()
  // console.log(response)
  return response.data
}, error => {
  loadingService.close()
  console.log('error=' + error)
  Message({
    message: error.message,
    type: 'error',
    duration: 3 * 1000
  })
  return Promise.reject(error)
})

export default service
