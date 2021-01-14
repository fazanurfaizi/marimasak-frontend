import SocialShare from '../components/Share/SocialShare'
import PostLike from '../components/Like/PostLike'
import Comments from '../components/Comment/Comments'
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
                    <Comments />
                </div>
            </div>                   
        </div>
    )
}

export default Home
