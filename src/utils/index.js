import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()

export function createConstants(...constants) {
    return constants.reduce((acc, constant) => {
        acc[constant] = constant;
        return acc;
    }, {})
}

export function createReducer(initialState, reducers) {
    return (state = initialState, action) => {
        const reducer = reducers[action.type]

        return reducer ? reducer(state, action.payload) : state
    }
}