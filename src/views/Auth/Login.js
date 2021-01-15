const Login = () => {
    return (
        <div className="log-reg-area sign">
            <h2 className="log-title">Login</h2>
                <p>
                    Don’t use Winku Yet? <a href="#" title="">Take the tour</a> or <a href="#" title="">Join now</a>
                </p>
            <form method="post">
                <div className="form-group">	
                    <input type="text" id="input" required="required"/>
                    <label className="control-label" for="input">Username</label><i className="mtrl-select"></i>
                </div>
                <div className="form-group">	
                    <input type="password" required="required"/>
                    <label className="control-label" for="input">Password</label><i className="mtrl-select"></i>
                </div>
                <div className="checkbox">
                    <label>
                    <input type="checkbox" checked="checked"/><i className="check-box"></i>Always Remember Me.
                    </label>
                </div>
                <a href="#" title="" className="forgot-pwd">Forgot Password?</a>
                <div className="submit-btns">
                    <button className="mtr-btn signin" type="button"><span>Login</span></button>
                    <button className="mtr-btn signup" type="button"><span>Register</span></button>
                </div>
            </form>
        </div>
    )
}

export default Login
