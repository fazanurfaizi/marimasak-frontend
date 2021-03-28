import Pic from '../../assets/images/food.png'

const Checkout = () => {
    let i=0;
    const data = [
        {
            name: 'Annie Leonhart',
            // profile: photo,
            // thumbnail: post1,
            likesCount: 32,
            commentsCount: 50,
            body: "World's most beautiful car in Curabitur <a href='#' title=''>#test drive booking !</a> the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website",
            publishedAt: 'june, 2 2018 19:PM',
        },
        {
            name: 'Annie Leonhart',
            // profile: photo,
            // thumbnail: post2,
            likesCount: 32,
            commentsCount: 50,
            body: "World's most beautiful car in Curabitur <a href='#' title=''>#test drive booking !</a> the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website",
            publishedAt: 'june, 2 2018 19:PM',
        },
        {
            name: 'Annie Leonhart',
            // profile: photo,
            // thumbnail: post3,
            likesCount: 32,
            commentsCount: 50,
            body: "World's most beautiful car in Curabitur <a href='#' title=''>#test drive booking !</a> the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website",
            publishedAt: 'june, 2 2018 19:PM',
        },
        {
            name: 'Annie Leonhart',
            // profile: photo,
            // thumbnail: post3,
            likesCount: 32,
            commentsCount: 50,
            body: "World's most beautiful car in Curabitur <a href='#' title=''>#test drive booking !</a> the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website",
            publishedAt: 'june, 2 2018 19:PM',
        },
        {
            name: 'Annie Leonhart',
            // profile: photo,
            // thumbnail: post3,
            likesCount: 32,
            commentsCount: 50,
            body: "World's most beautiful car in Curabitur <a href='#' title=''>#test drive booking !</a> the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website",
            publishedAt: 'june, 2 2018 19:PM',
        },
    ]

    return (
        <>
            <div className="col-lg-12">
            <div class="cart-page flex">
                <div class="cart-list">
                    <h3>Cart</h3>
                    <div class="sub-cart flex">
                        <div>
                            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                            Choose All
                        </div>
                        <a>Hapus</a>
                    </div>
                    <div class="line"></div>
                    <div class="checkout-toko shadow full">
                        <div className="shop-name">
                            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                            <b>Toko Nunung</b> - Cileunyi, Bandung
                        </div>

                        <div class="item-checkout flex">
                            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                            <img class="shadow" src={Pic}/>
                            <div class="item-teks flex">
                                <h3>Ayam Bakar Khas Padang</h3>
                                <b>Rp. 1000</b>
                                Variant : Sambal Hijau
                                <a>Write Note</a>
                            </div>
                            <div class="add">
                                <b>-  1  +</b>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="box-checkout shadow">
                    <div class="promo-code">
                        <a>
                            % Got Promo Code?
                        </a>
                    </div>
                    <div class="line"></div>
                    <div class="subtitle">
                        <b>Summary</b>
                        <div>Price <b>Rp. 1000</b></div>
                        <div>Discount <b>Rp. 1000</b></div>
                    </div>
                    <div class="line"></div>
                    <div class="subtitle">
                        <b>Total</b>
                        <div>Price <b>Rp. 1000</b></div>
                    </div>
                    <div class="promo-code checkout">
                        <a>
                            Checkout
                        </a>
                    </div>
                </div>
            </div>
            {/* {data.map((item, index) => (
                        <div className="product-row">
                        <CO 
                            key={index}
                            name={item.name}
                            profile={item.profile}
                            thumbnail={item.thumbnail}
                            likesCount={item.likesCount}
                            commentsCount={item.commentsCount}
                            body={item.body}
                            publishedAt={item.publishedAt}
                        />
                        
                        </div>
                    ))}    */}
            </div>
        </>
    )
}

export default Checkout
