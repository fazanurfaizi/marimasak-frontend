import SocialShare from '../Share/SocialShare'
import PostLike from '../Like/PostLike'
import Comments from '../Comment/Comments'

const Post = ({
    name,
    recipe,
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
                        <ins><a href="/u/profile" title="">{name}</a></ins>
                        <span>published: {publishedAt}</span>
                    </div>
                    <div className="post-meta">
                        <img src={thumbnail} alt="" />
                        <div className="we-video-info">
                            <ul>     
                                <PostLike totalLikes={likesCount} />                              
                                <li>
                                    <span className="comment" data-toggle="tooltip" title="Comments">
                                        <i className="fa fa-comments-o"></i>
                                        <ins>{commentsCount}</ins>
                                    </span>
                                </li>                                               
                                <SocialShare />
                            </ul>
                        </div>
                        <h5>{recipe}</h5>
                        <div className="description">                                
                            <p>
                                {body}                                
                            </p>
                        </div>
                    </div>
                </div>
                {/* <Comments /> */}
            </div>
        </div>
    )
}

export default Post
