import Comment from './Comment'

const CommentList = () => {
    return (
        <li>
            <Comment />
            <ul>
                <li>
                    <Comment />                
                </li>
                <li>
                    <Comment />                
                </li>
                <li>
                    <Comment />                
                </li>
            </ul> 
        </li>
    )
}

export default CommentList
