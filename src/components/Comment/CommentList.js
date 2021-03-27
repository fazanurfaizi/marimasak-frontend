import Comment from './Comment'
import annnieProfile from '../../assets/images/Annie.PNG'

const CommentList = () => {

    const data = {
        name: "Client Marimasak",
        profile: annnieProfile,
        time: '1 day ago',
        body: "Mantep rasanya enak"
    }

    const list = [
        {
            name: "Client Marimasak",
            profile: annnieProfile,
            time: '1 day ago',
            body: "Sotonya kerasa banget gurihnya."
        },
        {
            name: "Annie Leonhart",
            profile: annnieProfile,
            time: '1 day ago',
            body: "Enakk bangettt kaya mau meninggal."
        },
    ]

    return (
        <li>
            <Comment 
                key="comment-1"
                name={data.name}
                profile={data.profile}
                time={data.time}
                body={data.body}
            />
            <ul>
                { list.map((item, index) => (
                    <li key={`comment-${index}`}>
                        <Comment
                            key={index}
                            name={item.name}
                            profile={item.profile}
                            time={item.time}
                            body={item.body}
                        />
                    </li>
                )) }                
            </ul> 
        </li>
    )
}

export default CommentList
