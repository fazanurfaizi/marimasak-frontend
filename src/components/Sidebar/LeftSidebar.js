import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const LeftSidebar = () => {

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const user = useSelector(state => {
        if(isAuthenticated) {
            return state.auth.user
        }
        return null;
     })    

    return (
        <div className="col-lg-3">
            <aside className="sidebar static left d-none d-sm-none d-lg-block">
                <div className="widget">
                    {isAuthenticated &&                         
                        <NavLink to={`/u/${user?.name}`} className="widget-title" title={`${user?.name}`}>
                            {user?.name}
                        </NavLink>  
                    }                            
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

export default LeftSidebar
