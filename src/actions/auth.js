import { authService } from '../services/auth.service'
import { history } from '../utils/history'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'
export const GET_AUTH_USER_REQUEST = 'GET_AUTH_USER_REQUEST'
export const GET_AUTH_USER_SUCCESS = 'GET_AUTH_USER_SUCCESS'
export const GET_AUTH_USER_FAILURE = 'GET_AUTH_USER_FAILURE'
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCES = 'LOGOUT_SUCCES'
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'

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
            status: 403,
            statusText: error.data.message
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
                history.push('/')                        
            })
            .catch(error => {                             
                dispatch(loginFailure(error))
            })
    }
}

export function registerRequest() {
    return {
        type: REGISTER_REQUEST
    }
}

export function registerSuccess() {    
    return {
        type: REGISTER_SUCCESS,        
    }
}

export function registerFailure() {    
    return {
        type: REGISTER_FAILURE,
        payload: {
            status: 403,
            statusText: 'register failed'
        }
    }
}

export function register(body) {
    return function(dispatch) {
        dispatch(registerRequest())        
        authService.register(body)
            .then(response => {                
                dispatch(registerSuccess())                
                history.push('/login')                        
            })
            .catch(error => {                             
                dispatch(registerFailure())
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

export function logoutRequest() {
    return {
        type: LOGOUT_REQUEST
    }
}

export function logoutSuccess(response) {
    localStorage.removeItem('access-token')
    return {
        type: LOGOUT_SUCCES,
        payload: {
            statusText: response.data.message
        }
    }
}

export function logoutFailure(error) {
    localStorage.removeItem('access-token')
    return {
        type: LOGOUT_FAILURE,
        payload: {
            status: 403,
            statusText: 'Logout Failure'
        }
    }
}

export function logout() {
    return function(dispatch) {
        dispatch(logoutRequest())
        authService.logout()
            .then(response => {
                dispatch(logoutSuccess(response))
                history.push('/login')
            })
            .catch(error => {
                dispatch(logoutFailure(error))
            })
    }
}