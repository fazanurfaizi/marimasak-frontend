import AppLayout from '../layout/AppLayout'
import NavLayout from '../layout/NavLayout'
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

// Profile Pages
import Profile from '../views/Profile'
import AboutProfile from '../views/Profile/AboutProfile'
import FriendsProfile from '../views/Profile/FriendsProfile'
import PhotosProfile from '../views/Profile/PhotosProfile'

import Checkout from '../views/Checkout/Checkout'
import Product from '../views/Product/Product'
import Friends from '../views/Friends/Friends'
import DetailProduct from '../views/Product/DetailProduct'

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
import NotFound from '../views/Error/NotFound'
import ErrorLayout from '../layout/ErrorLayout'
import ProfileLayout from '../layout/ProfileLayout'

export const routes = [
    { 
        path: '/', 
        component: Login, 
        layout: AppLayout,
        authentication: true 
    },
    { 
        path: '/home', 
        component: Home, 
        layout: AppLayout,
        authentication: true 
    },
    { 
        path: '/search/product', 
        component: Product, 
        layout: AppLayout,
        authentication: false 
    },
    { 
        path: '/search/friends', 
        component: Friends, 
        layout: AppLayout,
        authentication: false 
    },
    { 
        path: '/checkout', 
        component: Checkout, 
        layout: NavLayout,
        authentication: false 
    },
    { 
        path: `/detail/:value`, 
        component: DetailProduct, 
        layout: NavLayout,
        authentication: false 
    },
    {
        path: '/friends', 
        component: FriendsTimeline, 
        layout: AppLayout,
        authentication: true
    },
    { 
        path: '/notifications', 
        component: Notifications, 
        layout: AppLayout,
        authentication: true
    },
    { 
        path: '/messages', 
        component: Messages, 
        layout: AppLayout,
        authentication: true 
    },

    { 
        path: '/login', 
        component: Login, 
        layout: AuthLayout,
        authentication: false 
    },
    { 
        path: '/register', 
        component: Register, 
        layout: AuthLayout,
        authentication: false
    },
    { 
        path: '/forgot-password', 
        component: ForgotPassword, 
        layout: AuthLayout,
        authentication: false 
    },

    {
        path: '/u/:username',
        component: Profile,
        layout: ProfileLayout,
        authentication: true
    },
    {
        path: '/u/:username/about',
        component: AboutProfile,
        layout: ProfileLayout,
        authentication: true
    },
    {
        path: '/u/:username/photos',
        component: PhotosProfile,
        layout: ProfileLayout,
        authentication: true
    },
    {
        path: '/u/:username/friends',
        component: FriendsProfile,
        layout: ProfileLayout,
        authentication: true
    },

    { 
        path: '/settings-basic', 
        component: BasicSetting, 
        layout: SettingLayout,
        authentication: true  
    },
    { 
        path: '/settings-blocking', 
        component: BlockingSetting, 
        layout: SettingLayout,
        authentication: true  
    },
    { 
        path: '/settings-facerec', 
        component: FaceRegcognitionSetting, 
        layout: SettingLayout,
        authentication: true  
    },
    { 
        path: '/settings-info', 
        component: InfoSetting, 
        layout: SettingLayout,
        authentication: true  
    },
    { 
        path: '/settings-localization', 
        component: LocalizationSetting, 
        layout: SettingLayout,
        authentication: true  
    },
    { 
        path: '/settings-location', 
        component: LocationSetting, 
        layout: SettingLayout,
        authentication: true  
    },
    { 
        path: '/settings-mobile', 
        component: MobileSetting, 
        layout: SettingLayout,
        authentication: true  
    },
    { 
        path: '/settings-notifications', 
        component: NotificationSetting, 
        layout: SettingLayout,
        authentication: true  
    },
    { 
        path: '/settings-posts', 
        component: PostSetting, 
        layout: SettingLayout,
        authentication: true  
    },
    { 
        path: '/settings-privacy', 
        component: PrivacySetting, 
        layout: SettingLayout,
        authentication: true  
    },
    { 
        path: '/settings-security', 
        component: SecuritySetting, 
        layout: SettingLayout,
        authentication: true  
    },
    { 
        path: '/settings-stories', 
        component: StorySetting, 
        layout: SettingLayout,
        authentication: true  
    },
    { 
        path: '/settings-timeline', 
        component: TimelineSetting, 
        layout: SettingLayout,
        authentication: true  
    },    

    {
        path: '*',
        component: NotFound,
        layout: ErrorLayout,
        authentication: false
    }
];