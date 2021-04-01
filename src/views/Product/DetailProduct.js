import Pic from '../../assets/images/food.png'
const DetailProduct = ({ children }) => {
    return (
        <div className="theme-layout">            
            <div className="cart-page flex">

                <div className="detail-product flex full">
                    <div className="detail-photo">
                        <img className="shadow" src={Pic}/>
                    </div>
                    <div className="detail-text">
                        <h3>Ayam Bakar Khas Padang</h3>
                        <i className="fa fa-star"></i> 4,9<br/>
                        <i className="fa fa-map"></i> Cileunyi, Bandung<br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel dui id ante sodales tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis turpis id dui eleifend faucibus. Sed porttitor vestibulum nunc et efficitur. Proin ac lobortis orci. Mauris fermentum ante a eros lacinia, sed condimentum quam iaculis. In interdum scelerisque imperdiet. Curabitur tincidunt, elit non pellentesque dictum, dolor enim faucibus elit, faucibus facilisis neque massa et nulla. Vestibulum ac fermentum metus. Fusce accumsan ultricies condimentum. Vestibulum feugiat, lacus id pellentesque auctor, magna enim aliquet tortor, ac pretium tellus turpis in nisi. Donec molestie, turpis id tempus sagittis, ante turpis feugiat lorem, vel tempus ex ante in nibh. Pellentesque sed nunc vel nisi bibendum fermentum</p>
                    </div>
                </div>

                <div className="box-checkout shadow">
                    <b>Quantity</b>
                    <div className="line"></div>
                    <div className="subtitle">
                        <div>Price <b>- 1 +</b></div>
                        <div>Additional <b>Rp. 1000</b></div>
                    </div>
                    <div className="line"></div>
                    <div className="subtitle">
                        <div>Total <b>Rp. 1000</b></div>
                    </div>
                    <div className="promo-code checkout">
                        <a>
                            Checkout
                        </a>
                    </div>
                    <div className="promo-code">
                        <a href="checkout">
                            Add To Cart
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default DetailProduct
