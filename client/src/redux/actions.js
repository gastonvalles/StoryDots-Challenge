import axios from "axios";
import {
  DELETE_PRODUCT,
  GET_BRANDS,
  GET_BRANDS_BY_QUERY,
  GET_BRANDS_ID,
  GET_PRODUCTS,
  GET_PRODUCTS_BY_QUERY,
  GET_PRODUCTS_ID,
  UPDATE_PRODUCT,
} from "./constants";

export function getAllBrands() {
  return async (dispatch) => {
    try {
      let response = await axios.get(
        `https://storydots-challenge-production.up.railway.app/brands`
      );
      return dispatch({
        type: GET_BRANDS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getBrandsId(id) {
  return async (dispatch) => {
    try {
      let response = await axios.get(
        `https://storydots-challenge-production.up.railway.app/brands/${id}`
      );
      return dispatch({
        type: GET_BRANDS_ID,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getBrandsByQuery(name) {
  return async (dispatch) => {
    try {
      let response = await axios.get(
        `https://storydots-challenge-production.up.railway.app/brands?name=${name}`
      );
      return dispatch({
        type: GET_BRANDS_BY_QUERY,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postBrand(payload) {
  return async () => {
    try {
      let response = await axios.post(
        `https://storydots-challenge-production.up.railway.app/products`,
        payload
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  };
}

export function getAllProducts() {
  return async (dispatch) => {
    try {
      let response = await axios.get(
        `https://storydots-challenge-production.up.railway.app/products`
      );
      return dispatch({
        type: GET_PRODUCTS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getProductsId(id) {
  return async (dispatch) => {
    try {
      let response = await axios.get(
        `https://storydots-challenge-production.up.railway.app/products/${id}`
      );
      return dispatch({
        type: GET_PRODUCTS_ID,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getProductsByQuery(name) {
  return async (dispatch) => {
    try {
      let response = await axios.get(
        `https://storydots-challenge-production.up.railway.app/products?name=${name}`
      );
      return dispatch({
        type: GET_PRODUCTS_BY_QUERY,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postProduct(payload) {
  return async () => {
    try {
      let response = await axios.post(
        `https://storydots-challenge-production.up.railway.app/products`,
        payload
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  };
}

export function updateProduct(product) {
  return {
    type: UPDATE_PRODUCT,
    payload: product,
  };
}

export function deleteProduct(id) {
  return async (dispatch) => {
    try {
      let response = await axios.delete(
        `https://storydots-challenge-production.up.railway.app/products/${id}`
      );
      console.log(response);
      return dispatch({
        type: DELETE_PRODUCT,
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
