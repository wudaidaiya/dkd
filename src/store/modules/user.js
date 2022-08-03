import { login,imgcode,getUserInfoApi} from '@/api/user'

export default {
  namespaced:true,
  state:{
    token:'',
    imgcode:'',
    // 用户信息
    userInfo:{}
  },
  mutations: { 
    setimgcode(state,payload){
      state.imgcode = `http://localhost:9528/api${payload}`
      // console.log(state.imgcode);
    },
     
    setToken(state,payload){
      state.token = payload
      console.log(state.token);
    },
    setUserInfo(state,payload){
       state.userInfo = payload
      console.log(state.userInfo);

    }
  },
  actions: {
    async getimgcode(context,payload){
      const res = await imgcode(payload)
      // console.log(res);
      context.commit('setimgcode',res.config.url)
    },
    async getToken(context,payload){
      const res = await login(payload)
      console.log(res.data.token)
      context.commit('setToken',res.data.token)
      console.log(res.data.userId)
      const res1 = await getUserInfoApi(res.data.userId)
      console.log(res1)
      context.commit('setUserInfo',res1.data)
    }
  }
}