import Comment from './Comment'
import annnieProfile from '../../assets/images/Annie.PNG'

const CommentList = () => {

    const data = {
        name: "Annie Leonhart",
        profile: annnieProfile,
        time: '1 day ago',
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }

    const list = [
        {
            name: "Annie Leonhart",
            profile: annnieProfile,
            time: '1 day ago',
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            name: "Annie Leonhart",
            profile: annnieProfile,
            time: '1 day ago',
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            name: "Annie Leonhart",
            profile: annnieProfile,
            time: '1 day ago',
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
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
