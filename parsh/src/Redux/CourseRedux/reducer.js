import { COURSE_DELETE, COURSE_FAILURE, COURSE_POST, COURSE_REQUEST, COURSE_SUCCESS } from "./actionType"

const initialState={
    isLoading:false,
    courses:[],
    isError:false,
}
export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case COURSE_REQUEST:{
            return{...state,isLoading:true}
        }
        case COURSE_SUCCESS:{
            return{...state,isLoading:false, courses:payload}
        }
        case COURSE_FAILURE:{
            return{...state,isLoading:false, isError:true}
        }
        case COURSE_POST:{
            return{...state,isLoading:false}
        }
        case COURSE_DELETE:{
            return{...state,isLoading:false}
        }
        default:{
            return state;
        }
    }
}