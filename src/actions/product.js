import { productService } from '../services/product.service'
import { history } from '../utils/history'

export const GET_PRODUCT_TYPES_REQUEST = 'GET_PRODUCT_TYPES_REQUEST'
export const GET_PRODUCT_TYPES_SUCCESS = 'GET_PRODUCT_TYPES_SUCCESS'
export const GET_PRODUCT_TYPES_FAILURE = 'GET_PRODUCT_TYPES_FAILURE'
export const GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST'
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS'
export const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE'
export const SET_SELECTED_PRODUCT_TYPE = 'SET_SELECTED_PRODUCT_TYPE'

export function getProductTypesRequest() {
    return {
        type: GET_PRODUCT_TYPES_REQUEST
    }
}

export function getProductTypesSucces(data) {
    return {
        type: GET_PRODUCT_TYPES_SUCCESS,
        payload: {
            productTypes: data
        }
    }
}

export function getProductTypesFailure() {
    return {
        type: GET_PRODUCT_TYPES_FAILURE
    }
}

export function getProductTypes() {
    return function(dispatch) {
        dispatch(getProductTypesRequest())        
        productService.getProductTypes()
            .then(response => {                                
                dispatch(getProductTypesSucces(response.data.data))      
                dispatch(setSelectedProductType(response.data.data[0].id))
            })
            .catch(() => {                             
                dispatch(getProductTypesFailure())
            })
    }
}

export function setSelectedProductType(selectedProductType) {
    return function(dispatch) {
        dispatch(changeSelectedProductType(selectedProductType))
        dispatch(getProducts(selectedProductType))
    }    
}

export function changeSelectedProductType(selectedProductType) {
    return {
        type: SET_SELECTED_PRODUCT_TYPE,
        payload: {
            selectedProductType: selectedProductType
        }
    }
}

export function getProductsRequest() {
    return {
        type: GET_PRODUCTS_REQUEST
    }
}

export function getProductsSucces(data) {
    return {
        type: GET_PRODUCTS_SUCCESS,
        payload: {
            products: data
        }
    }
}

export function getProductsFailure() {
    return {
        type: GET_PRODUCTS_FAILURE
    }
}

export function getProducts(productTypeId) {
    return function(dispatch) {
        dispatch(getProductsRequest())            
        productService.getProducts(productTypeId)
            .then(response => {                
                dispatch(getProductsSucces(response.data.data))                                
            })
            .catch(() => {                             
                dispatch(getProductsFailure())
            })
    }
}