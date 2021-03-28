import Pic from '../../assets/images/food.png'

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
            <div className="checkout-product">
                <img src={Pic}/>
                <div className="desc-product-box">
                    <h4>{name}</h4>
                    <p>
                        <b>Rp. 97.000</b><br/>
                        <i className="fa fa-map"></i> Cileunyi, Bandung<br/>
                        <i className="fa fa-star"></i> 4,9<br/>
                    </p>
                </div>
            </div>
    )
}

export default Post
