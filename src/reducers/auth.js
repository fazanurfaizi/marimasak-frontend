import { createReducer } from '../utils'
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    GET_AUTH_USER_REQUEST,
    GET_AUTH_USER_SUCCESS,
    GET_AUTH_USER_FAILURE
} from '../actions/auth'

const initialState = {
    token: null,
    isAuthenticated: false,
    isAuthenticating: false,
    user: null
}

export default createReducer(initialState, {
    [LOGIN_REQUEST]: (state, payload) => {
        return Object.assign({}, state, {
            'isAuthenticating': true            
        })
    },
    [LOGIN_SUCCESS]: (state, payload) => {
        return Object.assign({}, state, {
            'isAuthenticating': false,
            'isAuthenticated': true,
            'token': payload.token
        })
    },
    [LOGIN_FAILURE]: (state, payload) => {
        return Object.assign({}, state, {
            'isAuthenticated': false,
            'token': null
        })
    },
    [GET_AUTH_USER_REQUEST]: (state, payload) => {
        return Object.assign({}, state, {
            'user': null
        })
    },
    [GET_AUTH_USER_SUCCESS]: (state, payload) => {
        return Object.assign({}, state, {
            'user': payload.user
        })
    },
    [GET_AUTH_USER_FAILURE]: (state, payload) => {
        return Object.assign({}, state, {
            'user': null
        })
    }
})