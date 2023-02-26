import {applyMiddleware, legacy_createStore, combineReducers} from "redux"
import thunk from "redux-thunk"
import { reducer as contactReducer} from "./Redux/ContactRedux/reducer"
import {reducer as courseReducer} from "./Redux/CourseRedux/reducer"
import {reducer as authReducer} from "./Redux/AuthReducer/reducer"

const rootReducer=combineReducers({contactReducer,courseReducer,authReducer})
export const store=legacy_createStore(rootReducer, applyMiddleware(thunk))