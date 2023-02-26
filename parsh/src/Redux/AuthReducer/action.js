import axios from "axios"
import { POST_LOGIN_FAILURE, POST_LOGIN_REQUEST, POST_LOGIN_SUCCESS } from "./actionType"

export const post_login_request=()=>{
    return{type:POST_LOGIN_REQUEST}
}

export const post_login_success=(payload)=>{
    return{type:POST_LOGIN_SUCCESS,payload}
}

export const post_login_failure=()=>{
    return{type:POST_LOGIN_FAILURE}
}

export const postLogin=(detail)=>(dispatch)=>{
    dispatch(post_login_request())
    axios.post(`https://reqres.in/api/login`,detail).then((res)=>{
      dispatch(post_login_success(res.token))  
    })
    .catch(()=>{
    dispatch(post_login_failure())
})
}