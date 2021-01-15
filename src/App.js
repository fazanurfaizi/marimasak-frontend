import { BrowserRouter } from 'react-router-dom'

import AppLayout from './layout/AppLayout'
import AuthLayout from './layout/AuthLayout'
import SettingLayout from './layout/SettingLayout'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { 
  faAlignJustify, 
  faSlidersH
} from '@fortawesome/free-solid-svg-icons'

library.add(
  fab, 
  faAlignJustify, 
  faSlidersH,   
)

function App() {
  return (
    <BrowserRouter>
      <AppLayout />            
    </BrowserRouter>
  );
}

export default App;
