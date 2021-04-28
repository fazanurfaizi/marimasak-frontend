import { authService } from '../services/auth.service'
import { history } from '../utils'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const GET_AUTH_USER_REQUEST = 'GET_AUTH_USER_REQUEST'
export const GET_AUTH_USER_SUCCESS = 'GET_AUTH_USER_SUCCESS'
export const GET_AUTH_USER_FAILURE = 'GET_AUTH_USER_FAILURE'

export function loginRequest() {
    return {
        type: LOGIN_REQUEST
    }
}

export function loginSuccess(token) {
    localStorage.setItem('access-token', token)
    return {
        type: LOGIN_SUCCESS,
        payload: {
            token: token
        }
    }
}

export function loginFailure(error) {
    localStorage.removeItem('access-token')
    return {
        type: LOGIN_FAILURE,
        payload: {
            status: error.response.status || 403,
            statusText: error.response.message || 'Login Failure'
        }
    }
}

export function login(email, password) {
    return function(dispatch) {
        dispatch(loginRequest())        
        authService.login(email, password)
            .then(response => {                
                dispatch(loginSuccess(response.data.access_token))
                dispatch(getAuthUser())
            })
            .catch(error => {                
                dispatch(loginFailure(error))
            })
    }
}

export function getAuthUserRequest() {    
    return {
        type: GET_AUTH_USER_REQUEST        
    }
}

export function getAuthUserSuccess(user) {
    return {
        type: GET_AUTH_USER_SUCCESS,
        payload: {
            user: user
        }
    }
}

export function getAuthUserFailure() {
    return {
        type: GET_AUTH_USER_FAILURE        
    }
}

export function getAuthUser() {
    return function(dispatch) {
        dispatch(getAuthUserRequest())
        authService.getAuthUser()
            .then(response => {
                dispatch(getAuthUserSuccess(response.data))
            })
            .catch(error => {
                dispatch(getAuthUserFailure())
            })
    }
}