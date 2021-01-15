const Register = () => {
    return (
        <div className="log-reg-area reg">
            <h2 className="log-title">Register</h2>
                <p>
                    Don’t use Winku Yet? <a href="#" title="">Take the tour</a> or <a href="#" title="">Join now</a>
                </p>
            <form method="post">
                <div className="form-group">	
                    <input type="text" required="required"/>
                    <label className="control-label" for="input">First & Last Name</label><i className="mtrl-select"></i>
                </div>
                <div className="form-group">	
                    <input type="text" required="required"/>
                    <label className="control-label" for="input">User Name</label><i className="mtrl-select"></i>
                </div>
                <div className="form-group">	
                    <input type="password" required="required"/>
                    <label className="control-label" for="input">Password</label><i className="mtrl-select"></i>
                </div>
                <div className="form-radio">
                    <div className="radio">
                    <label>
                        <input type="radio" name="radio" checked="checked"/><i className="check-box"></i>Male
                    </label>
                    </div>
                    <div className="radio">
                    <label>
                        <input type="radio" name="radio"/><i className="check-box"></i>Female
                    </label>
                    </div>
                </div>
                <div className="form-group">	
                    <input type="text" required="required"/>
                    <label className="control-label" for="input"><a href="https://wpkixx.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="6c29010d05002c">[email&#160;protected]</a></label><i className="mtrl-select"></i>
                </div>
                <div className="checkbox">
                    <label>
                    <input type="checkbox" checked="checked"/><i className="check-box"></i>Accept Terms & Conditions ?
                    </label>
                </div>
                <a href="#" title="" className="already-have">Already have an account</a>
                <div className="submit-btns">
                    <button className="mtr-btn signup" type="button"><span>Register</span></button>
                </div>
            </form>
        </div>
    )
}

export default Register
