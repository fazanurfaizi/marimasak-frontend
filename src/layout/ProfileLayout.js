import ProfileHeader from '../components/ProfileHeader'

const ProfileLayout = ({ children }) => {
    return (
        <div className="theme-layout">
            <ProfileHeader />
            <section>
                <div className="gap gray-bg">
                    <div className="container-fluid">
                        {children}
                    </div>
                </div>
            </section>
        </div>
    )
}



export default ProfileLayout
