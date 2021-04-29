import axios from './axios'

const getAllRecipes = () => {
    return new Promise((resolve, reject) => {
        axios.get('/recipes')
            .then((response) => resolve(response))
            .catch((err) => reject(err))
    })
}

export const recipeService = {
    getAllRecipes
}