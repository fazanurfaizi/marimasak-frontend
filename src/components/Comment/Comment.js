/* eslint-disable jsx-a11y/anchor-is-valid */
import profile from '../../assets/images/Annie.PNG'

const Comment = () => {
    return (
        <>
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
        </>
    )
}

export default Comment
