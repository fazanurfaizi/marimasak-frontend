import SocialShare from '../components/Share/SocialShare'
import PostLike from '../components/Like/PostLike'
import profile from '../assets/images/Annie.PNG'
import post1 from '../assets/images/435816.jpg'

const Home = () => {
    return (
        <div className="loadMore">
            <div className="central-meta item">
                <div className="user-post">
                    <div className="friend-info">
                        <figure>
                            <img src={profile} alt="annie" />
                        </figure>
                        <div className="friend-name">
                            <ins><a href="time-line.html" title="">Janice Griffith</a></ins>
                            <span>published: june,2 2018 19:PM</span>
                        </div>
                        <div className="post-meta">
                            <img src={post1} alt="" />
                            <div className="we-video-info">
                                <ul>
                                    <li>
                                        <span className="views" data-toggle="tooltip" title="views">
                                            <i className="fa fa-eye"></i>
                                            <ins>1.2k</ins>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="comment" data-toggle="tooltip" title="Comments">
                                            <i className="fa fa-comments-o"></i>
                                            <ins>52</ins>
                                        </span>
                                    </li>
                                    <PostLike />                  
                                    <SocialShare />
                                </ul>
                            </div>
                            <div className="description">                                
                                <p>
                                    World's most beautiful car in Curabitur <a href="#" title="">#test drive booking !</a> the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="coment-area">
                        <ul className="we-comet">
                            <li>
                                <div className="comet-avatar">
                                    <img src={profile} alt="annie" />
                                </div>
                                <div className="we-comment">
                                    <div className="coment-head">
                                        <h5><a href="time-line.html" title="">Jason borne</a></h5>
                                        <span>1 year ago</span>
                                        <a className="we-reply" href="#" title="Reply"><i className="fa fa-reply"></i></a>
                                    </div>
                                    <p>we are working for the dance and sing songs. this car is very awesome for the youngster. please vote this car and like our post</p>
                                </div>
                                <ul>
                                    <li>
                                        <div className="comet-avatar">
                                            <img src={profile} alt="annie" />
                                        </div>
                                        <div className="we-comment">
                                            <div className="coment-head">
                                                <h5><a href="time-line.html" title="">alexendra dadrio</a></h5>
                                                <span>1 month ago</span>
                                                <a className="we-reply" href="#" title="Reply"><i className="fa fa-reply"></i></a>
                                            </div>
                                            <p>yes, really very awesome car i see the features of this car in the official website of <a href="#" title="">#Mercedes-Benz</a> and really impressed :-)</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="comet-avatar">
                                            <img src={profile} alt="annie" />
                                        </div>
                                        <div className="we-comment">
                                            <div className="coment-head">
                                                <h5><a href="time-line.html" title="">Olivia</a></h5>
                                                <span>16 days ago</span>
                                                <a className="we-reply" href="#" title="Reply"><i className="fa fa-reply"></i></a>
                                            </div>
                                            <p>i like lexus cars, lexus cars are most beautiful with the awesome features, but this car is really outstanding than lexus</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="comet-avatar">
                                            <img src={profile} alt="annie" />
                                        </div>
                                        <div className="we-comment">
                                            <div className="coment-head">
                                                <h5><a href="time-line.html" title="">Olivia</a></h5>
                                                <span>16 days ago</span>
                                                <a className="we-reply" href="#" title="Reply"><i className="fa fa-reply"></i></a>
                                            </div>
                                            <p>i like lexus cars, lexus cars are most beautiful with the awesome features, but this car is really outstanding than lexus</p>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div className="comet-avatar">
                                    <img src={profile} alt="annie" />
                                </div>
                                <div className="we-comment">
                                    <div className="coment-head">
                                        <h5><a href="time-line.html" title="">Donald Trump</a></h5>
                                        <span>1 week ago</span>
                                        <a className="we-reply" href="#" title="Reply"><i className="fa fa-reply"></i></a>
                                    </div>
                                    <p>we are working for the dance and sing songs. this video is very awesome for the youngster. please vote this video and like our channel
                                        <i className="em em-smiley"></i>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <a href="#" title="" className="showmore underline">more comments</a>
                            </li>
                            <li className="post-comment">
                                <div className="comet-avatar">
                                    <img src={profile} alt="annie" />
                                </div>
                                <div className="post-comt-box">
                                    <form method="post">
                                        <textarea placeholder="Post your comment"></textarea>
                                        <div className="add-smiles">
                                            <span className="em em-expressionless" title="add icon"></span>
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
                            </li>
                        </ul>
                    </div>
                </div>
            </div>                   
        </div>
    )
}

export default Home
