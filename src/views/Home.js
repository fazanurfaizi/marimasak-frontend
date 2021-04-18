import Post from '../components/Post'
import RightSidebar from '../components/Sidebar/RightSidebar'

import photo from '../assets/images/Annie.PNG'
import post3 from '../assets/images/soto.jpg'

const Home = () => {

    const data = [
        {
            name: 'Client Marimasak',
            profile: photo,
            thumbnail: post3,
            likesCount: 32,
            commentsCount: 50,
            body: "Soto Betawi merupakan salah satu jenis soto khas Nusantara yang paling digemari. Berkuah putih dan cukup kental, soto Betawi ada yang terbuat dari santan kelapa atau susu. Tak ayal, menu ini identik dengan rasa gurih.Berisikan daging sapi dan organ dalam (jeroan), soto Betawi bisa jadi masakan terjamin kenikmatannya. Makanan berkuah ini kaya akan rempah seperti cengkih, pala, kayu manis, dan merica sehingga terasa hangat di badan. Tidak seperti yang dibayangkan, ternyata menu ini bisa kita masak sendiri di rumah. Sama nikmatnya seperti soto Betawi ala restoran, berikut racikan resepnya.",
            publishedAt: 'june, 2 2018 19:PM',
        },
    ]

    return (
        <>
            <div className="col-lg-6">
                <div className="loadMore">
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
