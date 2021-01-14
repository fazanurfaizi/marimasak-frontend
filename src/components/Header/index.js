import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
    return (
        <div className="responsive-header">
            <div className="mh-head first sticky">
                <span className="mh-btns-left">
                    <a href="#menu">
                        <FontAwesomeIcon icon="align-justify" />
                    </a>
                </span>
                <span className="mh-text">
                    <NavLink to="/" title="news">
                        <img alt="logo" src={require('../../assets/images/logo.png')} />
                    </NavLink>
                </span>
                <span className="mh-btns-right">
                    <a href="#shoppingBag">
                        <FontAwesomeIcon icon="sliders-h" />
                    </a>
                </span>
            </div>
        </div>
    )
}

export default Header
