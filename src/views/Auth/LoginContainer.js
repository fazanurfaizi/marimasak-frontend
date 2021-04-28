// import React, {Component} from 'react';
// import FlashMessage from 'react-flash-message';
// import axios from 'axios';
// import SweetAlert from 'react-bootstrap-sweetalert';

// class LoginContainer extends Component {
//     render() {
//         const { state = {} } = this.state.redirect;
//         const { error } = state;
//  axios.post("http://localhost:8000/api/auth/login", userData).then(response => {
//   return response;
// }).then(json => {
//       if (json.data.success) {
//         let userData = {
//           id: json.data.id,
//           name: json.data.name,
//           email: json.data.email,
//           access_token: json.data.access_token,
//         };
//         let appState = {
//           isLoggedIn: true,
//           user: userData
//         };
//         localStorage["appState"] = JSON.stringify(appState);
//         this.setState({
//           isLoggedIn: appState.isLoggedIn,
//           user: appState.user,
//           error: ''
//         });
//       }
//       else {
//       <SweetAlert
//         success
//         title="Success!"          
//         timeout={2000}
//         confirmBtnText="Oke"
//       >
//         Login berhasil
//       </SweetAlert>
//       localStorage.setItem('bearer', json.data.access_token)
//       return this.props.history.push("/home");
//       }
// }).catch(error => {if (error.response) {
//     let err = error.response.data;
//     this.setState({
//       error: err.message,
//       errorMessage: err.errors,
//       formSubmitting: false
//     })
//   }
//   else if (error.request) {
//     let err = error.request;
//     this.setState({
//       error: err,
//       formSubmitting: false
//     })
//   } else {
//     let err = error.message;
//     this.setState({
//       error: err,
//       formSubmitting: false
//     })
// }
// }).finally(this.setState({error: ''}));
//         return (
//             <div className="log-reg-area sign">
//                 <h2 className="log-title">Login</h2>
//                 {this.state.error ? <FlashMessage duration={100000} persistOnHover={true}>
//                 <Link to="/home"><h5 className={"alert alert-danger"}>Error: {this.state.error}</h5></Link></FlashMessage> : ''}

//                 <form onSubmit={this.handleSubmit}>
//                 <div className="form-group">	
//                     <input 
//                     type="text" 
//                     id="input" 
//                     required onChange={this.handleEmail}
//                     />
//                     <label className="control-label" htmlFor="input">Email</label><i className="mtrl-select"></i>
//                 </div>
//                 <div className="form-group">	
//                     <input 
//                         type="password" 
//                         required onChange={this.handlePassword}
//                     />
//                     <label className="control-label" htmlFor="input">Password</label><i className="mtrl-select"></i>
//                 </div>
//                 <br/>                          
//                 <div className="submit-btns justify-content-between">
//                     <button 
//                         disabled={this.state.formSubmitting}
//                         className="mtr-btn signin mr-4" 
//                         type="submit"
//                     >
//                         <span>{this.state.formSubmitting ? "Logging You In..." : "Log In"}</span>
//                     </button>                                       
//                         </div>             
//                         <p>
//                           Don’t use Marimasak Yet?                                       
//                           <Link to="/register" title="Register">
//                             Take the tour Join now
//                           </Link>
//                         </p>
//                     </form>
//                 </div>
//         )
//     }
// }

// export default withRouter(LoginContainer);

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
