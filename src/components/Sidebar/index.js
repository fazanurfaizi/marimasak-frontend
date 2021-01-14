const Sidebar = () => {
    return (
        <div className="col-lg-3">
            <aside className="sidebar static left">
                <div className="widget d-none d-sm-block">
                    <h4 className="widget-title">Faza Nurfaizi</h4>
                    <ul className="naves">
                        <li>
                            <i className="ti-clipboard"></i>
                            <a href="newsfeed.html" title="News feed">News feed</a>
                        </li>
                        <li>
                            <i className="ti-mouse-alt"></i>
                            <a href="inbox.html" title="Inbox">Inbox</a>
                        </li>
                        <li>
                            <i className="ti-files"></i>
                            <a href="fav-page.html" title="My pages">My pages</a>
                        </li>
                        <li>
                            <i className="ti-user"></i>
                            <a href="timeline-friends.html" title="friends">friends</a>
                        </li>
                        <li>
                            <i className="ti-image"></i>
                            <a href="timeline-photos.html" title="images">images</a>
                        </li>
                        <li>
                            <i className="ti-video-camera"></i>
                            <a href="timeline-videos.html" title="videos">videos</a>
                        </li>
                        <li>
                            <i className="ti-comments-smiley"></i>
                            <a href="messages.html" title="Messages">Messages</a>
                        </li>
                        <li>
                            <i className="ti-bell"></i>
                            <a href="notifications.html" title="Notifications">Notifications</a>
                        </li>
                        <li>
                            <i className="ti-share"></i>
                            <a href="people-nearby.html" title="People Nearby">People Nearby</a>
                        </li>
                        <li>
                            <i className="fa fa-bar-chart-o"></i>
                            <a href="insights.html" title="insights">insights</a>
                        </li>
                        <li>
                            <i className="ti-power-off"></i>
                            <a href="landing.html" title="Logout">Logout</a>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    )
}

export default Sidebar
