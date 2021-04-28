import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const MobileNavbar = () => {
    return (
        <div className="responsive-header">
            <div className="mh-head first sticky">
                <span className="mh-btns-left">
                    <a href="#menu">
                        <FontAwesomeIcon icon="align-justify" />
                    </a>
                </span>
                <span className="mh-text">
                    <a href="/" title="news">
                        <img alt="logo" src={logo} />
                    </a>
                </span>
                <span className="mh-btns-right">
                    <a href="#shoppingbag">
                        <FontAwesomeIcon icon="sliders-h" />
                    </a>
                </span>
            </div>
            <div className="mh-head second">
                <form className="mh-form">
                    <input type="text" placeholder="Search" />
                    <a href="search/product" className="fa fa-search"></a>
                </form>
            </div>
            <nav id="menu" className="res-menu">
                <ul>                   
                    <li>
                        <Link to="/u/profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/friends">Friends</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/checkout">Checkout</Link>
                    </li>
                </ul>
            </nav>
            <nav id="shoppingbag">
                <div>
                    <div className="">
                        <form method="post">
                            <div className="setting-row">
                                <span>use night mode</span>
                                <input type="checkbox" id="nightmode"/> 
                                <label htmlFor="nightmode" data-on-label="ON" data-off-label="OFF"></label>
                            </div>
                            <div className="setting-row">
                                <span>Notifications</span>
                                <input type="checkbox" id="switch2"/> 
                                <label htmlFor="switch2" data-on-label="ON" data-off-label="OFF"></label>
                            </div>
                            <div className="setting-row">
                                <span>Notification sound</span>
                                <input type="checkbox" id="switch3"/> 
                                <label htmlFor="switch3" data-on-label="ON" data-off-label="OFF"></label>
                            </div>
                            <div className="setting-row">
                                <span>My profile</span>
                                <input type="checkbox" id="switch4"/> 
                                <label htmlFor="switch4" data-on-label="ON" data-off-label="OFF"></label>
                            </div>
                            <div className="setting-row">
                                <span>Show profile</span>
                                <input type="checkbox" id="switch5"/> 
                                <label htmlFor="switch5" data-on-label="ON" data-off-label="OFF"></label>
                            </div>
                        </form>
                        <h4 className="panel-title">Account Setting</h4>
                        <form method="post">
                            <div className="setting-row">
                                <span>Sub users</span>
                                <input type="checkbox" id="switch6" /> 
                                <label htmlFor="switch6" data-on-label="ON" data-off-label="OFF"></label>
                            </div>
                            <div className="setting-row">
                                <span>personal account</span>
                                <input type="checkbox" id="switch7" /> 
                                <label htmlFor="switch7" data-on-label="ON" data-off-label="OFF"></label>
                            </div>
                            <div className="setting-row">
                                <span>Business account</span>
                                <input type="checkbox" id="switch8" /> 
                                <label htmlFor="switch8" data-on-label="ON" data-off-label="OFF"></label>
                            </div>
                            <div className="setting-row">
                                <span>Show me online</span>
                                <input type="checkbox" id="switch9" /> 
                                <label htmlFor="switch9" data-on-label="ON" data-off-label="OFF"></label>
                            </div>
                            <div className="setting-row">
                                <span>Delete history</span>
                                <input type="checkbox" id="switch10" /> 
                                <label htmlFor="switch10" data-on-label="ON" data-off-label="OFF"></label>
                            </div>
                            <div className="setting-row">
                                <span>Expose author name</span>
                                <input type="checkbox" id="switch11" /> 
                                <label htmlFor="switch11" data-on-label="ON" data-off-label="OFF"></label>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default MobileNavbar
