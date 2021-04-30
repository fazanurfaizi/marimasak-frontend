import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { login, logout } from '../../actions/auth'

const Login = () => {

  const dispatch = useDispatch()  

  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  })
  const { email, password } = inputs  
  const isAuthenticating = useSelector(state => state.auth.isAuthenticating)  

  // useEffect(() => {
  //   dispatch(logout())
  // }, [])

  function handleChange(e) {
    const { name, value } = e.target
    setInputs(inputs => ({
      ...inputs,
      [name]: value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()    
    if(email && password) {      
      dispatch(login(email, password))        
    }
  }

  return (
    <div className="log-reg-area sign">
      <h2 className="log-title">Login</h2>        

      <form onSubmit={handleSubmit}>
        <div className="form-group">	
          <input 
            id="email"
            name="email"
            type="email"             
            required 
            value={email}
            onChange={handleChange}
            className={'form-control' + (isAuthenticating && !email ? ' is-invalid' : '')}
          />
          <label className="control-label" htmlFor="email">
            Email
          </label>
          {isAuthenticating && !email &&
            <div className="invalid-feedback">Email is required</div>
          }
          <i className="mtrl-select"></i>
        </div>
        <div className="form-group">	
          <input 
            id="password"
            name="password"
            type="password" 
            required 
            value={password}
            onChange={handleChange}
          />
          <label className="control-label" htmlFor="password">
            Password
          </label>
          {isAuthenticating && !password &&
            <div className="invalid-feedback">Password is required</div>
          }
          <i className="mtrl-select"></i>
        </div>
        <br/>                          
        <div className="submit-btns justify-content-between">
          <button 
            disabled={isAuthenticating}
            className="mtr-btn signin mr-4" 
            type="submit"
          >
            <span>{isAuthenticating ? "Logging You In..." : "Log In"}</span>
          </button>                                       
        </div>             
          <p>
            Don’t use Marimasak Yet?                                       
            <Link to="/register" title="Register">
              Take the tour Join now
            </Link>
          </p>
      </form>
    </div>
  )
}

export default Login
