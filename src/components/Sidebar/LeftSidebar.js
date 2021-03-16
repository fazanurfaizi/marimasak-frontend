import { NavLink } from 'react-router-dom'

const LeftSidebar = () => {
    return (
        <div className="col-lg-3">
            <aside className="sidebar static left d-none d-sm-none d-lg-block">
                <div className="widget">
                    <NavLink to="/friends" className="widget-title" title="profile">Faza Nurfaizi</NavLink>                              
                    <ul className="naves">                        
                        <li className="aktif">
                            <i className="ti-home"></i>
                            <NavLink to="/" title="home">home</NavLink>                            
                        </li>                        
                        <li>
                            <i className="ti-user"></i>
                            <NavLink to="/friends" title="friends">friends</NavLink>                            
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
