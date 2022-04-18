import { VALIDATE_EMAIL_LOGIN, VALIDATE_PASSWORD_LOGIN, VALIDATE_EMAIL_REG, VALIDATE_USER_REG, VALIDATE_PASSWORD_REG, VALIDATE_CONFIRM_PASSWORD_REG } from "../actionTypes/actionTypes";

export const validateLoginEmail = (email) => async(dispatch) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    dispatch({
        type: VALIDATE_EMAIL_LOGIN,
        payload: {
            valid: emailRegex.test(email),
            error: email.trim().length > 0 ? (emailRegex.test(email) ? '' : 'Invalid Email Address!') : 'This field is required!'
        } 
    })    
}

export const validateLoginPassword = (password) => async(dispatch) => {
    dispatch({
        type: VALIDATE_PASSWORD_LOGIN,
        payload: {
            valid: password.trim().length > 0,
            error: password.trim().length > 0 ? '' : 'This field is required!'
        }
    })
}

export const validateRegEmail = (email) => async(dispatch) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    dispatch({
        type: VALIDATE_EMAIL_REG,
        payload: {
            valid: emailRegex.test(email),
            error: email.trim().length > 0 ? (emailRegex.test(email) ? '' : 'Invalid Email Address!') : 'This field is required!'
        } 
    })    
}
export const validateRegUser = (user) => async(dispatch) => {
    dispatch({
        type: VALIDATE_USER_REG,
        payload: {
            valid: user.trim().length > 5,
            error: user.trim().length > 0 ? (user.trim().length > 5 ? '' : 'Username must be less than 6 characters') : 'This field is required!'
        } 
    })    
}
export const validateRegPass = (password) => async(dispatch) => {
    dispatch({
        type: VALIDATE_PASSWORD_REG,
        payload: {
            valid: password.trim().length > 5,
            error: password.trim().length > 0 ? (password.trim().length > 5 ? '' : 'Password must be less than 6 characters') : 'This field is required!'
        } 
    })    
}
export const validateRegConfirmPass = (password, confirmPassword) => async(dispatch) => {
    dispatch({
        type: VALIDATE_CONFIRM_PASSWORD_REG,
        payload: {
            valid: password === confirmPassword,
            error: password.trim().length > 0 ? (password === confirmPassword ? '' : 'Password do not matched!') : 'This field is required!'
        } 
    })    
}
