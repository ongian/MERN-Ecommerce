import { CART_ADD, CART_REMOVE } from "../actionTypes/actionTypes";

export const addToCart = (state = {cart: []}, action) => {
    switch(action.type){
        case CART_ADD:
            const item = action.payload;
            // returns the object of matched item
            const itemExist = state.cart.find((c) => c.product === item.product);
            
            if(itemExist){
                return {
                    ...state,
                    // if there's a matched product, replace matched item with current product
                    cart: state.cart.map((c) => c.product === itemExist.product ? item : c)
                }
            } else {
                return {
                    ...state,
                    cart: [...state.cart, item]
                }
            }
        case CART_REMOVE:
            return {
                ...state,
                cart: state.cart.filter((f) => f.product !== action.payload)
            }
        default: return state;
    }
}