import profile from '../assets/images/Annie.PNG'

const FriendsTimeline = () => {
    return (
        <div className="col-lg-9">
            <div className="central-meta">
                <div className="frnds">
                    <ul className="nav nav-tabs">
                        <li className="nav-item"><a className="active" href="#frends" data-toggle="tab">My Friends</a> <span>55</span></li>
                        <li className="nav-item"><a className="" href="#frends-req" data-toggle="tab">Friend Requests</a><span>60</span></li>
                    </ul>

                    <div className="tab-content">
                        <div className="tab-pane active fade show " id="frends" >
                        <ul className="nearby-contct">
                        <li>
                            <div className="nearly-pepls">
                                <figure>
                                    <a href="time-line.html" title="">
                                        <img src={profile} alt="annie" />
                                    </a>
                                </figure>
                                <div className="pepl-info">
                                    <h4><a href="time-line.html" title="">jhon kates</a></h4>
                                    <span>ftv model</span>
                                    <a href="#" title="" className="add-butn more-action" data-ripple="">unfriend</a>
                                    <a href="#" title="" className="add-butn" data-ripple="">message</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="nearly-pepls">
                                <figure>
                                    <a href="time-line.html" title="">
                                        <img src={profile} alt="annie" />
                                    </a>
                                </figure>
                                <div className="pepl-info">
                                    <h4><a href="time-line.html" title="">sophia Gate</a></h4>
                                    <span>tv actresses</span>
                                    <a href="#" title="" className="add-butn more-action" data-ripple="">unfriend</a>
                                    <a href="#" title="" className="add-butn" data-ripple="">message</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="nearly-pepls">
                                <figure>
                                    <a href="time-line.html" title="">
                                        <img src={profile} alt="annie" />
                                    </a>
                                </figure>
                                <div className="pepl-info">
                                    <h4><a href="time-line.html" title="">sara grey</a></h4>
                                    <span>work at IBM</span>
                                    <a href="#" title="" className="add-butn more-action" data-ripple="">unfriend</a>
                                    <a href="#" title="" className="add-butn" data-ripple="">message</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="nearly-pepls">
                                <figure>
                                    <a href="time-line.html" title="">
                                        <img src={profile} alt="annie" />
                                    </a>
                                </figure>
                                <div className="pepl-info">
                                    <h4><a href="time-line.html" title="">Sexy cat</a></h4>
                                    <span>Student</span>
                                    <a href="#" title="" className="add-butn more-action" data-ripple="">unfriend</a>
                                    <a href="#" title="" className="add-butn" data-ripple="">message</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="nearly-pepls">
                                <figure>
                                    <a href="time-line.html" title="">
                                        <img src={profile} alt="annie" />
                                    </a>
                                </figure>
                                <div className="pepl-info">
                                    <h4><a href="time-line.html" title="">Sara grey</a></h4>
                                    <span>ftv model</span>
                                    <a href="#" title="" className="add-butn more-action" data-ripple="">unfriend</a>
                                    <a href="#" title="" className="add-butn" data-ripple="">message</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="nearly-pepls">
                                <figure>
                                    <a href="time-line.html" title="">
                                        <img src={profile} alt="annie" />
                                    </a>
                                </figure>
                                <div className="pepl-info">
                                    <h4><a href="time-line.html" title="">Amy watson</a></h4>
                                    <span>Study in university</span>
                                    <a href="#" title="" className="add-butn more-action" data-ripple="">unfriend</a>
                                    <a href="#" title="" className="add-butn" data-ripple="">message</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="nearly-pepls">
                                <figure>
                                    <a href="time-line.html" title="">
                                        <img src={profile} alt="annie" />
                                    </a>
                                </figure>
                                <div className="pepl-info">
                                    <h4><a href="time-line.html" title="">caty lasbo</a></h4>
                                    <span>work as dancers</span>
                                    <a href="#" title="" className="add-butn more-action" data-ripple="">unfriend</a>
                                    <a href="#" title="" className="add-butn" data-ripple="">message</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="nearly-pepls">
                                <figure>
                                    <a href="time-line.html" title="">
                                        <img src={profile} alt="annie" />
                                    </a>
                                </figure>
                                <div className="pepl-info">
                                    <h4><a href="time-line.html" title="">Ema watson</a></h4>
                                    <span>personal business</span>
                                    <a href="#" title="" className="add-butn more-action" data-ripple="">unfriend</a>
                                    <a href="#" title="" className="add-butn" data-ripple="">message</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                        <div className="lodmore"><button className="btn-view btn-load-more"></button></div>
                        </div>
                        <div className="tab-pane fade" id="frends-req" >
                        <ul className="nearby-contct">
                        <li>
                            <div className="nearly-pepls">
                                <figure>
                                    <a href="time-line.html" title="">
                                        <img src={profile} alt="annie" />
                                    </a>
                                </figure>
                                <div className="pepl-info">
                                    <h4><a href="time-line.html" title="">Amy watson</a></h4>
                                    <span>ftv model</span>
                                    <a href="#" title="" className="add-butn more-action" data-ripple="">delete Request</a>
                                    <a href="#" title="" className="add-butn" data-ripple="">Confirm</a>
                                </div>
                            </div>
                        </li>	

                        <li>
                            <div className="nearly-pepls">
                                <figure>
                                    <a href="time-line.html" title="">
                                        <img src={profile} alt="annie" />
                                    </a>
                                </figure>
                                <div className="pepl-info">
                                    <h4><a href="time-line.html" title="">sophia Gate</a></h4>
                                    <span>ftv model</span>
                                    <a href="#" title="" className="add-butn more-action" data-ripple="">delete Request</a>
                                    <a href="#" title="" className="add-butn" data-ripple="">Confirm</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="nearly-pepls">
                                <figure>
                                    <a href="time-line.html" title="">
                                        <img src={profile} alt="annie" />
                                    </a>
                                </figure>
                                <div className="pepl-info">
                                    <h4><a href="time-line.html" title="">caty lasbo</a></h4>
                                    <span>ftv model</span>
                                    <a href="#" title="" className="add-butn more-action" data-ripple="">delete Request</a>
                                    <a href="#" title="" className="add-butn" data-ripple="">Confirm</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="nearly-pepls">
                                <figure>
                                    <a href="time-line.html" title="">
                                        <img src={profile} alt="annie" />
                                    </a>
                                </figure>
                                <div className="pepl-info">
                                    <h4><a href="time-line.html" title="">jhon kates</a></h4>
                                    <span>ftv model</span>
                                    <a href="#" title="" className="add-butn more-action" data-ripple="">delete Request</a>
                                    <a href="#" title="" className="add-butn" data-ripple="">Confirm</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="nearly-pepls">
                                <figure>
                                    <a href="time-line.html" title="">
                                        <img src={profile} alt="annie" />
                                    </a>
                                </figure>
                                <div className="pepl-info">
                                    <h4><a href="time-line.html" title="">sara grey</a></h4>
                                    <span>ftv model</span>
                                    <a href="#" title="" className="add-butn more-action" data-ripple="">delete Request</a>
                                    <a href="#" title="" className="add-butn" data-ripple="">Confirm</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="nearly-pepls">
                                <figure>
                                    <a href="time-line.html" title="">
                                        <img src={profile} alt="annie" />
                                    </a>
                                </figure>
                                <div className="pepl-info">
                                    <h4><a href="time-line.html" title="">Sara grey</a></h4>
                                    <span>ftv model</span>
                                    <a href="#" title="" className="add-butn more-action" data-ripple="">delete Request</a>
                                    <a href="#" title="" className="add-butn" data-ripple="">Confirm</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="nearly-pepls">
                                <figure>
                                    <a href="time-line.html" title="">
                                        <img src={profile} alt="annie" />
                                    </a>
                                </figure>
                                <div className="pepl-info">
                                    <h4><a href="time-line.html" title="">Sexy cat</a></h4>
                                    <span>ftv model</span>
                                    <a href="#" title="" className="add-butn more-action" data-ripple="">delete Request</a>
                                    <a href="#" title="" className="add-butn" data-ripple="">Confirm</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="nearly-pepls">
                                <figure>
                                    <a href="time-line.html" title="">
                                        <img src={profile} alt="annie" />
                                    </a>
                                </figure>
                                <div className="pepl-info">
                                    <h4><a href="time-line.html" title="">jhon kates</a></h4>
                                    <span>ftv model</span>
                                    <a href="#" title="" className="add-butn more-action" data-ripple="">delete Request</a>
                                    <a href="#" title="" className="add-butn" data-ripple="">Confirm</a>
                                </div>
                            </div>
                        </li>
                    </ul>	
                            <button className="btn-view btn-load-more"></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>	
    )
}

export default FriendsTimeline