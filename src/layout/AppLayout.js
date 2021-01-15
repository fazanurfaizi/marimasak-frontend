import { BrowserRouter } from 'react-router-dom'

import MobileNavbar from '../components/MobileNavbar'
import Navbar from '../components/Navbar'
import SideSetting from '../components/SideSetting'
import LeftSidebar from '../components/Sidebar/LeftSidebar'
import RightSidebar from '../components/Sidebar/RightSidebar'

import AppRoutes from '../routes/AppRoutes'

const AppLayout = () => {
    return (
        <BrowserRouter>
            <div className="theme-layout">
                <MobileNavbar />
                <Navbar />      
                <section>
                        <div className="gap2 gray-bg">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="row merged20" id="page-contents">
                                            <LeftSidebar />
                                            <div className="col-lg-6">
                                                <AppRoutes/>
                                            </div>
                                            <RightSidebar />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                <SideSetting />
            </div>
        </BrowserRouter>
    )
}

export default AppLayout
