import MobileNavbar from '../components/MobileNavbar'
import Navbar from '../components/Navbar'
import SideSetting from '../components/SideSetting'
import LeftSidebar from '../components/Sidebar/LeftSidebar'

const AppLayout = ({ children }) => {
    return (
        <div className="theme-layout">
            <MobileNavbar />
            <Navbar />      
            <section>
                <div className="gray-bg">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row merged20" id="page-contents">
                                    {children}                                 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <SideSetting />
        </div>        
    )
}

export default AppLayout
