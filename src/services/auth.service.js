import axios from './axios'

const login = (email, password) => {
    return new Promise((resolve, reject) => {
        axios.post('/auth/login', { email, password })
            .then(response => {
                resolve(response)                                                           
            })
            .catch((err) => reject(err))
    })    
}

const register = (body) => {
    return new Promise((resolve, reject) => {
        axios.post('/auth/register', { body })
            .then(response => {                
                resolve(response)
            })
            .catch((err) => reject(err))
    })
}

const getAuthUser = () => {    
    return new Promise((resolve, reject) => {
        axios.get('/auth/me')
            .then(response => {                
                resolve(response)
            })
            .catch((err) => reject(err))
    })
}

const logout = () => {
    return new Promise((resolve, reject) => {
        axios.get('/auth/logout')
            .then(response => {
                resolve(response)
            })
            .catch(error => {
                resolve(error)
            })
    })
}

export const authService = {
    login,
    register,
    getAuthUser,
    logout
}