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
                        <h5 className="mx-auto d-block">{username}</h5>
                    </div>                    
                </div>                
            </div>            
            <div className="container-fluid">
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
            </div>            
        </section>
    )
}

export default ProfileHeader
