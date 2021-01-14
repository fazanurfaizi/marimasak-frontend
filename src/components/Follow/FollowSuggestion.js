import profile from '../../assets/images/Annie.PNG'

const FollowSuggestion = () => {
    return (
        <div className="widget d-none d-sm-block">
            <h4 className="widget-title">Who's following</h4>
            <ul className="followers">
                <li>
                    <figure>
                        <img src={profile} alt="annie" width="50" />
                    </figure>
                    <div className="friend-meta">
                        <h4><a href="time-line.html" title="">Kelly Bill</a></h4>
                        <a href="#" title="" className="underline">Add Friend</a>
                    </div>
                </li>
                <li>
                    <figure>
                        <img src={profile} alt="annie" />
                    </figure>
                    <div className="friend-meta">
                        <h4><a href="time-line.html" title="">Issabel</a></h4>
                        <a href="#" title="" className="underline">Add Friend</a>
                    </div>
                </li>
                <li>
                    <figure>
                        <img src={profile} alt="annie" />
                    </figure>
                    <div className="friend-meta">
                        <h4><a href="time-line.html" title="">Andrew</a></h4>
                        <a href="#" title="" className="underline">Add Friend</a>
                    </div>
                </li>
                <li>
                    <figure>
                        <img src={profile} alt="annie" />
                    </figure>
                    <div className="friend-meta">
                        <h4><a href="time-line.html" title="">Sophia</a></h4>
                        <a href="#" title="" className="underline">Add Friend</a>
                    </div>
                </li>
                <li>
                    <figure>
                        <img src={profile} alt="annie" />
                    </figure>
                    <div className="friend-meta">
                        <h4><a href="time-line.html" title="">Allen</a></h4>
                        <a href="#" title="" className="underline">Add Friend</a>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default FollowSuggestion
