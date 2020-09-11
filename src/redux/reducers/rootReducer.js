import {combineReducers} from "redux";
import userReducer from "./userReducer";
import locationReducer from './locationReducer'
import autoReducer from "./autoReducer";
import serviceReducer from "./serviceReducer";

export  default combineReducers({
    user: userReducer,
    location: locationReducer,
    auto: autoReducer,
    services:serviceReducer
})

