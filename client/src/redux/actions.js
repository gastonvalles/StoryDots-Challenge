import axios from "axios";
import { GET_BRANDS, GET_BRANDS_BY_QUERY, GET_BRANDS_ID, GET_PRODUCTS, GET_PRODUCTS_BY_QUERY, GET_PRODUCTS_ID } from "./constants";

export function getAllBrands() {
    return async (dispatch) => {
        try {
            let response = await axios.get("http://localhost:3001/brands");
            return dispatch({
                type: GET_BRANDS,
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getBrandsId(id) {
    return async (dispatch) => {
        try {
            let response = await axios.get(`http://localhost:3001/brands/${id}`);
            return dispatch({
                type: GET_BRANDS_ID,
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getBrandsByQuery(name) {
    return async (dispatch) => {
        try {
            let response = await axios.get(`http://localhost:3001/brands?name=${name}`);
            return dispatch({
                type: GET_BRANDS_BY_QUERY,
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function postBrand(payload) {
    return async () => {
        try {
            let response = await axios.post("http://localhost:3001/products", payload);
            return response
        } catch (error) {
            console.log(error)
        }
    }
}

export function getAllProducts() {
    return async (dispatch) => {
        try {
            let response = await axios.get("http://localhost:3001/products");
            return dispatch({
                type: GET_PRODUCTS,
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getProductsId(id) {
    return async (dispatch) => {
        try {
            let response = await axios.get(`http://localhost:3001/products/${id}`);
            return dispatch({
                type: GET_PRODUCTS_ID,
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getProductsByQuery(name) {
    return async (dispatch) => {
        try {
            let response = await axios.get(`http://localhost:3001/products?name=${name}`);
            return dispatch({
                type: GET_PRODUCTS_BY_QUERY,
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function postProduct(payload) {
    return async () => {
        try {
            let response = await axios.post("http://localhost:3001/products", payload);
            return response
        } catch (error) {
            console.log(error)
        }
    }
}
