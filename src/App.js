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
} from '@fortawesome/free-solid-svg-icons'
import MobileNavbar from './components/MobileNavbar'
import Navbar from './components/Navbar'
import SideSetting from './components/SideSetting'

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
  faPencilAlt
)

function App() {
  return (
    <div className="theme-layout">
      <MobileNavbar />
      <Navbar />
      <Home />
      <SideSetting />
    </div>
  );
}

export default App;
