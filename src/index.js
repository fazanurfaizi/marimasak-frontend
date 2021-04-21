import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { 
  faAlignJustify, 
  faSlidersH,
  faGlobeAsia,
  faHeart
} from '@fortawesome/free-solid-svg-icons'

library.add(
  fab, 
  faAlignJustify, 
  faSlidersH,   
  faGlobeAsia,
  faHeart
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
