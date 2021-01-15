import { Switch, Route } from 'react-router-dom'

import Login from '../views/Auth/Login'
import Register from '../views/Auth/Register'

const AuthRoutes = () => {
    return (
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </Switch>
    )
}

export default AuthRoutes
