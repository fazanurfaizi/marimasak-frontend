/* eslint-disable jsx-a11y/anchor-is-valid */
import CommentList from './CommentList'
import CommentForm from './CommentForm'

const Comments = () => {
    return (
        <div className="coment-area">
            <ul className="we-comet">
                <CommentList />                
                <li>
                    <a href="#" title="more comments" className="showmore underline">more comments</a>
                </li>
                <CommentForm />
            </ul>
        </div>
    )
}

export default Comments
