import axios, { type AxiosInstance, type AxiosResponse } from 'axios'
import type { ResponseData } from '@/types'
import { ElMessage } from 'element-plus'

// You can create a new instance of axios with a custom config.
const instance: AxiosInstance = axios.create({
  baseURL: '/api', // http://localhost:5173/api
  timeout: 5000
})

// You can intercept requests or responses before they are handled by then or catch.
instance.interceptors.response.use(
  function(response: AxiosResponse): ResponseData | Promise<AxiosResponse> {
    if (response.data.code == 0) {
      ElMessage.success(response.data.message.toUpperCase())
      return response.data // ResponseData
    }
    ElMessage.error(response.data.message.toUpperCase())
    return Promise.reject(response.data) // Promise<AxiosResponse>
  },
  function(error): Promise<AxiosResponse> {
    ElMessage.error(error.toUpperCase())
    return Promise.reject(error) // Promise<AxiosResponse>
  }
)

export function userRegisterService(userData: { [key: string]: any }): ResponseData | Promise<AxiosResponse> {
  // instance.method(url[, data[, config]])
  return instance.post('/user/register', userData, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  })
}

export function userLoginService(userData: { [key: string]: any }): ResponseData | Promise<AxiosResponse> {
  const params = new URLSearchParams()
  for (const key in userData) {
    params.append(key, userData[key])
  }
  return instance.post('/user/login', params)
}
