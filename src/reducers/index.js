import { GET_PRODUCT_LIST, ADD_TO_CART, EMPTY_CART } from "../actionTypes"

const initialState = {
    productList: [{ name: "hello" }],
    productById: [],
    cart: [],
}

const reducers = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_PRODUCT_LIST:
            return { ...state, productList: [...payload] }
        case ADD_TO_CART:
            return { ...state, cart: [...payload] }
        case EMPTY_CART:
            return { ...state, cart: [] }
        default:
            return state
    }
}


export default reducers;