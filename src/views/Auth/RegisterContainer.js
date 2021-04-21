import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import FlashMessage from 'react-flash-message';
import axios from 'axios';
class RegisterContainer extends Component {
  // 2.1
  constructor(props) {
    super(props);
    this.state = {
      isRegistered: '',
      error: '',
      errorMessage: '',
      formSubmitting: false,
      user: {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    },
    redirect: props.redirect,
};
this.handleSubmit = this.handleSubmit.bind(this);
this.handleName = this.handleName.bind(this);
this.handleEmail = this.handleEmail.bind(this);
this.handlePassword = this.handlePassword.bind(this);
this.handlePasswordConfirm = this.handlePasswordConfirm.bind(this);
}

componentWillMount() {
  let state = localStorage["appState"];
  if (state) {
    let AppState = JSON.parse(state);
    this.setState({isLoggedIn: AppState.isLoggedIn, user: AppState});
  }
  if (this.state.isRegistered) {
    return this.props.history.push("/home");
  }
}
componentDidMount() {
  const { prevLocation } = this.state.redirect.state || {prevLocation: { pathname: '/home' } };
  if (prevLocation && this.state.isLoggedIn) {
    return this.props.history.push(prevLocation);
  }
}

handleSubmit(e) {
  e.preventDefault();
  this.setState({formSubmitting: true});
  ReactDOM.findDOMNode(this).scrollIntoView();
  let userData = this.state.user;
  axios.post("http://localhost:8000/api/auth/register", userData)
    .then(response => {
      return response;
  }).then(json => {
      if (json.data.success) {
        let userData = {
          id: json.data.id,
          name: json.data.name,
          email: json.data.email,
          activation_token: json.data.activation_token,
        };
        let appState = {
          isRegistered: true,
          user: userData
        };
        localStorage["appState"] = JSON.stringify(appState);
        this.setState({
          isRegistered: appState.isRegistered,
          user: appState.user
        });
      } else {
          alert(`Registration successful, go to login page`);
      }
 }).catch(error => {if (error.response) {
     
      let err = error.response.data;
      this.setState({
        error: err.message,
        errorMessage: err.errors,
        formSubmitting: false
      })
    }
    else if (error.request) {
      let err = error.request;
      this.setState({
        error: err,
        formSubmitting: false
      })
   } else {
       let err = error.message;
       this.setState({
         error: err,
         formSubmitting: false
       })
   }
 }).finally(this.setState({error: ''}));
}
handleName(e) {
  let value = e.target.value;
  this.setState(prevState => ({
    user: {
      ...prevState.user, name: value
    }
  }));
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
handlePasswordConfirm(e) {
  let value = e.target.value;
  this.setState(prevState => ({
    user: {
      ...prevState.user, password_confirmation: value
    }
  }));
}
render() {

  let errorMessage = this.state.errorMessage;
  let arr = [];
  Object.values(errorMessage).forEach((value) => (
    arr.push(value)
  ));
  return (
    <div className="log-reg-area">
            <h2 className="log-title">Register</h2>
            {this.state.error ? <FlashMessage duration={900000} persistOnHover={true}>
            <h5 className={"alert alert-danger"}>Error: {this.state.error}</h5>
            <ul>
            {arr.map((item, i) => (
                <li key={i}><h5 style={{color: 'red'}}>{item}</h5></li>
            ))}
          </ul></FlashMessage> : ''}
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">	
                    <input type="text" required onChange={this.handleName}/>
                    <label className="control-label" htmlFor="input">Name</label>
                    <i className="mtrl-select"></i>
                </div>
                <div className="form-group">	
                    <input type="text" required onChange={this.handleEmail} />
                    <label className="control-label" htmlFor="input">Email</label>
                    <i className="mtrl-select"></i>
                </div>
                <div className="form-group">	
                    <input type="password" required onChange={this.handlePassword} />
                    <label className="control-label" htmlFor="input">Password</label>
                    <i className="mtrl-select"></i>
                </div>
                <div className="form-group">	
                    <input type="password" required onChange={this.handlePasswordConfirm} />
                    <label className="control-label" htmlFor="input">Confirm Password</label>
                    <i className="mtrl-select"></i>
                </div>
                <div className="submit-btns">
                    <button className="mtr-btn signup" type="submit" disabled={this.state.formSubmitting ? "disabled" : ""}><span>Register</span></button>
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
}

export default withRouter(RegisterContainer);