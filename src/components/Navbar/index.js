/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useDetectClickOutside } from 'react-detect-click-outside';
import { logout } from '../../actions/auth'
import logo from '../../assets/images/logo.png'
import annieProfile from '../../assets/images/Annie.PNG'

const Navbar = () => {

    const dispatch = useDispatch()
    const location = useLocation();
    const isAuthenticating = useSelector(state => state.auth.isAuthenticating)
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const authUser = useSelector(state => state.auth.user)
    const [currentRoute, setCurrentRoute] = useState('');
    const [openNotification, setOpenNotification] = useState(false);    
    const [openDetMsg, setOpenDetMsg] = useState(false);    
    const [openMessage, setOpenMessage] = useState(false);
    const [openLanguage, setOpenLanguage] = useState(false);
    const [openProfile, setOpenProfile] = useState(false);
    const [language, setLanguage] = useState('english');

    const closeNotification = () => {
        setOpenNotification(false)
    }
    const popupChat = () => {
        setOpenDetMsg(openDetMsg => !openDetMsg);
    }
    const notificationRef = useDetectClickOutside({ onTriggered: closeNotification })

    const closeMessage = () => {
        setOpenMessage(false)
    }
    const messageRef = useDetectClickOutside({ onTriggered: closeMessage })

    const closeLanguage = () => {
        setOpenLanguage(false)
    }
    const languageRef = useDetectClickOutside({ onTriggered: closeLanguage })

    const closeProfile = () => {
        setOpenProfile(false)
    }
    const profileRef = useDetectClickOutside({ onTriggered: closeProfile })
       
    useEffect(() => {
        setCurrentRoute(location.pathname)
    }, [currentRoute, location.pathname])

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout())
    }

    return (
        <div className="topbar stick">
            <div className="logo">
                <Link to="/" title="Marimasak">
                    <img src={logo} alt="Marimasak" />
                </Link>
            </div>

            <div className="top-area">
                <div className="top-search">
                    <form>
                        <input type="text" placeholder="Search" className="bg-light-gray" />
                        <button data-ripple><a href="search/product"><i className="ti-search"></i></a></button>
                    </form>
                </div>                    
                <ul className="setting-area">                        
                    <li>
                        <Link to="/">
                            <i className="ti-home"></i>
                        </Link>                            
                    </li>
                    <li>
                        <Link to="/checkout">
                            <i className="ti-bag"></i><span>20</span>
                        </Link>                            
                    </li>
                    {isAuthenticated && (
                        <li ref={notificationRef}>
                            <a style={{ 'cursor': 'pointer' }} title="Notification" onClick={() => setOpenNotification(!openNotification)}>
                                <i className="ti-bell"></i><span>20</span>
                            </a>
                            <div className={openNotification ? 'dropdowns active' : 'dropdowns'}>
                                <span>4 New Notifications</span>
                                <ul className="drops-menu">
                                    <li>
                                        <a href="#" title="">
                                            <img src={annieProfile} alt="" />
                                            <div className="mesg-meta">
                                                <h6>Fachri</h6>
                                                <span>Menyukai resep anda.</span>
                                                <i>2 min ago</i>
                                            </div>
                                        </a>
                                        <span className="tag green">New</span>
                                    </li>
                                    <li>
                                        <a href="#" title="">
                                            <img src={annieProfile} alt="" />
                                            <div className="mesg-meta">
                                                <h6>Taufik</h6>
                                                <span>Menyukai resep anda.</span>
                                                <i>2 min ago</i>
                                            </div>
                                        </a>
                                        <span className="tag red">New</span>
                                    </li>
                                    <li>
                                        <a href="#" title="">
                                            <img src={annieProfile} alt="" />
                                            <div className="mesg-meta">
                                                <h6>Daffa</h6>
                                                <span>Menyukai resep anda.</span>
                                                <i>2 min ago</i>
                                            </div>
                                        </a>
                                        <span className="tag red">New</span>
                                    </li>
                                </ul>
                                <a href="#" title="" className="more-mesg">view more</a>
                            </div>
                        </li>
                    )}                    
                </ul>
                <div className="user-img" onClick={() => setOpenProfile(!openProfile)} ref={profileRef}>
                    <img src={annieProfile} alt="" width="40" />
                    <span className="status f-online"></span>
                    {isAuthenticated ? (
                        <div className={openProfile ? 'user-setting active' : 'user-setting'}>  
                            <Link to={`/u/${authUser?.name}`} title="Profile">
                                <i className="ti-user"></i> {authUser?.name}
                            </Link>                            
                            <Link to="/settings-basic" title="activity log">
                                <i className="ti-target"></i>
                                activity log
                            </Link>                        
                            <Link to="/settings-basic" title="settings">
                                <i className="ti-settings"></i>
                                settings
                            </Link>                   
                            <button className="btn btn-light blue" onClick={handleLogout} title="Logout">
                                <i className="ti-power-off"></i>
                                {' '}
                                <span>
                                    {isAuthenticating ? "Loading..." : "Log Out"}
                                </span>                            
                            </button>                             
                        </div>
                    ) : (
                        <div className={openProfile ? 'user-setting active' : 'user-setting'}>  
                            <Link to="/login" title="Login">
                                <i className="ti-user"></i> Login
                            </Link>                                                                        
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar
