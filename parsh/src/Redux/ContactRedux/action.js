import { CONTACT_DELETE, CONTACT_FAILURE, CONTACT_POST, CONTACT_REQUEST, CONTACT_SUCCESS } from "./actionType"
import axios from "axios"
export const get_contact_request=()=>{
    return {type:CONTACT_REQUEST}
}

export const get_contact_success=(payload)=>{
    return {type:CONTACT_SUCCESS, payload}
}

export const get_contact_failure=()=>{
    return {type:CONTACT_FAILURE}
}

export const post_contact=()=>{
    return {type:CONTACT_POST}
}

export const delete_contact=()=>{
    return {type:CONTACT_DELETE}
}

export const getContact=()=>(dispatch)=>{
    dispatch(get_contact_request());
    axios.get("http://localhost:8080/contact").then((res)=>{
        dispatch(get_contact_success(res.data));
        
    }).catch(()=>{
        dispatch(get_contact_failure());
    })
}
export const postContact=(contacts)=>(dispatch)=>{
    dispatch(get_contact_request());
    axios.post("http://localhost:8080/contact",contacts).then((res)=>{
        dispatch(get_contact_success(res.data));
        
    }).catch(()=>{
        dispatch(get_contact_failure());
    })
}

export const deleteContact=(id)=>(dispatch)=>{
    dispatch(get_contact_request());
    axios.delete(`http://localhost:8080/contact/${id}`).then((res)=>{
        dispatch(get_contact_success(res.data));
        
    }).catch(()=>{
        dispatch(get_contact_failure());
    })
}