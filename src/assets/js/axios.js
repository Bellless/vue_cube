import axios from 'axios'
import qs from 'qs'
// 在config.js文件中统一存放一些公共常量，方便之后维护
import * as param from './config.js'

// 添加请求拦截器，在发送请求之前做些什么
axios.interceptors.request.use(function (config) {
  // 将请求token添加到响应头
  // let token = param.token;
  // if (token != "") {
  //   // 将token添加到请求头中
  //   config.headers.Authorization = token
  // }
  // 显示loading
  // console.log(config);
  return config
}, function (error) {
  // 请求错误时弹框提示，或做些其他事
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么，允许在数据返回客户端前，修改响应的数据
  // 如果只需要返回体中数据，则如下，如果需要全部，则 return response 即可
  return response.data
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

// 封装数据返回失败提示函数
function errorState(response) {
  // 隐藏loading
  // 如果http状态码正常，则直接返回数据
  // if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
  //   // 如果不需要除了data之外的数据，可以直接 return response.data
  //   return response.data
  // } else {
  //   alert('数据获取错误')
  // }
}

// 封装数据返回成功提示函数
function successState(res) {
  // 隐藏loading
  // 统一判断后端返回的错误码(错误码与后台协商而定)
  // if (res.data.code === '-1') {
  //   alert('请求失败！请稍后再试')
  //   return res  
  // }
  return res.data
}

// 封装axios
function apiAxios(method, url, params) {
  let httpDefault = {
    method: method,
    baseURL: param.baseURL,
    url: url,
    // `params` 是即将与请求一起发送的 URL 参数
    // `data` 是作为请求主体被发送的数据
    params: method === 'GET' || method === 'DELETE' ? params : null,
    data: method === 'POST' || method === 'PUT' ? qs.stringify(params) : null,
    timeout: 10000,
  }

  // Promise为axios请求的返回对象(特定写法)
  // resolve成功的回调函数
  // reject失败的回调函数
  return new Promise((resolve, reject) => {
    axios(httpDefault)
      // 此处的.then属于axios
      .then((res) => {
        successState(res)
        resolve(res)
      }).catch((response) => {
        errorState(response)
        reject(response)
      })
  })
}

// 公开方法install,抛出getAxios、postAxios、putAxios、delectAxios，供其他文件调用
export default {
  install: function (Vue) {
    Vue.prototype.getAxios = (url, params) => apiAxios('GET', url, params)
    Vue.prototype.postAxios = (url, params) => apiAxios('POST', url, params)
    Vue.prototype.putAxios = (url, params) => apiAxios('PUT', url, params)
    Vue.prototype.delectAxios = (url, params) => apiAxios('DELECT', url, params)
  }
}