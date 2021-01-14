import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo from '../../assets/images/logo.png'
import annieProfile from '../../assets/images/Annie.PNG'

const Navbar = () => {

    return (
        <div className="container-fluid">
            <div className="topbar stick">
                <div className="logo">
                    <a href="/" title="Marimasak">
                        <img src={logo} alt="Marimasak" />
                    </a>
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
                            <a href="newsfeed.html" title="Home" data-ripple="">
                                <i className="ti-home"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" title="Notification" data-ripple="">
                                <i className="ti-bell"></i><span>20</span>
                            </a>
                            <div className="dropdowns">
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
                            <a href="#" title="Messages" data-ripple="">
                                <i className="ti-comment"></i><span>12</span></a>
                            <div className="dropdowns">
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
                            <a href="#" title="Languages" data-ripple="">
                                <FontAwesomeIcon icon="globe-asia" />
                            </a>
                            <div className="dropdowns languages">
                                <a href="#" title=""><i className="ti-check"></i>English</a>
                                <a href="#" title="">Arabic</a>
                                <a href="#" title="">Dutch</a>
                                <a href="#" title="">French</a>
                            </div>
                        </li>
                    </ul>
                    <div className="user-img">
                        <img src={annieProfile} alt="" width="40" />
                        <span className="status f-online"></span>
                        <div className="user-setting">                            
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
