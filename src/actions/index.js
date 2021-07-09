import {
    GET_PRODUCT_LIST,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    EMPTY_CART
} from "../actionTypes";


export const getProductList = (payload) => ({
    type: GET_PRODUCT_LIST,
    payload,
});

export const addToCart = (payload) => ({
    type: ADD_TO_CART,
    payload,
});
export const removeFromCart = (payload) => ({
    type: REMOVE_FROM_CART,
    payload,
});


export const emptyCart = (payload) => ({
    type: EMPTY_CART,
    payload
});