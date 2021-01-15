import AppLayout from '../layout/AppLayout'
import AuthLayout from '../layout/AuthLayout'
import SettingLayout from '../layout/SettingLayout'

// App Pages
import Home from '../views/Home'
import FriendsTimeline from '../views/FriendsTimeline'
import Messages from '../views/Messages'
import Notifications from '../views/Notifications'

// Auth Pages
import Login from '../views/Auth/Login'
import Register from '../views/Auth/Register'
import ForgotPassword from '../views/Auth/ForgotPassword'

// Setting Pages
import BasicSetting from '../views/Setting/BasicSetting'
import BlockingSetting from '../views/Setting/BlockingSetting'
import FaceRegcognitionSetting from '../views/Setting/FaceRecognitionSetting'
import InfoSetting from '../views/Setting/InfoSetting'
import LocalizationSetting from '../views/Setting/LocalizationSetting'
import LocationSetting from '../views/Setting/LocationSetting'
import MobileSetting from '../views/Setting/MobileSetting'
import NotificationSetting from '../views/Setting/NotificationSetting'
import PostSetting from '../views/Setting/PostSetting'
import PrivacySetting from '../views/Setting/PrivacySetting'
import SecuritySetting from '../views/Setting/SecuritySetting'
import StorySetting from '../views/Setting/StorySetting'
import TimelineSetting from '../views/Setting/TimelineSetting'

export const routes = [
    { 
        path: '/', 
        component: Home, 
        layout: AppLayout 
    },
    {
        path: '/friends', 
        component: FriendsTimeline, 
        layout: AppLayout 
    },
    { 
        path: '/notifications', 
        component: Notifications, 
        layout: AppLayout 
    },
    { 
        path: '/messages', 
        component: Messages, 
        layout: AppLayout 
    },

    { 
        path: '/login', 
        component: Login, 
        layout: AuthLayout 
    },
    { 
        path: '/register', 
        component: Register, 
        layout: AuthLayout 
    },
    { 
        path: '/forgot-password', 
        component: ForgotPassword, 
        layout: AuthLayout 
    },

    { 
        path: '/settings-basic', 
        component: BasicSetting, 
        layout: SettingLayout 
    },
    { 
        path: '/settings-blocking', 
        component: BlockingSetting, 
        layout: SettingLayout 
    },
    { 
        path: '/settings-facerec', 
        component: FaceRegcognitionSetting, 
        layout: SettingLayout 
    },
    { 
        path: '/settings-info', 
        component: InfoSetting, 
        layout: SettingLayout 
    },
    { 
        path: '/settings-localization', 
        component: LocalizationSetting, 
        layout: SettingLayout 
    },
    { 
        path: '/settings-location', 
        component: LocationSetting, 
        layout: SettingLayout 
    },
    { 
        path: '/settings-mobile', 
        component: MobileSetting, 
        layout: SettingLayout 
    },
    { 
        path: '/settings-notifications', 
        component: NotificationSetting, 
        layout: SettingLayout 
    },
    { 
        path: '/settings-posts', 
        component: PostSetting, 
        layout: SettingLayout 
    },
    { 
        path: '/settings-privacy', 
        component: PrivacySetting, 
        layout: SettingLayout 
    },
    { 
        path: '/settings-security', 
        component: SecuritySetting, 
        layout: SettingLayout 
    },
    { 
        path: '/settings-stories', 
        component: StorySetting, 
        layout: SettingLayout 
    },
    { 
        path: '/settings-timeline', 
        component: TimelineSetting, 
        layout: SettingLayout 
    },    
];