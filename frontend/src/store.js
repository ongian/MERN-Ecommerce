import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {productListReducers, singleProduct} from './reducers/productReducers';
import { addToCart } from './reducers/cartReducers';
const reducers = combineReducers({
    productList: productListReducers,
    product: singleProduct,
    cart: addToCart
});

const cartLocalStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
const initialState = {
    cart: {
        cart: cartLocalStorage
    }
};

const middleware = [thunk];

const store = createStore(
    reducers, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;