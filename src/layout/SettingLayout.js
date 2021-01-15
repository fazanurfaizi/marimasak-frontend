import MobileNavbar from '../components/MobileNavbar'
import LeftSidebarSetting from '../components/Sidebar/LeftSidebarSetting'
import Navbar from '../components/Navbar'

const AppLayout = ({children}) => {
    return (
        <div className="theme-layout">
            <MobileNavbar />            
            <Navbar />
            <section>
                <div className="gap2 gray-bg">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row merged20" id="page-contents">
                                    <LeftSidebarSetting />
                                    {children}                             
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>            
        </div>        
    )
}

export default AppLayout
