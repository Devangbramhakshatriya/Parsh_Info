import {applyMiddleware, legacy_createStore, combineReducers} from "redux"
import thunk from "redux-thunk"
import { reducer as contactReducer} from "./Redux/ContactRedux/reducer"
import {reducer as courseReducer} from "./Redux/CourseRedux/reducer"

const rootReducer=combineReducers({contactReducer,courseReducer})
export const store=legacy_createStore(rootReducer, applyMiddleware(thunk))