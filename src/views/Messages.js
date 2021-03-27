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
                                    <span>Aipp</span>
                                </div>
                            </li>
                        </ul>
                        <div className="peoples-mesg-box">
                            <div className="conversation-head">
                                <figure>
                                    <img src={profile} alt="annie" />
                                </figure>
                                <span>aipp<i>online</i></span>
                            </div>
                            <ul className="chatting-area">
                                <li className="you">
                                    <figure>
                                        <img src={profile} alt="annie" />
                                    </figure>
                                    <p>lapar ni ada resep yang enak ga?</p>
                                </li>
                                <li className="me">
                                    <figure>
                                        <img src={profile} alt="annie" />
                                    </figure>
                                    <p>ada dong, liat aja profile saya.</p>
                                </li>
                                <li className="you">
                                    <figure>
                                        <img src={profile} alt="annie" />
                                    </figure>
                                    <p>wah bagus tuh</p>
                                </li>
                                <li className="you">
                                    <figure>
                                        <img src={profile} alt="annie" />
                                    </figure>
                                    <p>aku coba ya</p>
                                </li>
                                <li className="me">
                                    <figure>
                                        <img src={profile} alt="annie" />
                                    </figure>
                                    <p>jangan lupa like yaa !</p>
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