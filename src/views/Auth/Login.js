import { Link } from 'react-router-dom'
import LinkButton from '../../templates/LinkButton'

const Login = () => {
    return (
        <div className="log-reg-area sign">
            <h2 className="log-title">Login</h2>
                <p>
                    Don’t use Winku Yet? 
                    {' '}     
                    <a href="https://www.marimasak.com" title="marimasak.com" target="_blank" rel="noreferrer">
                        Take the tour
                    </a>               
                    {' '} or {' '}
                    <Link to="/register" title="Register">
                        Join now
                    </Link>
                </p>
            <form method="post">
                <div className="form-group">	
                    <input type="text" id="input" required="required"/>
                    <label className="control-label" htmlFor="input">Username</label><i className="mtrl-select"></i>
                </div>
                <div className="form-group">	
                    <input type="password" required="required"/>
                    <label className="control-label" htmlFor="input">Password</label><i className="mtrl-select"></i>
                </div>
                <div className="checkbox">
                    <label>
                    <input type="checkbox"/><i className="check-box"></i>Always Remember Me.
                    </label>
                </div>
                <Link to="/forgot-password" className="forgot-pwd" title="Forgot Password">
                    Forgot Password?
                </Link>                                
                <div className="submit-btns justify-content-between">
                    <button className="mtr-btn signin mr-4" type="button">
                        <span>Login</span>
                    </button>        
                    <LinkButton className="mtr-btn signup" to="/register">
                        <span>
                            Register
                        </span>
                    </LinkButton>                                                
                </div>
            </form>
        </div>
    )
}

export default Login
