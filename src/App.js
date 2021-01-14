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
import Navbar from './components/Navbar'
import SideSetting from './components/SideSetting'

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
      <Navbar />
      <SideSetting />
    </div>
  );
}

export default App;
