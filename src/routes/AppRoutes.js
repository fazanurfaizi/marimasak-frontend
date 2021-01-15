import { Switch, Route } from 'react-router-dom'

import Home from '../views/Home'
import FriendsTimeline from '../views/FriendsTimeline'
import Messages from '../views/Messages'
import Notifications from '../views/Notifications'

const AppRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/friends" component={FriendsTimeline} />
            <Route path="/messages" component={Messages} />
            <Route path="/notifications" component={Notifications} />
        </Switch> 
    )
}

export default AppRoutes
