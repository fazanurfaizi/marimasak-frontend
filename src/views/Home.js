import Post from '../components/Post'
import RightSidebar from '../components/Sidebar/RightSidebar'

import photo from '../assets/images/Annie.PNG'
import post1 from '../assets/images/food.png'
import post2 from '../assets/images/573801.jpg'
import post3 from '../assets/images/pillow-war.jpg'

const Home = () => {

    const data = [
        {
            name: 'Annie Leonhart',
            profile: photo,
            thumbnail: post1,
            likesCount: 32,
            commentsCount: 50,
            body: "World's most beautiful car in Curabitur <a href='#' title=''>#test drive booking !</a> the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website",
            publishedAt: 'june, 2 2018 19:PM',
        },
        {
            name: 'Annie Leonhart',
            profile: photo,
            thumbnail: post2,
            likesCount: 32,
            commentsCount: 50,
            body: "World's most beautiful car in Curabitur <a href='#' title=''>#test drive booking !</a> the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website",
            publishedAt: 'june, 2 2018 19:PM',
        },
        {
            name: 'Annie Leonhart',
            profile: photo,
            thumbnail: post3,
            likesCount: 32,
            commentsCount: 50,
            body: "World's most beautiful car in Curabitur <a href='#' title=''>#test drive booking !</a> the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website",
            publishedAt: 'june, 2 2018 19:PM',
        },
    ]

    return (
        <>
            <div className="col-lg-6">
                <div>
                    {data.map((item, index) => (
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
                    ))}        
                </div>
            </div>
            <RightSidebar />
        </>
    )
}

export default Home
