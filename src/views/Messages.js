import profile from '../assets/images/Annie.PNG'

const Messages = () => {
    return (
        <div className="col-lg-9">
            <div className="central-meta">
                <div className="messages">
                    <h5 className="f-title">
                        <i className="ti-bell"></i>
                        All Messages 
                        <span className="more-options">
                            <i className="fa fa-ellipsis-h"></i>
                        </span>
                    </h5>
                    <div className="message-box">
                        <ul className="peoples">                            
                            <li>                                
                                <figure>
                                    <img src={profile} alt="annie" />
                                    <span className="status f-online"></span>
                                </figure>
                                <div className="people-name">
                                    <span>Molly cyrus</span>
                                </div>
                            </li>
                            <li>                                
                                <figure>
                                    <img src={profile} alt="annie" />
                                    <span className="status f-away"></span>
                                </figure>
                                <div className="people-name">
                                    <span>Andrew</span>
                                </div>
                            </li>
                            <li>                                
                                <figure>
                                    <img src={profile} alt="annie" />
                                    <span className="status f-online"></span>
                                </figure>                                
                                <div className="people-name">
                                    <span>jason bourne</span>
                                </div>
                            </li>
                            <li>                                
                                <figure>
                                    <img src={profile} alt="annie" />
                                    <span className="status off-online"></span>
                                </figure>
                                <div className="people-name">
                                    <span>Sarah Grey</span>
                                </div>
                            </li>
                            <li>                                
                                <figure>
                                    <img src={profile} alt="annie" />
                                    <span className="status f-online"></span>
                                </figure>
                                <div className="people-name">
                                    <span>bill doe</span>
                                </div>
                            </li>
                            <li>                                
                                <figure>
                                    <img src={profile} alt="annie" />
                                    <span className="status f-away"></span>
                                </figure>
                                <div className="people-name">
                                    <span>shen cornery</span>
                                </div>
                            </li>
                            <li>                                
                                <figure>
                                    <img src={profile} alt="annie" />
                                    <span className="status off-online"></span>
                                </figure>
                                <div className="people-name">
                                    <span>kill bill</span>
                                </div>
                            </li>
                            <li>                                
                                <figure>
                                    <img src={profile} alt="annie" />
                                    <span className="status f-online"></span>
                                </figure>
                                <div className="people-name">
                                    <span>jasmin walia</span>
                                </div>
                            </li>
                            <li>                                
                                <figure>
                                    <img src={profile} alt="annie" />
                                    <span className="status f-online"></span>
                                </figure>
                                <div className="people-name">
                                    <span>neclos cage</span>
                                </div>
                            </li>
                        </ul>
                        <div className="peoples-mesg-box">
                            <div className="conversation-head">
                                <figure>
                                    <img src={profile} alt="annie" />
                                </figure>
                                <span>jason bourne <i>online</i></span>
                            </div>
                            <ul className="chatting-area">
                                <li className="you">
                                    <figure>
                                        <img src={profile} alt="annie" />
                                    </figure>
                                    <p>what's liz short for? :)</p>
                                </li>
                                <li className="me">
                                    <figure>
                                        <img src={profile} alt="annie" />
                                    </figure>
                                    <p>Elizabeth lol</p>
                                </li>
                                <li className="me">
                                    <figure>
                                        <img src={profile} alt="annie" />
                                    </figure>
                                    <p>wanna know whats my second guess was?</p>
                                </li>
                                <li className="you">
                                    <figure>
                                        <img src={profile} alt="annie" />
                                    </figure>
                                    <p>yes</p>
                                </li>
                                <li className="me">
                                    <figure>
                                        <img src={profile} alt="annie" />
                                    </figure>
                                    <p>Disney's the lizard king</p>
                                </li>
                                <li className="me">
                                    <figure>
                                        <img src={profile} alt="annie" />
                                    </figure>
                                    <p>i know him 5 years ago</p>
                                </li>
                                <li className="you">
                                    <figure>
                                        <img src={profile} alt="annie" />
                                    </figure>
                                    <p>coooooooooool dude ;)</p>
                                </li>
                            </ul>
                            <div className="message-text-container">
                                <form method="post">
                                    <textarea></textarea>
                                    <button title="send"><i className="fa fa-paper-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages