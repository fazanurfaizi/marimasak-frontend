import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LinkButton from '../../templates/LinkButton'
import LoginContainer from './LoginContainer';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          redirect: props.location,
        };
      }
    
        render() {
        return (
            <div className="content">
                <LoginContainer redirect={this.state.redirect}/>
            </div>
        )
    } 
}
