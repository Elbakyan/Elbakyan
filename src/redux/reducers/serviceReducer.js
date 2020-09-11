import {GET_SERVICE_NAME} from "../types";

const initialState = {
    services: [],

}

export default function userReducer(state = initialState, action) {

    switch (action.type) {
        case GET_SERVICE_NAME:
            return {...state, services: action.payload};
        default:
            return state
    }
}