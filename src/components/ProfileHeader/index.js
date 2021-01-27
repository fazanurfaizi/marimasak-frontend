import React, { useState, useEffect } from 'react'
import { Link, useRouteMatch, useParams } from 'react-router-dom'
import backgroundImage from '../../assets/images/timeline-1.jpg'
import annieProfile from '../../assets/images/Annie.PNG'

const ProfileHeader = ({ props }) => {    

    let { url } = useRouteMatch();
    let params = useParams();    

    const [username, setUsername] = useState();

    useEffect(() => {
        setUsername(params.username)
        return () => {
            setUsername('')
        }
    }, [])    

    return (        
        <section>            
            <div className="feature-photo">
                <figure>
                    <img src={backgroundImage} alt=""/>
                </figure>
                <div className="add-btn">
                    <span>1205 followers</span>
                    <a href="#" title="" data-ripple="">Add Friend</a>
                </div>
                <form className="edit-phto">
                    <i className="fa fa-camera-retro"></i>
                    <label className="fileContainer">
                        Edit Cover Photo                        
                    <input type="file"/>
                    </label>
                </form>
                <div className="container-fluid">
                    <div className="row merged">
                        <div className="col-lg-2 col-sm-3">
                            <div className="user-avatar">
                                <figure>
                                    <img src={annieProfile} alt="" style={{ 'maxHeight': '150px' }} />
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
                        <div className="col-lg-10 col-sm-9">
                            <div className="timeline-info">
                                <ul>
                                    <li className="admin-name">
                                        <h5>{username}</h5>                                    
                                    </li>                                    
                                </ul>
                            </div>
                        </div>
                    </div>                    
                </div>                
            </div>
            <div className="row">
                <div className="row-lg-12 col-sm-12" align="center">
                    <div className="timeline-info">
                        <ul>
                            <li>                                
                                <Link title={username} to={{pathname: `/${username}`, query: {username}}}>{username}</Link>
                                <Link title="About" to={{pathname: `/${username}/about`, query: {username}}}>About</Link>
                                <Link title="Friends" to={{pathname: `/${username}/friends`, query: {username}}}>Friends</Link>
                                <Link title="Photos" to={{pathname: `/${username}/photos`, query: {username}}}>Photos</Link>                                                                                       
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProfileHeader
