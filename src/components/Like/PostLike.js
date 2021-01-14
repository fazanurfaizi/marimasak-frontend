import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PostLike = () => {

    const [likes, setLikes] = useState(0);    
    const [liked, setLiked] = useState(false);

    const handleLikes = () => {
        if(liked) {
            setLikes(likes - 1)
            setLiked(false)
        } else if(!liked) {
            setLikes(likes + 1)
            setLiked(true)
        }
    }

    return (
        <li>
            <span className="like" data-toggle="tooltip" title="like" onClick={handleLikes}>                                
                <FontAwesomeIcon icon="heart" color={liked ? 'red' : 'gray'} />
                <ins>{likes}</ins>
            </span>
        </li>
    )
}

export default PostLike
