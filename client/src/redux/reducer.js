import { DELETE_PRODUCT, GET_BRANDS, GET_BRANDS_BY_QUERY, GET_BRANDS_ID, GET_PRODUCTS, GET_PRODUCTS_BY_QUERY, GET_PRODUCTS_ID } from "./constants";

const initialState = {
    allProducts: [],
    brands: [],
    allBrands: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_BRANDS:
            return {
                ...state,
                brands: action.payload,
                allBrands: action.payload
            }

        case GET_PRODUCTS:
            return {
                ...state,
                allProducts: action.payload,
            }

        case GET_BRANDS_ID:
            return {
                ...state,
                detail: action.payload
            }

        case GET_PRODUCTS_ID:
            return {
                ...state,
                detail: action.payload
            }

        case GET_BRANDS_BY_QUERY:
            return {
                ...state,
                brands: action.payload
            }

        case GET_PRODUCTS_BY_QUERY:
            return {
                ...state,
                allProducts: action.payload
            }

        case DELETE_PRODUCT:
            const filteredProducts = state.allProducts.filter((product) => product.id !== action.payload);
            return {
                ...state, allProducts: filteredProducts
            };

        default: return state;
    }
}

export default rootReducer;