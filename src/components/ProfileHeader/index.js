import backgroundImage from '../../assets/images/timeline-1.jpg'
import annieProfile from '../../assets/images/Annie.PNG'

const ProfileHeader = () => {
    return (
        <section>
            <div className="feature-photo">
                <figure>
                    <img src={backgroundImage} alt="Background" />
                </figure>
                <div className="add-btn">
                    <span>1234 Followers</span>
                    <a href="#" title="" data-ripple="">
                        Add Friend
                    </a>
                </div>
                <form className="edit-phto">
                    <i className="fa fa-camera-retro"></i>
                    <label className="fileContainer">
                        Edit Cocer Photo
                        <input type="file" />
                    </label>
                </form>
                <div className="container-fluid">
                    <div className="row merged">
                        <div className="col-lg-2 col-sm-3">
                            <div className="user-avatar">
                                <figure>
                                    <img src={annieProfile} alt="" />
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
                                    <h5>Janice Griffith</h5>
                                    <span>Group Admin</span>
                                    </li>
                                    <li>
                                        <a className="" href="time-line.html" title="" data-ripple="">time line</a>
                                        <a className="active" href="timeline-photos.html" title="" data-ripple="">Photos</a>
                                        <a className="" href="timeline-videos.html" title="" data-ripple="">Videos</a>
                                        <a className="" href="timeline-friends.html" title="" data-ripple="">Friends</a>
                                        <a className="" href="timeline-groups.html" title="" data-ripple="">Groups</a>
                                        <a className="" href="about.html" title="" data-ripple="">about</a>
                                        <a className="" href="#" title="" data-ripple="">more</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProfileHeader
