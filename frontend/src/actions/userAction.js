import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, MODAL } from "../actionTypes/actionTypes"
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
        console.log(error.response)
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}