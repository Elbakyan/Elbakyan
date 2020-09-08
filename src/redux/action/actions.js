import {Url} from '../../components/config/Url'
import {USER_STATUS_EXIST, GET_SIRCLE, GET_CITY, GET_AUTO_MARK, GET_AUTO_MODEL} from "../types";
import {POST} from "../../components/config/Requsest";
import Login from "../../components/login/Login";


export function userExist() {
    return async (dispach) => {
        const response = await fetch(Url.existUser)
        const json = await response.json();
        dispach({
            type: USER_STATUS_EXIST,
            payload: json
        })
    }
}

export function Location() {
    return async (dispach) => {
        const response = await fetch(Url.location)
        const json = await response.json();
        dispach({
            type: GET_SIRCLE,
            payload: json
        })
    }
}
export function City(e) {
    return async (dispach) => {
        let data = new FormData();
        data.append('id', e.target.selectedIndex+1);
        POST(Url.city, data).then(data=> {
            dispach({
                type: GET_CITY,
                payload: data
            })
        })

    }
}
export function Auto() {
    return async (dispach) => {
        const response = await fetch(Url.auto)
        const json = await response.json();
        dispach({
            type: GET_AUTO_MARK,
            payload: json
        })
    }
}
export function Model(e) {
    return async (dispach) => {
        let data = new FormData();
        data.append('id', e.target.selectedIndex+1);
        POST(Url.model, data).then(data=> {
            console.log(data)
            dispach({
                type: GET_AUTO_MODEL,
                payload: data
            })
        })

    }
}