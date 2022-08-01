import { login,imgcode } from '@/api/user'

export default {
  namespaced:true,
  state:{
    token:'',
    imgcode:''
  },
  mutations: { 
    setimgcode(state,payload){
      state.imgcode = `http://localhost:9528/api${payload}`
      // console.log(state.imgcode);
    },
     
    setToken(state,payload){
      state.token = payload
      console.log(state.token);
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
      console.log(res)
      context.commit('setToken',res.data.token)
    }
  }
}