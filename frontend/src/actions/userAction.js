import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, MODAL, REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS } from "../actionTypes/actionTypes"
import { setRequest } from "../utils/setRequest";
export const login = (email, password) => async(dispatch) => {
    try {
        dispatch({
            type: LOGIN_REQUEST
        });

        const {data} = await setRequest('/api/user/login', {email, password});
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data
        })
        dispatch({type: MODAL})
        localStorage.setItem('userData', JSON.stringify(data));
        
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const register = (name, email, password) => async(dispatch) => {
    try {
        dispatch({
            type: REGISTER_REQUEST
        });

        const {data} = await setRequest('/api/user/register', {name, email, password});
        dispatch({
            type: REGISTER_SUCCESS,
            payload: data
        })
        dispatch({type: MODAL})
        localStorage.setItem('userData', JSON.stringify(data));
        
    } catch (error) {
        dispatch({
            type: REGISTER_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const logout = () => async(dispatch) => {
    dispatch({
        type: LOGOUT
    })
    localStorage.removeItem('userData');
}