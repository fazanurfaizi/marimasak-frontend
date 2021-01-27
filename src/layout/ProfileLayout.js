import Navbar from '../components/Navbar'
import MobileNavbar from '../components/MobileNavbar'
import ProfileHeader from '../components/ProfileHeader'

const ProfileLayout = ({ children }) => {
    return (
        <div className="theme-layout">
            <MobileNavbar />
            <Navbar />
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
