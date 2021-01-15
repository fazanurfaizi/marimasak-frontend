/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo from '../../assets/images/logo.png'
import annieProfile from '../../assets/images/Annie.PNG'

const Navbar = () => {

    const [currentRoute, setCurrentRoute] = useState('');
    const [openNotification, setOpenNotification] = useState(false);
    const [openMessage, setOpenMessage] = useState(false);
    const [openLanguage, setOpenLanguage] = useState(false);
    const [openProfile, setOpenProfile] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setCurrentRoute(location.pathname)
    }, [currentRoute, location.pathname])

    return (
        <div className="container-fluid">
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
                        <li>
                            <a style={{ 'cursor': 'pointer' }} title="Notification" onClick={() => setOpenNotification(!openNotification)}>
                                <i className="ti-bell"></i><span>20</span>
                            </a>
                            <div className={openNotification ? 'dropdowns active' : 'dropdowns'}>
                                <span>4 New Notifications</span>
                                <ul className="drops-menu">
                                    <li>
                                        <a href="notifications.html" title="">
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
                                        <a href="notifications.html" title="">
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
                                        <a href="notifications.html" title="">
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
                                        <a href="notifications.html" title="">
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
                                        <a href="notifications.html" title="">
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
                                <a href="notifications.html" title="" className="more-mesg">view more</a>
                            </div>
                        </li>
                        <li>
                            <a style={{ 'cursor': 'pointer' }} title="Messages" onClick={() => setOpenMessage(!openMessage)}>
                                <i className="ti-comment"></i>
                                <span>12</span>
                            </a>
                            <div className={openMessage ? 'dropdowns active' : 'dropdowns'}>
                                <span>5 New Messages</span>
                                <ul className="drops-menu">
                                    <li>
                                        <a href="notifications.html" title="">
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
                                        <a href="notifications.html" title="">
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
                                        <a href="notifications.html" title="">
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
                                        <a href="notifications.html" title="">
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
                                        <a href="notifications.html" title="">
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
                                        <a href="notifications.html" title="">
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
                                        <a href="notifications.html" title="">
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
                                <a href="messages.html" title="" className="more-mesg">view more</a>
                            </div>
                        </li>
                        <li>
                            <a style={{ cursor: 'pointer' }} title="Languages" onClick={() => setOpenLanguage(!openLanguage)}>
                                <FontAwesomeIcon icon="globe-asia" />
                            </a>
                            <div className={openLanguage ? 'dropdowns languages active' : 'dropdowns languages'}>
                                <a href="#" title=""><i className="ti-check"></i>English</a>
                                <a href="#" title="">Arabic</a>
                                <a href="#" title="">Dutch</a>
                                <a href="#" title="">French</a>
                            </div>
                        </li>
                    </ul>
                    <div className="user-img" onClick={() => setOpenProfile(!openProfile)}>
                        <img src={annieProfile} alt="" width="40" />
                        <span className="status f-online"></span>
                        <div className={openProfile ? 'user-setting active' : 'user-setting'}>                            
                            <a href="#" title=""><i className="ti-user"></i> view profile</a>
                            <a href="#" title=""><i className="ti-pencil-alt"></i>edit profile</a>
                            <a href="#" title=""><i className="ti-target"></i>activity log</a>
                            <a href="#" title=""><i className="ti-settings"></i>account setting</a>
                            <a href="#" title=""><i className="ti-power-off"></i>log out</a>
                        </div>
                    </div>
                    <span className="ti-menu main-menu" data-ripple="">                        
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Navbar
