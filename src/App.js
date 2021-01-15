import AppLayout from './layout/AppLayout'

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
    <AppLayout />
  );
}

export default App;
