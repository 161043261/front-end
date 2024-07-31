import axios, { type AxiosInstance } from 'axios'

// You can create a new instance of axios with a custom config.
const instance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 5000
})

// You can intercept requests or responses before they are handled by then or catch.
instance.interceptors.response.use(
  function(response) {
    return response
  },
  function(error) {
    console.log(error)
    return Promise.reject(error)
  }
)

function userRegisterService(registerData: { [key: string]: any }) {
  const params = new URLSearchParams()
  for (const key in registerData) {
    params.append(key, registerData[key])
  }
  // instance.method(url[, data[, config]])
  return instance.post('user/register', registerData)
}

export default {
  userRegisterService
}
