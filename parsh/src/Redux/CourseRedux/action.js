import axios from "axios"
import { COURSE_DELETE, COURSE_FAILURE, COURSE_POST, COURSE_REQUEST, COURSE_SUCCESS } from "./actionType"

export const get_course_request=()=>{
    return {type:COURSE_REQUEST}
}

export const get_course_success=(payload)=>{
    return {type:COURSE_SUCCESS, payload}
}

export const get_course_failure=()=>{
    return {type:COURSE_FAILURE}
}

export const post_course=()=>{
    return {type:COURSE_POST}
}

export const delete_course=()=>{
    return {type:COURSE_DELETE}
}

export const getCourse=()=>(dispatch)=>{
    dispatch(get_course_request());
    axios.get("https://parsh-info.onrender.com/courses").then((res)=>{
        dispatch(get_course_success(res.data));
        
    }).catch(()=>{
        dispatch(get_course_failure());
    })
}

export const postCourse=(courses)=>(dispatch)=>{
    dispatch(get_course_request());
    axios.post("https://parsh-info.onrender.com/courses",courses).then((res)=>{
        dispatch(get_course_success(res.data));
        
    }).catch(()=>{
        dispatch(get_course_failure());
    })
}

export const deleteCourse=(id)=>(dispatch)=>{
    dispatch(get_course_request());
    return axios.delete(`https://parsh-info.onrender.com/courses/${id}`)
}