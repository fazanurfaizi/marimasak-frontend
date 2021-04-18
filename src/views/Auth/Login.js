import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../../store/reducers/auth'
import LinkButton from '../../templates/LinkButton'

const Login = ({ login }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)
    const [error, setError] = useState('')

    const handleSubmitForm = () => {
        if(email === "" || password === "") {
            setError("Fields are required")
            return;
        }
        login({ email, password })
    }

    return (
        <div className="log-reg-area sign">
            <h2 className="log-title">Login</h2>
            <form method="post">
                <div className="form-group">	
                    <input 
                        type="text" 
                        id="input" 
                        required="required"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} required
                    />
                    <label className="control-label" htmlFor="input">Username</label><i className="mtrl-select"></i>
                </div>
                <div className="form-group">	
                    <input 
                        type="password" 
                        required="required"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} required
                    />
                    <label className="control-label" htmlFor="input">Password</label><i className="mtrl-select"></i>
                </div>
                <Link to="/forgot-password" className="forgot-pwd" title="Forgot Password">
                    Forgot Password?
                </Link> 
                <br/>
                <div className="checkbox">
                    <label>
                        <input 
                            type="checkbox"
                            checked={rememberMe}
                            onClick={setRememberMe}
                        />
                        <i className="check-box"></i>Always Remember Me.
                    </label>
                </div>                               
                <div className="submit-btns justify-content-between">
                    <button 
                        className="mtr-btn signin mr-4" 
                        type="button"
                        onClick={handleSubmitForm}>
                        <span>Login</span>
                    </button>       
                    
                    {error && (
                        <span onClick={() => setError(null)}>
                            {error}
                        </span>
                    )}                                          
                </div>             
                <p>
                    Don’t use Marimasak Yet? 
                    {' '}     
                    <a href="https://www.marimasak.com" title="marimasak.com" target="_blank" rel="noreferrer">
                        Take the tour
                    </a>               
                    {' '} or {' '}
                    <Link to="/register" title="Register">
                        Join now
                    </Link>
                </p>
            </form>
        </div>
    )
}

export default Login
