/* eslint-disable jsx-a11y/anchor-is-valid */

const Comment = ({
    name,
    profile,
    time,
    body
}) => {
    return (
        <>
            <div className="comet-avatar">
                <img src={profile} alt="annie" />
            </div>
            <div className="we-comment">
                <div className="coment-head">
                    <h5>
                        <a href="time-line.html" title={name}>{name}</a>
                    </h5>
                    <span>{time}</span>
                    <a className="we-reply" href="#" title="Reply">
                        <i className="fa fa-reply"></i>
                    </a>
                </div>
                <p>{body}</p>
            </div>            
        </>
    )
}

export default Comment
