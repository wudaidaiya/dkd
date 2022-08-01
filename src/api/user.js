import request from '@/utils/request'

export function login(data){
  return request({
    url:'/user-service/user/login',
    headers: {'Content-Type': 'application/json'},
    method: 'POST',
    data,
  })
}
export function imgcode(params){
  return request({
    url:`/user-service/user/imageCode/${params}`,
  })
}
