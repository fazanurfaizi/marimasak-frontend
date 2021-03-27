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
                                    <h4><a href="time-line.html" title="">Syarif Hidayat</a></h4>
                                    <span>student</span>
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
                                    <h4><a href="time-line.html" title="">Faza Nurfaizi</a></h4>
                                    <span>student</span>
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
                                    <h4><a href="time-line.html" title="">Aulia Agustina</a></h4>
                                    <span>student</span>
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
                                    <h4><a href="time-line.html" title="">Muhammad Taufik</a></h4>
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
                                    <h4><a href="time-line.html" title="">Raden Daffa</a></h4>
                                    <span>korean model</span>
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
                                    <h4><a href="time-line.html" title="">Muhammad Fachri</a></h4>
                                    <span>Study in university</span>
                                    <a href="#" title="" className="add-butn more-action" data-ripple="">unfriend</a>
                                    <a href="#" title="" className="add-butn" data-ripple="">message</a>
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