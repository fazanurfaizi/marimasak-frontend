import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { 
  faAlignJustify, 
  faSlidersH, 
  faSearch, 
  faHome,
  faBell,
  faComment,
  faGlobeAsia,
  faUser,
  faPencilAlt,
  faHeart
} from '@fortawesome/free-solid-svg-icons'
import MobileNavbar from './components/MobileNavbar'
import Navbar from './components/Navbar'
import SideSetting from './components/SideSetting'
import LeftSidebar from './components/Sidebar/LeftSidebar'
import RightSidebar from './components/Sidebar/RightSidebar'

import Home from './views/Home'

library.add(
  fab, 
  faAlignJustify, 
  faSlidersH, 
  faSearch,
  faHome,
  faBell,
  faComment,
  faGlobeAsia,
  faUser,
  faPencilAlt,
  faHeart
)

function App() {
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
                                <LeftSidebar />
                                <div className="col-lg-6">
                                  <Home />
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
  );
}

export default App;
