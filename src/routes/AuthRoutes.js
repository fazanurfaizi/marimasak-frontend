import { Switch, Route } from 'react-router-dom'

import Login from '../views/Auth/Login'
import Register from '../views/Auth/Register'
import ForgotPassword from '../views/Auth/ForgotPassword'

const AuthRoutes = () => {
    return (
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
    )
}

export default AuthRoutes
