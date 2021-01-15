import { BrowserRouter, Switch } from 'react-router-dom'
import AppRoute from './AppRoute'

import AppLayout from './layout/AppLayout'
import AuthLayout from './layout/AuthLayout'
import SettingLayout from './layout/SettingLayout'

// App Pages
import Home from './views/Home'
import FriendsTimeline from './views/FriendsTimeline'
import Messages from './views/Messages'
import Notifications from './views/Notifications'

// Auth Pages
import Login from './views/Auth/Login'
import Register from './views/Auth/Register'
import ForgotPassword from './views/Auth/ForgotPassword'

// Setting Pages
import BasicSetting from './views/Setting/BasicSetting'
import BlockingSetting from './views/Setting/BlockingSetting'
import FaceRegcognitionSetting from './views/Setting/FaceRecognitionSetting'
import InfoSetting from './views/Setting/InfoSetting'
import LocalizationSetting from './views/Setting/LocalizationSetting'
import LocationSetting from './views/Setting/LocationSetting'
import MobileSetting from './views/Setting/MobileSetting'
import NotificationSetting from './views/Setting/NotificationSetting'
import PostSetting from './views/Setting/PostSetting'
import PrivacySetting from './views/Setting/PrivacySetting'
import SecuritySetting from './views/Setting/SecuritySetting'
import StorySetting from './views/Setting/StorySetting'
import TimelineSetting from './views/Setting/TimelineSetting'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <AppRoute exact path="/" component={Home} layout={AppLayout} />
        <AppRoute path="/friends" component={FriendsTimeline} layout={AppLayout} />
        <AppRoute path="/notifications" component={Notifications} layout={AppLayout} />
        <AppRoute path="/messages" component={Messages} layout={AppLayout} />
        <AppRoute exact path="/login" component={Login} layout={AuthLayout} />
        <AppRoute path="/register" component={Register} layout={AuthLayout} />
        <AppRoute path="/forgot-password" component={ForgotPassword} layout={AuthLayout} />
        <AppRoute path="/settings-basic" component={BasicSetting} layout={SettingLayout} />
        <AppRoute path="/settings-blocking" component={BlockingSetting} layout={SettingLayout} />
        <AppRoute path="/settings-facerec" component={FaceRegcognitionSetting} layout={SettingLayout} />
        <AppRoute path="/settings-info" component={InfoSetting} layout={SettingLayout} />
        <AppRoute path="/settings-localization" component={LocalizationSetting} layout={SettingLayout} />
        <AppRoute path="/settings-location" component={LocationSetting} layout={SettingLayout} />
        <AppRoute path="/settings-mobile" component={MobileSetting} layout={SettingLayout} />
        <AppRoute path="/settings-notifications" component={NotificationSetting} layout={SettingLayout} />
        <AppRoute path="/settings-posts" component={PostSetting} layout={SettingLayout} />
        <AppRoute path="/settings-privacy" component={PrivacySetting} layout={SettingLayout} />
        <AppRoute path="/settings-security" component={SecuritySetting} layout={SettingLayout} />
        <AppRoute path="/settings-stories" component={StorySetting} layout={SettingLayout} />
        <AppRoute path="/settings-timeline" component={TimelineSetting} layout={SettingLayout} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
