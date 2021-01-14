import FollowSuggestion from '../Follow/FollowSuggestion'
import FriendList from '../Friends/FriendList'

const RightSidebar = () => {
    return (
        <div className="col-lg-3 d-none d-sm-none d-lg-block">
            <aside className="sidebar static right">
                <FollowSuggestion />
                <FriendList />
            </aside>
        </div>
    )
}

export default RightSidebar
