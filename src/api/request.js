// 对于axios进行二次封装
import axios from 'axios'


// start:进度条开始  done：进度条结束
// 利用axios对象的方法create去创建一个axios实例
// request就是axios，只不过稍稍配置一下
let requests =  axios.create({
    // 基础路径，发请求的时候，路径会出现api
    baseURL: 'http://127.0.0.1:8101',
    withCredentials:true,
    // 代表请求超时时间5s
    timeout:5000

});
// 请求拦截器：在发请求之前，请求拦截器可以检测到，可以做一些事情
requests.interceptors.request.use((config)=>{
    // 请求头
    // if(store.state.detail.uuid_token){
    //     config.headers.userTempId = store.state.detail.uuid_token
    // }
    // if(store.state.register.token){
    //     console.log('122')
    //     config.headers["x-auth-token"] = store.state.register.token
    // }
    
    return config;
});
// 响应拦截器
requests.interceptors.response.use((res)=>{
 
    return res.data
},(error)=>{
    return Promise.reject(new Error("faile",error.message))
});

export default requests;