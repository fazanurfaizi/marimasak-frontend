import axios from './axios'

const getProductTypes = () => {
    return new Promise((resolve, reject) => {
        axios.get('/product-types')
            .then((response) => resolve(response))
            .catch((err) => reject(err))
    })
}

const getProducts = (productTypeId) => {
    return new Promise((resolve, reject) => {
        axios.get('/products', {
            params: {
                'product_type_id': productTypeId
            }
        })
        .then((response) => resolve(response))
        .catch((err) => reject(err))
    })
}

export const productService = {
    getProductTypes,
    getProducts
}