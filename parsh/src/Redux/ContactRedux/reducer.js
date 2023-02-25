import { CONTACT_DELETE, CONTACT_FAILURE, CONTACT_POST, CONTACT_REQUEST, CONTACT_SUCCESS } from "./actionType"

const initialState={
    isLoading:false,
    contacts:[],
    isError:false,
}
export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case CONTACT_REQUEST:{
            return{...state,isLoading:true}
        }
        case CONTACT_SUCCESS:{
            return{...state,isLoading:false, contacts:payload}
        }
        case CONTACT_FAILURE:{
            return{...state,isLoading:false, isError:true}
        }
        case CONTACT_POST:{
            return{...state,isLoading:false}
        }
        case CONTACT_DELETE:{
            return{...state,isLoading:false}
        }
        default:{
            return state;
        }
    }
}