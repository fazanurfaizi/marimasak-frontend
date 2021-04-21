import profile from '../assets/images/Annie.PNG'

const Notifications = () => {
    return (
        <div className="col-lg-9">
            <div className="central-meta">
                <div className="editing-interest">
                    <h5 className="f-title">
                        <i className="ti-bell"></i>All Notifications 
                    </h5>
                    <div className="notification-box">
                        <ul>
                            <li>
                                <figure><img src={profile} alt="annie" /></figure>
                                <div className="notifi-meta">
                                    <p>bob frank like your post</p>
                                    <span>30 mints ago</span>
                                </div>
                                <i className="del fa fa-close"></i>
                            </li>
                            <li>
                                <figure><img src={profile} alt="annie" /></figure>
                                <div className="notifi-meta">
                                    <p>Sarah Hetfield commented on your photo. </p>
                                    <span>1 hours ago</span>
                                </div>
                                <i className="del fa fa-close"></i>
                            </li>
                            <li>
                                <figure><img src={profile} alt="annie" /></figure>
                                <div className="notifi-meta">
                                    <p>Mathilda Brinker commented on your new profile status. </p>
                                    <span>2 hours ago</span>
                                </div>
                                <i className="del fa fa-close"></i>
                            </li>
                            <li>
                                <figure><img src={profile} alt="annie" /></figure>
                                <div className="notifi-meta">
                                    <p>Green Goo Rock invited you to attend to his event Goo in Gotham Bar. </p>
                                    <span>2 hours ago</span>
                                </div>
                                <i className="del fa fa-close"></i>
                            </li>
                            <li>
                                <figure><img src={profile} alt="annie" /></figure>
                                <div className="notifi-meta">
                                    <p>Chris Greyson liked your profile status. </p>
                                    <span>1 day ago</span>
                                </div>
                                <i className="del fa fa-close"></i>
                            </li>
                            <li>
                                <figure><img src={profile} alt="annie" /></figure>
                                <div className="notifi-meta">
                                    <p>You and Nicholas Grissom just became friends. Write on his wall. </p>
                                    <span>2 days ago</span>
                                </div>
                                <i className="del fa fa-close"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>	
        </div>
    )
}

export default Notifications
