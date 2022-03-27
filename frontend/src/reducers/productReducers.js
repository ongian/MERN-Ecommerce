import { 
    PRODUCT_LIST_FAILED, 
    PRODUCT_LIST_SUCCESS, 
    PRODUCT_LIST_REQUEST, 
    PRODUCT_REQUEST,
    PRODUCT_SUCCESS,
    PRODUCT_FAILED} 
from "../actionTypes/actionTypes";

export const productListReducers = (state = {products: []}, action) => {
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return {loading: true, products: []}
        case PRODUCT_LIST_SUCCESS: 
            return {loading: false, products: action.payload}
        case PRODUCT_LIST_FAILED:
            return {loading: false, error: action.payload}
        default: return state;
    }
}

export const singleProduct = (state = {product: {image: []}}, action) => {
    switch(action.type){
        case PRODUCT_REQUEST:
            return {loading: true, ...state}
        case PRODUCT_SUCCESS:
            return {loading: false, product: action.payload}
        case PRODUCT_FAILED:
            return {loading: false, error: action.payload}
        default: return state;
    }
}