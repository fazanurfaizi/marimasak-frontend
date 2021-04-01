// import Post from '../../components/Friends'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//ngeloop gr2 ini
import RightSidebar from '../../components/Sidebar/RightSidebar'
import profile from '../../assets/images/Annie.PNG'

const Friends = () => {
    let i=0;
    // const data = [
    //     {
    //         name: 'Annie Leonhart',
    //         // profile: photo,
    //         // thumbnail: post1,
    //         likesCount: 32,
    //         commentsCount: 50,
    //         body: "World's most beautiful car in Curabitur <a href='#' title=''>#test drive booking !</a> the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website",
    //         publishedAt: 'june, 2 2018 19:PM',
    //     },
    //     {
    //         name: 'Annie Leonhart',
    //         // profile: photo,
    //         // thumbnail: post2,
    //         likesCount: 32,
    //         commentsCount: 50,
    //         body: "World's most beautiful car in Curabitur <a href='#' title=''>#test drive booking !</a> the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website",
    //         publishedAt: 'june, 2 2018 19:PM',
    //     },
    //     {
    //         name: 'Annie Leonhart',
    //         // profile: photo,
    //         // thumbnail: post3,
    //         likesCount: 32,
    //         commentsCount: 50,
    //         body: "World's most beautiful car in Curabitur <a href='#' title=''>#test drive booking !</a> the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website",
    //         publishedAt: 'june, 2 2018 19:PM',
    //     },
    //     {
    //         name: 'Annie Leonhart',
    //         // profile: photo,
    //         // thumbnail: post3,
    //         likesCount: 32,
    //         commentsCount: 50,
    //         body: "World's most beautiful car in Curabitur <a href='#' title=''>#test drive booking !</a> the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website",
    //         publishedAt: 'june, 2 2018 19:PM',
    //     },
    //     {
    //         name: 'Annie Leonhart',
    //         // profile: photo,
    //         // thumbnail: post3,
    //         likesCount: 32,
    //         commentsCount: 50,
    //         body: "World's most beautiful car in Curabitur <a href='#' title=''>#test drive booking !</a> the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website",
    //         publishedAt: 'june, 2 2018 19:PM',
    //     },
    // ]

    return (
        <>
            <div className="col-lg-8">
                <div className="product-bar">
                    <div className="user-basket">
                        <a href="search/product">
                            <i className="fa fa-basket"></i>
                            Product
                        </a>
                        <a href="search/friends" className="aktif">
                            <i className="fas fa-user"></i>
                            User
                        </a>
                    </div>
                    {/* <div className="filter">
                        <p>Intolerance</p>
                        <select>
                            <option value="0">Select car:</option>
                            <option value="1">Audi</option>
                            <option value="2">BMW</option>
                        </select>
                    </div> */}
                    {/* <div className="filter">
                        <p>Intolerance</p>
                        <select>
                            <option value="0">Select car:</option>
                            <option value="1">Audi</option>
                            <option value="2">BMW</option>
                        </select>
                    </div> */}
                </div>
                <div className="loadMore  product-container">
                <div className="tab-content">
                        <div className="tab-pane active fade show " id="frends" >
                        <ul className="nearby-contct">
                        
                        <li>
                            <div className="nearly-pepls">
                                <figure>
                                    <a href="time-line.html" title="">
                                        <img src={profile} alt="annie" />
                                    </a>
                                </figure>
                                <div className="pepl-info">
                                    <h4><a href="time-line.html" title="">Sara grey</a></h4>
                                    <span>ftv model</span>
                                    <a href="#" title="" className="add-butn more-action" data-ripple="">delete Request</a>
                                    <a href="#" title="" className="add-butn" data-ripple="">Confirm</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="nearly-pepls">
                                <figure>
                                    <a href="time-line.html" title="">
                                        <img src={profile} alt="annie" />
                                    </a>
                                </figure>
                                <div className="pepl-info">
                                    <h4><a href="time-line.html" title="">sophia Gate</a></h4>
                                    <span>tv actresses</span>
                                    <a href="#" title="" className="add-butn more-action" data-ripple="">Send Friend request</a>
                                    <a href="#" title="" className="add-butn" data-ripple="">message</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="nearly-pepls">
                                <figure>
                                    <a href="time-line.html" title="">
                                        <img src={profile} alt="annie" />
                                    </a>
                                </figure>
                                <div className="pepl-info">
                                    <h4><a href="time-line.html" title="">sara grey</a></h4>
                                    <span>work at IBM</span>
                                    <a href="#" title="" className="add-butn more-action" data-ripple="">Send Friend request</a>
                                    <a href="#" title="" className="add-butn" data-ripple="">message</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="nearly-pepls">
                                <figure>
                                    <a href="time-line.html" title="">
                                        <img src={profile} alt="annie" />
                                    </a>
                                </figure>
                                <div className="pepl-info">
                                    <h4><a href="time-line.html" title="">Sara grey</a></h4>
                                    <span>ftv model</span>
                                    <a href="#" title="" className="add-butn more-action" data-ripple="">Send Friend request</a>
                                    <a href="#" title="" className="add-butn" data-ripple="">message</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="nearly-pepls">
                                <figure>
                                    <a href="time-line.html" title="">
                                        <img src={profile} alt="annie" />
                                    </a>
                                </figure>
                                <div className="pepl-info">
                                    <h4><a href="time-line.html" title="">Amy watson</a></h4>
                                    <span>Study in university</span>
                                    <a href="#" title="" className="add-butn more-action" data-ripple="">Send Friend request</a>
                                    <a href="#" title="" className="add-butn" data-ripple="">message</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="nearly-pepls">
                                <figure>
                                    <a href="time-line.html" title="">
                                        <img src={profile} alt="annie" />
                                    </a>
                                </figure>
                                <div className="pepl-info">
                                    <h4><a href="time-line.html" title="">caty lasbo</a></h4>
                                    <span>work as dancers</span>
                                    <a href="#" title="" className="add-butn more-action" data-ripple="">unfriend</a>
                                    <a href="#" title="" className="add-butn" data-ripple="">message</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="nearly-pepls">
                                <figure>
                                    <a href="time-line.html" title="">
                                        <img src={profile} alt="annie" />
                                    </a>
                                </figure>
                                <div className="pepl-info">
                                    <h4><a href="time-line.html" title="">Ema watson</a></h4>
                                    <span>personal business</span>
                                    <a href="#" title="" className="add-butn more-action" data-ripple="">unfriend</a>
                                    <a href="#" title="" className="add-butn" data-ripple="">message</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                        <div className="lodmore"><button className="btn-view btn-load-more"></button></div>
                        </div>
                        <div className="tab-pane fade" id="frends-req" >
                        <ul className="nearby-contct">
                        <li>
                            <div className="nearly-pepls">
                                <figure>
                                    <a href="time-line.html" title="">
                                        <img src={profile} alt="annie" />
                                    </a>
                                </figure>
                                <div className="pepl-info">
                                    <h4><a href="time-line.html" title="">Amy watson</a></h4>
                                    <span>ftv model</span>
                                    <a href="#" title="" className="add-butn more-action" data-ripple="">delete Request</a>
                                    <a href="#" title="" className="add-butn" data-ripple="">Confirm</a>
                                </div>
                            </div>
                        </li>	
                    </ul>	
                            <button className="btn-view btn-load-more"></button>
                        </div>
                    </div>
                    {/* {data.map((item, index) => (
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
                        
                        </div>
                    ))}         */}
                </div>
            </div>
            {/* <RightSidebar /> */}
        </>
    )
}

export default Friends
