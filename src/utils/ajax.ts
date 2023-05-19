import Taro from '@tarojs/taro'
import axios from 'axios'

const ajax = axios.create({
  baseURL:
    Taro.getEnv() === Taro.ENV_TYPE.WEB ? '/api' : 'http://127.0.0.1:9527/api'
})

ajax.interceptors.request.use(req => {
  return req
})

ajax.interceptors.response.use(res => {
  return res.data
})

export { ajax }
