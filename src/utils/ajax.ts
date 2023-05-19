import axios from 'axios'

const ajax = axios.create({
  baseURL: '/api'
})

ajax.interceptors.request.use(req => {
  return req
})

ajax.interceptors.response.use(res => {
  return res.data
})

export { ajax }
