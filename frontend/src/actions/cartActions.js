import { CART_ADD, CART_REMOVE } from "../actionTypes/actionTypes";
import axios from 'axios';

export const addToCart = (id, qty) => async(dispatch, getState) => {
    const {data} = await axios.get(`/api/products/${id}`);
    dispatch({
        type: CART_ADD,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image[data.default],
            price: data.price,
            countInStock: data.countInStock,
            qty,
        }
    })

    // getState() returns the current state of the app
    // getState().cart.cart = get the current state of cart store reducer with cart as initial state in cartReducers.js
    localStorage.setItem('cart', JSON.stringify(getState().cart.cart))
}

export const removeToCart = (id) => async(dispatch, getState) => {
    dispatch({
        type: CART_REMOVE,
        payload: id
    })
    localStorage.setItem('cart', JSON.stringify(getState().cart.cart))
}