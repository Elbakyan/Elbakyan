import {combineReducers} from "redux";
import userReducer from "./userReducer";
import locationReducer from './locationReducer'
import autoReducer from "./autoReducer";

export  default combineReducers({
    user: userReducer,
    location: locationReducer,
    auto: autoReducer
})

