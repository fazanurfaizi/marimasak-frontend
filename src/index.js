import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
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

const store = configureStore()

ReactDOM.render(
  <React.StrictMode>    
    <Provider store={store}>
      <App />     
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
