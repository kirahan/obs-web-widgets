import { loginToken } from '@/states'
import axios from 'axios'

axios.defaults.timeout = 0 // 请求超时时间
axios.defaults.withCredentials = true // 请求携带cookie
axios.defaults.baseURL = import.meta.env.VITE_API_HOST
console.log('axios.defaults.baseURL',axios.defaults.baseURL)

// 如果请求地址不是登录地址，给请求添加token
axios.interceptors.request.use(
  config =>{
    // 查看token是否存在
    const token = localStorage.getItem('token') || loginToken.value
    console.log('config.url',config.url)
    if(token && config.url!='/api/v1/token'){
      // @ts-ignore
      config.headers.Authorization ='Bearer '+ token;
    }
    return config
  }
)


// 拦截器
axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response)
    } else {
      console.log('[request failed]',response)
      return Promise.reject(response)
    }
  },
  error => {
    return Promise.reject(error.response || 'Network Error')
  }
)

/**
 * 封装get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
const axiso_get = (url: string, params = {})=>{
    return new Promise((resolve, reject) => {
        axios.get(url, { params }).then(res => {
          resolve(res.data)
        }).catch(err => {
          reject(err.data)
        })
      })
}


/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
const axiso_post = (url: string, params = {}) => {
  return new Promise((resolve, reject) => {
    axios.post(url, params).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}

export { axiso_get, axiso_post }
