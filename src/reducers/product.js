import { createReducer } from '../utils'
import {
    GET_PRODUCT_TYPES_REQUEST,
    GET_PRODUCT_TYPES_SUCCESS,
    GET_PRODUCT_TYPES_FAILURE,
    SET_SELECTED_PRODUCT_TYPE,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_FAILURE
} from '../actions/product'

const initialState = {
    productTypes: [],
    selectedProductType: '',
    products: [],
    loading: false
}

export default createReducer(initialState, {
    [GET_PRODUCT_TYPES_REQUEST]: (state, payload) => {
        return Object.assign({}, state, {
            'loading': true,
            'productTypes': []
        })
    },
    [GET_PRODUCT_TYPES_SUCCESS]: (state, payload) => {
        return Object.assign({}, state, {
            'productTypes': payload.productTypes,  
            'selectedProductType': payload.selectedProductType
        })
    },
    [GET_PRODUCT_TYPES_FAILURE]: (state, payload) => {
        return Object.assign({}, state, {
            'loading': false,            
            'productTypes': []
        })
    },
    [SET_SELECTED_PRODUCT_TYPE]: (state, payload) => {
        return Object.assign({}, state, {
            'selectedProductType': payload.selectedProductType
        })
    },
    [GET_PRODUCTS_REQUEST]: (state, payload) => {
        return Object.assign({}, state, {
            'loading': true,
            'products': []
        })
    },
    [GET_PRODUCTS_SUCCESS]: (state, payload) => {
        return Object.assign({}, state, {
            'products': payload.products,           
            'loading': false,    
        })
    },
    [GET_PRODUCTS_FAILURE]: (state, payload) => {
        return Object.assign({}, state, {
            'loading': false,            
            'products': []
        })
    }
})