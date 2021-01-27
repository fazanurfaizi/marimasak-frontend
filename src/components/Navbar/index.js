/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDetectClickOutside } from 'react-detect-click-outside';

import logo from '../../assets/images/logo.png'
import annieProfile from '../../assets/images/Annie.PNG'

const Navbar = () => {

    const [currentRoute, setCurrentRoute] = useState('');
    const [openNotification, setOpenNotification] = useState(false);    
    const [openMessage, setOpenMessage] = useState(false);
    const [openLanguage, setOpenLanguage] = useState(false);
    const [openProfile, setOpenProfile] = useState(false);
    const [language, setLanguage] = useState('english');
    const location = useLocation();

    const closeNotification = () => {
        setOpenNotification(false)
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
                        <input type="text" placeholder="Search Friend" className="bg-light-gray" />
                        <button data-ripple><i className="ti-search"></i></button>
                    </form>
                </div>                    
                <ul className="setting-area">                        
                    <li>
                        <Link to="/">
                            <i className="ti-home"></i>
                        </Link>                            
                    </li>
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
                                            <h6>sarah Loren</h6>
                                            <span>Hi, how r u dear ...?</span>
                                            <i>2 min ago</i>
                                        </div>
                                    </a>
                                    <span className="tag green">New</span>
                                </li>
                                <li>
                                    <a href="#" title="">
                                        <img src={annieProfile} alt="" />
                                        <div className="mesg-meta">
                                            <h6>Jhon doe</h6>
                                            <span>Hi, how r u dear ...?</span>
                                            <i>2 min ago</i>
                                        </div>
                                    </a>
                                    <span className="tag red">Reply</span>
                                </li>
                                <li>
                                    <a href="#" title="">
                                        <img src={annieProfile} alt="" />
                                        <div className="mesg-meta">
                                            <h6>Andrew</h6>
                                            <span>Hi, how r u dear ...?</span>
                                            <i>2 min ago</i>
                                        </div>
                                    </a>
                                    <span className="tag blue">Unseen</span>
                                </li>
                                <li>
                                    <a href="#" title="">
                                        <img src={annieProfile} alt="" />
                                        <div className="mesg-meta">
                                            <h6>Tom cruse</h6>
                                            <span>Hi, how r u dear ...?</span>
                                            <i>2 min ago</i>
                                        </div>
                                    </a>
                                    <span className="tag">New</span>
                                </li>
                                <li>
                                    <a href="#" title="">
                                        <img src={annieProfile} alt="" />
                                        <div className="mesg-meta">
                                            <h6>Amy</h6>
                                            <span>Hi, how r u dear ...?</span>
                                            <i>2 min ago</i>
                                        </div>
                                    </a>
                                    <span className="tag">New</span>
                                </li>
                            </ul>
                            <a href="#" title="" className="more-mesg">view more</a>
                        </div>
                    </li>
                    <li ref={messageRef}>
                        <a style={{ 'cursor': 'pointer' }} title="Messages" onClick={() => setOpenMessage(!openMessage)}>
                            <i className="ti-comment"></i>
                            <span>12</span>
                        </a>
                        <div className={openMessage ? 'dropdowns active' : 'dropdowns'}>
                            <span>5 New Messages</span>
                            <ul className="drops-menu">
                                <li>
                                    <a href="#" title="">
                                        <img src={annieProfile} alt="" />
                                        <div className="mesg-meta">
                                            <h6>sarah Loren</h6>
                                            <span>Hi, how r u dear ...?</span>
                                            <i>2 min ago</i>
                                        </div>
                                    </a>
                                    <span className="tag green">New</span>
                                </li>
                                <li>
                                    <a href="#" title="">
                                        <img src={annieProfile} alt="" />
                                        <div className="mesg-meta">
                                            <h6>Jhon doe</h6>
                                            <span>Hi, how r u dear ...?</span>
                                            <i>2 min ago</i>
                                        </div>
                                    </a>
                                    <span className="tag red">Reply</span>
                                </li>
                                <li>
                                    <a href="#" title="">
                                        <img src={annieProfile} alt="" />
                                        <div className="mesg-meta">
                                            <h6>Andrew</h6>
                                            <span>Hi, how r u dear ...?</span>
                                            <i>2 min ago</i>
                                        </div>
                                    </a>
                                    <span className="tag blue">Unseen</span>
                                </li>
                                <li>
                                    <a href="#" title="">
                                        <img src={annieProfile} alt="" />
                                        <div className="mesg-meta">
                                            <h6>Tom cruse</h6>
                                            <span>Hi, how r u dear ...?</span>
                                            <i>2 min ago</i>
                                        </div>
                                    </a>
                                    <span className="tag">New</span>
                                </li>
                                <li>
                                    <a href="#" title="">
                                        <img src={annieProfile} alt="" />
                                        <div className="mesg-meta">
                                            <h6>Amy</h6>
                                            <span>Hi, how r u dear ...?</span>
                                            <i>2 min ago</i>
                                        </div>
                                    </a>
                                    <span className="tag">New</span>
                                </li>
                                <li>
                                    <a href="#" title="">
                                        <img src={annieProfile} alt="" />
                                        <div className="mesg-meta">
                                            <h6>Amy</h6>
                                            <span>Hi, how r u dear ...?</span>
                                            <i>2 min ago</i>
                                        </div>
                                    </a>
                                    <span className="tag">New</span>
                                </li>
                                <li>
                                    <a href="#" title="">
                                        <img src={annieProfile} alt="" />
                                        <div className="mesg-meta">
                                            <h6>Amy</h6>
                                            <span>Hi, how r u dear ...?</span>
                                            <i>2 min ago</i>
                                        </div>
                                    </a>
                                    <span className="tag">New</span>
                                </li>
                            </ul>
                            <a href="#" title="" className="more-mesg">view more</a>
                        </div>
                    </li>
                    <li ref={languageRef}>
                        <a style={{ cursor: 'pointer' }} title="Languages" onClick={() => setOpenLanguage(!openLanguage)}>
                            <FontAwesomeIcon icon="globe-asia" />
                        </a>
                        <div className={openLanguage ? 'dropdowns languages active' : 'dropdowns languages'}>
                            <a href="#" title="">
                                { language === 'english' ? <i className="ti-check"></i> : '' }
                                English
                            </a>
                            <a href="#" title="">
                                { language === 'arabic' ? <i className="ti-check"></i> : '' }
                                Arabic
                            </a>
                            <a href="#" title="">
                                { language === 'dutch' ? <i className="ti-check"></i> : '' }
                                Dutch
                            </a>
                            <a href="#" title="">
                                { language === 'indonesia' ? <i className="ti-check"></i> : '' }
                                Indonesia
                            </a>
                        </div>
                    </li>
                </ul>
                <div className="user-img" onClick={() => setOpenProfile(!openProfile)} ref={profileRef}>
                    <img src={annieProfile} alt="" width="40" />
                    <span className="status f-online"></span>
                    <div className={openProfile ? 'user-setting active' : 'user-setting'}>  
                        <Link to="/profile" title="Profile">
                            <i className="ti-user"></i> profile
                        </Link>                            
                        <Link to="/settings-basic" title="activity log">
                            <i className="ti-target"></i>
                            activity log
                        </Link>                        
                        <Link to="/settings-basic" title="settings">
                            <i className="ti-settings"></i>
                            settings
                        </Link>                        
                        <a href="#" title=""><i className="ti-power-off"></i>log out</a>
                    </div>
                </div>
                <span className="ti-menu main-menu" data-ripple="">                        
                </span>
            </div>
        </div>
    )
}

export default Navbar
