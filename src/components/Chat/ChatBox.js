import profile from '../../assets/images/Annie.png'

const ChatBox = () => {
    return (
        // <div className={openMessage ? "chat-box show" : 'chat-box'}>
        <div className="chat-box show">
            <div className="chat-head">
                <span className="status f-online"></span>
                <h6>Bucky Barnes</h6>
                <div className="more">
                    <span><i className="ti-more-alt"></i></span>
                    <span className="close-mesage"><i className="ti-close"></i></span>
                </div>
            </div>
            <div className="chat-list">
                <ul>
                    <li className="me">
                        <div className="chat-thumb">
                            <img src={profile} alt="annie" />
                        </div>
                        <div className="notification-event">
                            <span className="chat-message-item">
                                Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the gifts and Jake’s gonna get the drinks
                            </span>
                            <span className="notification-date"><time dateTime="2004-07-24T18:18" className="entry-date updated">Yesterday at 8:10pm</time></span>
                        </div>
                    </li>
                    <li className="you">
                        <div className="chat-thumb">
                            <img src={profile} alt="annie" />
                        </div>
                        <div className="notification-event">
                            <span className="chat-message-item">
                                Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the gifts and Jake’s gonna get the drinks
                            </span>
                            <span className="notification-date"><time dateTime="2004-07-24T18:18" className="entry-date updated">Yesterday at 8:10pm</time></span>
                        </div>
                    </li>
                    <li className="me">
                        <div className="chat-thumb">
                            <img src={profile} alt="annie" />
                        </div>
                        <div className="notification-event">
                            <span className="chat-message-item">
                                Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the gifts and Jake’s gonna get the drinks
                            </span>
                            <span className="notification-date"><time dateTime="2004-07-24T18:18" className="entry-date updated">Yesterday at 8:10pm</time></span>
                        </div>
                    </li>
                </ul>
                <form className="text-box">
                    <textarea placeholder="Post enter to post..."></textarea>
                    <div className="add-smiles">
                        <span title="add icon" className="em em-expressionless"></span>
                    </div>
                    <div className="smiles-bunch">
                        <i className="em em---1"></i>
                        <i className="em em-smiley"></i>
                        <i className="em em-anguished"></i>
                        <i className="em em-laughing"></i>
                        <i className="em em-angry"></i>
                        <i className="em em-astonished"></i>
                        <i className="em em-blush"></i>
                        <i className="em em-disappointed"></i>
                        <i className="em em-worried"></i>
                        <i className="em em-kissing_heart"></i>
                        <i className="em em-rage"></i>
                        <i className="em em-stuck_out_tongue"></i>
                    </div>
                    <button type="submit"></button>
                </form>
            </div>
        </div>
    )
}

export default ChatBox
