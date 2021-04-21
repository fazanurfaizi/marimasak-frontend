
import { Link } from 'react-router-dom';
import Pic from '../../assets/images/food.png'

const Post = ({
    //untuk produk
    item,
}) => {    
    return (
        <div className="product">
        <Link
            to={{
                pathname: "/detail/"+item.id,
                state: item
            }}
            >
            <div className="product-box">
                <img src={Pic}/>
                <div className="desc-product-box">
                    <h4>{item.name}</h4>
                    <p>
                        <b>{item.harga}</b><br/>
                        <i className="fa fa-map"></i> {item.lokasi}<br/>
                        <i className="fa fa-star"></i> {item.rate}<br/>
                    </p>
                </div>
            </div>
            </Link>
        </div>
    )
}



export default Post;