import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className="log-reg-area">
            <h2 className="log-title">Register</h2>
            <form method="post">
                <div className="form-group">	
                    <input type="text" required="required" />
                    <label className="control-label" htmlFor="input">Full Name</label>
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
                            Email
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
                <div className="submit-btns">
                    <button className="mtr-btn signup" type="button"><span>Register</span></button>
                </div>
                <p>
                Already have an account? 
                    {' '} 
                    <Link to="/login" title="Login">
                        Join now
                    </Link>
                </p>

            </form>
        </div>
    )
}

export default Register
