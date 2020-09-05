import {GET_AUTO_MARK, GET_AUTO_MODEL} from "../types";

const initialState = {
    mark:[],
    model: []
}

export default function userReducer(state = initialState, action) {

    switch (action.type) {
        case GET_AUTO_MARK:
            return {...state, mark: action.payload};
        case GET_AUTO_MODEL:
            return {...state, model: action.payload};
        default:
            return state


    }
    return state
}
