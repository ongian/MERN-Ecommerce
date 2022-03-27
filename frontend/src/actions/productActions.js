import { 
    PRODUCT_LIST_FAILED, 
    PRODUCT_LIST_SUCCESS, 
    PRODUCT_LIST_REQUEST, 
    PRODUCT_REQUEST,
    PRODUCT_SUCCESS,
    PRODUCT_FAILED
} from "../actionTypes/actionTypes";

import axios from "axios";
//import { useParams } from "react-router-dom";
// normal syntax is listProducts = () => {...}
// but with thunk and to pass actions to actions, we insert another action to functions
// listProduct = () => async() => {...}

export const listProducts = () => async(dispatch) => {
    try {
        dispatch({type: PRODUCT_LIST_REQUEST});

        const {data} = await axios.get('/api/products');
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAILED,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const singleProduct = (id) => async(dispatch) => {
    try {
        dispatch({type: PRODUCT_REQUEST});

        const {data} = await axios.get(`/api/products/${id}`);
        dispatch({
            type: PRODUCT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_FAILED,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}