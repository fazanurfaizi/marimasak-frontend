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
                                    <p>aipp like your post</p>
                                    <span>30 mints ago</span>
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
