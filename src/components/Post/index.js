import SocialShare from '../Share/SocialShare'
import PostLike from '../Like/PostLike'
import Comments from '../Comment/Comments'

const Post = ({
    name,
    profile,
    thumbnail,
    likesCount,
    commentsCount,
    body,
    publishedAt
}) => {    
    return (
        <div className="central-meta item">
            <div className="user-post">
                <div className="friend-info">
                    <figure>
                        <img src={profile} alt="annie" />
                    </figure>
                    <div className="friend-name">
                        <ins><a href="time-line.html" title="">{name}</a></ins>
                        <span>published: {publishedAt}</span>
                    </div>
                    <div className="post-meta">
                        <img src={thumbnail} alt="" />
                        <div className="we-video-info">
                            <ul>
                                <li>
                                    <span className="views" data-toggle="tooltip" title="views">
                                        <i className="fa fa-eye"></i>
                                        <ins>{likesCount}</ins>
                                    </span>
                                </li>
                                <li>
                                    <span className="comment" data-toggle="tooltip" title="Comments">
                                        <i className="fa fa-comments-o"></i>
                                        <ins>{commentsCount}</ins>
                                    </span>
                                </li>
                                <PostLike />                  
                                <SocialShare />
                            </ul>
                        </div>
                        <div className="description">                                
                            <p>
                                {body}                                
                            </p>
                        </div>
                    </div>
                </div>
                <Comments />
            </div>
        </div>
    )
}

export default Post
