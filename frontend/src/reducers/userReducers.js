import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS } from "../actionTypes/actionTypes";

export const loginReducer = (state = {}, action) => {
    switch(action.type){
        case LOGIN_REQUEST:
            return {
                loading: true
            }
        case LOGIN_SUCCESS:
            return {
                loading: false,
                userData: action.payload
            }
        case LOGIN_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case LOGOUT:
            return {}
        default: return state;
    }
}

export const registerReducer = (state = {}, action) => {
    switch(action.type){
        case REGISTER_REQUEST:
            return {
                loading: true
            }
        case REGISTER_SUCCESS:
            return {
                loading: false,
                userData: action.payload
            }
        case REGISTER_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default: return state;
    }
}