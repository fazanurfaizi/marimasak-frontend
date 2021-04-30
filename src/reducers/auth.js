import { createReducer } from '../utils'
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    GET_AUTH_USER_REQUEST,
    GET_AUTH_USER_SUCCESS,
    GET_AUTH_USER_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCES,
    LOGOUT_FAILURE
} from '../actions/auth'

const initialState = {
    token: null,
    isAuthenticated: false,
    isAuthenticating: false,
    user: null,
    status: null,
    statusText: null
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
            'token': payload.token,
            'status': 200,
            'statusText': 'Login Success'
        })
    },
    [LOGIN_FAILURE]: (state, payload) => {
        return Object.assign({}, state, {
            'isAuthenticating': false,
            'isAuthenticated': false,
            'token': null,
            'status': payload.status,
            'statusText': payload.statusText
        })
    },
    [REGISTER_REQUEST]: (state, payload) => {
        return Object.assign({}, state, {
            'isAuthenticating': true            
        })
    },
    [REGISTER_SUCCESS]: (state, payload) => {
        return Object.assign({}, state, {
            'isAuthenticating': false,            
            'status': 200,
            'statusText': 'register Success'
        })
    },
    [REGISTER_FAILURE]: (state, payload) => {
        return Object.assign({}, state, {
            'isAuthenticating': false,            
            'status': 403,
            'statusText': 'register failed'
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
    },
    [LOGOUT_REQUEST]: (state, payload) => {
        return Object.assign({}, state, {
            'isAuthenticating': true
        })
    },
    [LOGOUT_SUCCES]: (state, payload) => {
        return Object.assign({}, state, {
            'isAuthenticating': false,
            'isAuthenticated': false,
            'statusText': payload.statusText
        })
    },
    [LOGOUT_FAILURE]: (state, payload) => {
        return Object.assign({}, state, {
            'isAuthenticating': false,
            'status': payload.status,
            'statusText': payload.statusText
        })
    }
})