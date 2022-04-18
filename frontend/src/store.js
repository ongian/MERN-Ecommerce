import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {productListReducers, singleProduct} from './reducers/productReducers';
import { addToCart } from './reducers/cartReducers';
import { loginReducer, registerReducer } from './reducers/userReducers';
import { popupModal } from './reducers/auxillary';
import {loginFormReducer, registerFormReducer} from './reducers/formValidationReducer';

const reducers = combineReducers({
    productList: productListReducers,
    product: singleProduct,
    cart: addToCart,
    login: loginReducer,
    register: registerReducer,
    modal: popupModal,
    loginValidation: loginFormReducer,
    registerValidation: registerFormReducer
});

const cartLocalStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
const userLocalStorage = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : null;

const initialState = {
    cart: {
        cart: cartLocalStorage,
    },
    login: {
        userData: userLocalStorage
    }
};

const middleware = [thunk];

const store = createStore(
    reducers, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;