import { ADD_TO_CHECKOUT } from "../actionTypes/actionTypes";
import axios from 'axios';

export const addToCheckout = (id,qty) => async(dispatch, getState) => {
    const {cart} = getState().cart;
    const {data} = await axios.get(`/api/products/${id}`);
    if(qty > data.countInStock && data.countInStock > 1){
        dispatch({
            type: ADD_TO_CHECKOUT,
            payload: {
                product: data._id,
                name: data.name,
                image: data.image[data.default],
                price: data.price,
                countInStock: data.countInStock,
                qty: qty
            }
        })
    }
    
}