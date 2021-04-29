// import React, {Component} from 'react';
// import FlashMessage from 'react-flash-message';
// import axios from 'axios';
// import SweetAlert from 'react-bootstrap-sweetalert';

import React, { Component } from 'react'
import {Link, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import { login } from '../../actions/auth'

export class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      error: '',
      formSubmitting: false,
      user: {
        email: '',
        password: '',
      },
      redirect: props.redirect,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  UNSAFE_componentWillMount() {
    let state = localStorage["appState"];
    if (state) {
      let AppState = JSON.parse(state);
      this.setState({
        isLoggedIn: AppState.isLoggedIn,
        user: AppState
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.setState({formSubmitting: true});
    let { email, password } = this.state.user;
    this.props.login(email, password)     
    // <SweetAlert
    //   success
    //   title="Success!"          
    //   timeout={2000}
    //   confirmBtnText="Oke"
    // >
    //   Login berhasil
    // </SweetAlert>
  }

  handleEmail(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      user: {
        ...prevState.user, email: value
      }
    }));
  }

  handlePassword(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      user: {
        ...prevState.user, password: value
      }
    }));
  }

  render() {
    return (
      <div className="log-reg-area sign">
        <h2 className="log-title">Login</h2>        

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">	
            <input 
              type="text" 
              id="input" 
              required 
              onChange={this.handleEmail}
            />
            <label className="control-label" htmlFor="input">Email</label><i className="mtrl-select"></i>
          </div>
          <div className="form-group">	
            <input 
              type="password" 
              required 
              onChange={this.handlePassword}
            />
              <label className="control-label" htmlFor="input">Password</label><i className="mtrl-select"></i>
          </div>
          <br/>                          
          <div className="submit-btns justify-content-between">
            <button 
              disabled={this.state.formSubmitting}
              className="mtr-btn signin mr-4" 
              type="submit"
            >
              <span>{this.state.formSubmitting ? "Logging You In..." : "Log In"}</span>
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
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  login
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
