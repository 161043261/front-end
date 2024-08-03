import axios, { type AxiosInstance, type AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'
import { useTokenStore } from '@/stores'

// You can create a new instance of axios with a custom config.
const instance: AxiosInstance = axios.create({
  baseURL: '/api', // http://localhost:5173/api
  timeout: 5000
})

// You can intercept requests or responses before they are handled by then or catch.

// Add a request interceptor
instance.interceptors.request.use(
  function config(requestConfig) {
    // Do something before request is sent
    const tokenStore = useTokenStore()
    if (tokenStore.token.length > 0) {
      requestConfig.headers.Authorization = tokenStore.token // compute stateToken
    }
    return requestConfig
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error)
  })


// Add a response interceptor
instance.interceptors.response.use(
  function(response: AxiosResponse<any, any>): any {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (response.data.code == 1) {
      ElMessage.success(response.data.message)
      return response
    }
    ElMessage.error(response.data.message)
    return Promise.reject(response)
  },
  function(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    ElMessage.error(error)
    return Promise.reject(error)
  }
)

export function userRegisterService(userData: { [prop: string]: string }) {
  // instance.method(url[, data[, config]])
  return instance.post('/user/register', userData, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  })
}

export function userLoginService(userData: { [prop: string]: any }) {
  const params = new URLSearchParams()
  for (const key in userData) {
    params.append(key, userData[key])
  }
  return instance.post('/user/login', params)
}

export function articleCategoryService(config?: { headers: { [prop: string]: string } }) {
  return instance.get('/category', config)
}
