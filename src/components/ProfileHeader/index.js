import React, { Component } from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import backgroundImage from '../../assets/images/timeline-1.jpg'
import annieProfile from '../../assets/images/Annie.PNG'
import axios from 'axios'

export default class index extends Component {
    state = {
        profile: []
    }

    componentDidMount(){
        const token = localStorage.getItem("bearer")
        axios.get('http://localhost:8000/api/auth/me', {
        headers: {
        Authorization: 'Bearer ' + token
        }
        })
        .then(res => {
            const profile = res.data;
            this.setState({ profile });
            console.log(profile);
        })
    }

    render() {
        return (
        <section>            
            <div className="feature-photo">
                <figure>
                    <img src={backgroundImage} alt=""/>
                </figure>                
                <form className="edit-phto float-right">
                    <i className="fa fa-camera-retro"></i>
                    <label className="fileContainer">
                        Edit Cover Photo                        
                    <input type="file"/>
                    </label>
                </form>
                <div className="container-fluid">
                    <div className="d-flex justify-content-center">
                        <div className="user-avatar mx-auto d-block">
                            <figure>
                                <img src={annieProfile} alt=""/>
                                <form className="edit-phto">
                                    <i className="fa fa-camera-retro"></i>
                                    <label className="fileContainer">
                                        Edit Display Photo
                                        <input type="file"/>
                                    </label>
                                </form>
                            </figure>
                        </div>                       
                    </div>
                    <div className="d-flex justify-content-center">                    
                        <h5 className="mx-auto d-block profile-name">{this.state.profile.name}</h5>
                    </div>                    
                </div>                
            </div>            
            <div className="container-fluid">
                <div className="row">                    
                    <div className="row-lg-12 col-sm-12 " align="center">
                        <div className="timeline-info">
                            <ul>
                                <li>                                
                                    <Link                        
                                        title="Posts" 
                                        to={{pathname: "/u/profile"}}
                                    >
                                        Posts
                                    </Link>
                                    <Link 
                                        title="About" 
                                        to={{pathname: "/u/profile/about"}}
                                    >
                                        About
                                    </Link>
                                    <Link 
                                        title="Profile" 
                                        to={{pathname: "/u/profile/photos"}}
                                    >
                                        Photos
                                    </Link>               
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>            
        </section>
        )
    }
}
