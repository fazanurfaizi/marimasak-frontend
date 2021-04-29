import { recipeService } from '../services/recipe.service'
import { history } from '../utils/history'

export const FETCH_RECIPES_REQUEST = 'FETCH_RECIPES_REQUEST'
export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS'
export const FETCH_RECIPES_FAILURE = 'FETCH_RECIPES_FAILURE'

export function fetchRecipesRequest() {
    return {
        type: FETCH_RECIPES_REQUEST
    }
}

export function fetchRecipesSuccess(data) {
    return {
        type: FETCH_RECIPES_SUCCESS,
        payload: {
            recipes: data
        }
    }
} 

export function fetchRecipesFailure(error) {
    return {
        type: FETCH_RECIPES_FAILURE,
        payload: {
            message: error.data.message
        }
    }
}

export function fetchRecipes() {
    return function(dispatch) {
        dispatch(fetchRecipesRequest())
        recipeService.getAllRecipes()
            .then(response => {
                dispatch(fetchRecipesSuccess(response.data.data))                
            })
            .catch(error => {
                dispatch(fetchRecipesFailure(error))
            })
    }
}