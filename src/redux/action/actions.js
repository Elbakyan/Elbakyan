import {Url} from '../../components/config/Url'
import {USER_STATUS_EXIST, GET_SIRCLE, GET_CITY} from "../types";
import {POST} from "../../components/config/Requsest";


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

