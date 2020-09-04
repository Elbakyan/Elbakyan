import {USER_STATUS_EXIST, USER_STATUS_NO_EXIST} from "../types";
import {Url} from '../../components/config/Url'

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


// return async function (dispatch) {
//     try {
//         const response = await fetch('https://elbakyan.am/Server/corona');
//         const json = await response.json();
//         await dispatch({type: USER_STATUS_EXIST, payload: json})
//     }catch (e){
//         console.error('ERROR:' + e);
//     }
// }