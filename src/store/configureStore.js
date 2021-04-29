import {
    createStore,
    applyMiddleware,
    combineReducers,
    compose
} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {
    createLogger
} from 'redux-logger'

import alert from '../reducers/alert'
import auth from '../reducers/auth'

const logger = createLogger();
const rootReducer = combineReducers({
    auth,
    alert
})
const initialState = {};

export default function() {
    let store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            thunkMiddleware,
            logger
        )
    );

    // if(module.hot) {
    //     store = createStore(
    //         rootReducer,
    //         initialState,
    //         compose(
    //             applyMiddleware(thunkMiddleware, logger),
    //             window.devToolsExtension ? window.devToolsExtension() : f => f
    //         )
    //     )
    // } else {
    //     store = createStore(
    //         rootReducer,
    //         initialState,
    //         compose(applyMiddleware(thunkMiddleware), f => f)
    //     )
    // }    

    return store
}