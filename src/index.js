import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <>
  <BrowserRouter>
  <App />
  
  </BrowserRouter>
 
 
  
  </>,

  document.getElementById('root')
);
