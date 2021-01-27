import React, { useState, useEffect } from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import backgroundImage from '../../assets/images/timeline-1.jpg'
import annieProfile from '../../assets/images/Annie.PNG'

const ProfileHeader = () => {    
        
    let params = useParams();    
    let location = useLocation();    

    const [username, setUsername] = useState(params.username);
    const [currentLocation, setCurrenctLocation] = useState(location.pathname.substring(location.pathname.lastIndexOf('/') + 1));

    useEffect(() => {
        setCurrenctLocation(location.pathname.substring(location.pathname.lastIndexOf('/') + 1))
        setUsername(params.username)                
    }, [currentLocation, location.pathname, params.username, username]);      

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
                    </div>
                    <div className="row merged">
                        <div className="col-lg-12 col-sm-12" align="center">
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
            <hr />
            <div className="row">
                <div className="row-lg-12 col-sm-12" align="center">
                    <div className="timeline-info">
                        <ul>
                            <li>                                
                                <Link
                                    aria-current={currentLocation === `${username}` ? 'page' : '' }         
                                    className={currentLocation === `${username}` ? 'active ' : '' }                            
                                    title="Posts" 
                                    to={{pathname: `/${username}`, query: {username}}}
                                >
                                    Posts
                                </Link>
                                <Link
                                    aria-current={currentLocation === `about` ? 'page' : '' }         
                                    className={currentLocation === `about` ? 'active ' : '' }   
                                    title="About" 
                                    to={{pathname: `/${username}/about`, query: {username}}}
                                >
                                    About
                                </Link>
                                <Link
                                    aria-current={currentLocation === `friends` ? 'page' : '' }         
                                    className={currentLocation === `friends` ? 'active ' : '' }   
                                    title="Friends" 
                                    to={{pathname: `/${username}/friends`, query: {username}}}
                                >
                                    Friends
                                </Link>
                                <Link
                                    aria-current={currentLocation === `photos` ? 'page' : '' }         
                                    className={currentLocation === 'photos' ? 'active ' : '' }   
                                    title="Photos" 
                                    to={{pathname: `/${username}/photos`, query: {username}}}
                                >
                                    Photos
                                </Link>                                                                                       
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProfileHeader
