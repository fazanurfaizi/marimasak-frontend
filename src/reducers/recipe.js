import { createReducer } from '../utils'
import {
    FETCH_RECIPES_REQUEST,
    FETCH_RECIPES_SUCCESS,
    FETCH_RECIPES_FAILURE
} from '../actions/recipes'

const initialState = {
    recipes: [],
    recipe: null,
    message: '',
    loading: false
}

export default createReducer(initialState, {
    [FETCH_RECIPES_REQUEST]: (state, payload) => {
        return Object.assign({}, state, {
            'loading': true,
            'recipes': []
        })
    },
    [FETCH_RECIPES_SUCCESS]: (state, payload) => {
        return Object.assign({}, state, {
            'loading': false,
            'recipes': payload.recipes
        })
    },
    [FETCH_RECIPES_FAILURE]: (state, payload) => {
        return Object.assign({}, state, {
            'loading': false,
            'message': payload.message,
            'recipes': []
        })
    }
})