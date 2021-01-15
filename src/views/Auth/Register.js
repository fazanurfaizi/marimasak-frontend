import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className="log-reg-area">
            <h2 className="log-title">Register</h2>
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
                    <input type="text" required="required" />
                    <label className="control-label" htmlFor="input">First & Last Name</label>
                    <i className="mtrl-select"></i>
                </div>
                <div className="form-group">	
                    <input type="text" required="required" />
                    <label className="control-label" htmlFor="input">User Name</label>
                    <i className="mtrl-select"></i>
                </div>
                <div className="form-group">	
                    <input type="password" required="required" />
                    <label className="control-label" htmlFor="input">Password</label>
                    <i className="mtrl-select"></i>
                </div>
                <div className="form-radio">
                    <div className="radio">
                    <label>
                        <input type="radio" name="radio" />
                        <i className="check-box"></i>Male
                    </label>
                    </div>
                    <div className="radio">
                    <label>
                        <input type="radio" name="radio"/>
                        <i className="check-box"></i>Female
                    </label>
                    </div>
                </div>
                <div className="form-group">	
                    <input type="text" required="required" />
                    <label className="control-label" htmlFor="input">
                        <a href="https://wpkixx.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="6c29010d05002c">
                            [email&#160;protected]
                        </a>
                    </label>
                    <i className="mtrl-select"></i>
                </div>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" />
                        <i className="check-box"></i>
                        Accept Terms & Conditions ?
                    </label>
                </div>
                <Link to="/login" className="already-have" title="Login">
                    Already have an account
                </Link>                
                <div className="submit-btns">
                    <button className="mtr-btn signup" type="button"><span>Register</span></button>
                </div>
            </form>
        </div>
    )
}

export default Register
