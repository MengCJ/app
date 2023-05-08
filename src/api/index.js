import requests from '@/api/request'

export const labelTree = ()=>requests({url:'/api/labelTree',method:'get'});

// /api/getPostVOByLabelId
export const getPostVOByLabelId = (data)=>requests({url:"/api/getPostVOByLabelId",method:"post",data})