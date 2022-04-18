import { VALIDATE_CONFIRM_PASSWORD_REG, VALIDATE_EMAIL_LOGIN, VALIDATE_EMAIL_REG, VALIDATE_PASSWORD_LOGIN, VALIDATE_PASSWORD_REG, VALIDATE_USER_REG } from "../actionTypes/actionTypes"

let loginState = {
    email: { 
        error: '',
        valid: false
    },
    password: {
        error: '',
        valid: false
    }
}
export const loginFormReducer = (state = loginState, action) => {
    switch(action.type){
        case VALIDATE_EMAIL_LOGIN:
            return {
                ...state,
                email: action.payload
            }
        case VALIDATE_PASSWORD_LOGIN:
            return {
                ...state,
                password: action.payload
            }
        default: return loginState
    }
}

let registerState = {
    username: {
        error: '',
        valid: false
    },
    email: { 
        error: '',
        valid: false
    },
    password: {
        error: '',
        valid: false
    },
    confirmPassword: {
        error: '',
        valid: false
    }
}
export const registerFormReducer = (state = registerState, action) => {
    switch(action.type){
        case VALIDATE_EMAIL_REG:
            return {
                ...state,
                email: action.payload
            }
        case VALIDATE_USER_REG:
            return {
                ...state,
                username: action.payload
            }
        case VALIDATE_PASSWORD_REG:
            return {
                ...state,
                password: action.payload
            }
        case VALIDATE_CONFIRM_PASSWORD_REG:
            return {
                ...state,
                confirmPassword: action.payload
            }
        default: return registerState
    }
}