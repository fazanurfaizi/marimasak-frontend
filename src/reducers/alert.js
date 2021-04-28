import {
    CONNECT_SUCCESS,
    CONNECT_ERROR,
    ALERT,
    DISMISS
} from '../actions/alert'

const initialState = {
    alerts: [],
    hasError: false
}

export default function alert(state = initialState, action) {
    switch (action.type) {
        case CONNECT_SUCCESS:
            const payload = {
                type: 'info',
                message: 'Waiting for alerts',
                time: new Date().toString()
            }
            const alerts = state.alerts || []
            return Object.assign({}, state, { hasError: false }, { alerts: [payload, ...alerts] })            
        default:
            return state;
    }
}