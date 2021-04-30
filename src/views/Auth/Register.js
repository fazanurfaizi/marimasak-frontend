import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { register } from '../../actions/auth'

const Register = () => {

    const dispatch = useDispatch()  
    const isAuthenticating = useSelector(state => state.auth.isAuthenticating)  

    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    })
    const {
        name,
        email,
        password,
        password_confirmation
    } = inputs

    const handleChange = (e) => {
        const { name, value } = e.target
        setInputs(inputs => ({
            ...inputs,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(register(inputs))
    }

    return (
        <div className="log-reg-area">
            <h2 className="log-title">Register</h2>
            {/* {this.state.error ? <FlashMessage duration={900000} persistOnHover={true}> */}
            {/* <h5 className={"alert alert-danger"}>Error: {this.state.error}</h5> */}
            {/* <ul>
            {arr.map((item, i) => (
                <li key={i}><h5 style={{color: 'red'}}>{item}</h5></li>
            ))}
            </ul></FlashMessage> : ''} */}
            <form onSubmit={handleSubmit}>
                <div className="form-group">	
                    <input 
                        id="name"
                        name="name"
                        type="text" 
                        required 
                        value={name}
                        onChange={handleChange}
                    />
                    <label className="control-label" htmlFor="name">Name</label>
                    <i className="mtrl-select"></i>
                </div>
                <div className="form-group">	
                    <input 
                        id="email"
                        name="email"
                        type="email" 
                        required 
                        value={email}
                        onChange={handleChange} 
                    />
                    <label className="control-label" htmlFor="email">Email</label>
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
                    <label className="control-label" htmlFor="password">Password</label>
                    <i className="mtrl-select"></i>
                </div>
                <div className="form-group">	
                    <input
                        id="password_confirmation"
                        name="password_confirmation" 
                        type="password" 
                        required 
                        value={password_confirmation}
                        onChange={handleChange} 
                    />
                    <label className="control-label" htmlFor="password_confirmation">Confirm Password</label>
                    <i className="mtrl-select"></i>
                </div>
                <div className="submit-btns">                    
                    <button 
                        type="submit"
                        className="mtr-btn signup" 
                        disabled={isAuthenticating}
                    >
                        <span>{isAuthenticating ? "Loading..." : "Register"}</span>
                    </button>
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
