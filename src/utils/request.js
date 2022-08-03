import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
})
service.interceptors.request.use(
  (config) =>{
    // 判断token是否存在
    console.log(store.state.user.token);
    if(store.state.user.token){
        // 配置请求头
        config.headers.Authorization = store.state.user.token
    }
    return config
}
) // 请求拦截器
service.interceptors.response.use(
//   (res) => {
//   const { success,data,message } = res.data
//   // 如果success成功则返回data
//   if(success){
//       return data
//   }
//   // success错误否则返回
//   Message.error(message)
//   return Promise.reject(new Error(message))
// },
// // 如果响应错误
// function(error){
//   Message.error('系统异常')
//   return Promise.reject(error)
// }
) // 响应拦截器
export default service // 导出axios实例