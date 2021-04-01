import Post from '../../components/Product'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//ngeloop gr2 ini
import RightSidebar from '../../components/Sidebar/RightSidebar'


const Product = () => {
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
            <div className="col-lg-8">
                <div className="product-bar">
                    <div className="user-basket">
                        <a href="search/product" className="aktif">
                            <i className="fa fa-basket"></i>
                            Product
                        </a>
                        <a href="search/friends">
                            <i className="fas fa-user"></i>
                            User
                        </a>
                    </div>
                    <div className="filter">
                        <p>Intolerance</p>
                        <select>
                            <option value="0">Select:</option>
                            <option value="1">Haram</option>
                            <option value="2">Meat</option>
                            <option value="2">Nut</option>
                        </select>
                    </div>
                    <div className="filter">
                        <p>Sort By</p>
                        <select>
                            <option value="0">Select:</option>
                            <option value="1">Price</option>
                            <option value="2">Newest</option>
                        </select>
                    </div>
                </div>
                <div className="loadMore  product-container">

                    {data.map((item, index) => (
                        <div className="product-row">
                        <Post 
                            key={index}
                            name={item.name}
                            profile={item.profile}
                            thumbnail={item.thumbnail}
                            likesCount={item.likesCount}
                            commentsCount={item.commentsCount}
                            body={item.body}
                            publishedAt={item.publishedAt}
                        />
                        
                        {/* if(i%6==0){</div>} */}
                        </div>
                    ))}        
                </div>
            </div>
            {/* <RightSidebar /> */}
        </>
    )
}

export default Product
