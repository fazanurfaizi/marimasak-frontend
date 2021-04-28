import { NavLink } from 'react-router-dom'
import React, { Component } from 'react'
import axios from 'axios'

export default class LeftSidebar extends Component {
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
        })
    }

    render() {
        return (
            <div className="col-lg-3">
            <aside className="sidebar static left d-none d-sm-none d-lg-block">
                <div className="widget">
                    <NavLink to={`/u/${this.state.profile.name}`} className="widget-title" title="profile">{this.state.profile.name}</NavLink>                              
                    <ul className="naves">                        
                        <li className="aktif">
                            <i className="ti-home"></i>
                            <NavLink to="/home" title="home">home</NavLink>                            
                        </li>                        
                        <li>
                            <i className="ti-user"></i>
                            <NavLink to="/friends" title="friends">friends</NavLink>                            
                        </li>                        
                        <li>
                            <i className="ti-receipt"></i>
                            <NavLink to="/products" title="products">products</NavLink>                            
                        </li>                        
                        <li>
                            <i className="ti-comments-smiley"></i>
                            <NavLink to="/messages" title="messages">messages</NavLink>   
                        </li>
                        <li>
                            <i className="ti-bell"></i>
                            <NavLink to="/notifications" title="Notifications">Notifications</NavLink>                            
                        </li>                                                
                    </ul>
                </div>
            </aside>
        </div>
        )
    }
}
