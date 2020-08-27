import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
// import App from './App';
import MapRoute from './routes/MapRoute'
import routes from './routes/routes'
import './assets/css/public.css'
import './utils/fontsize'
import axios from './http/index' 
import './assets/font/iconfont.css'

React.Component.prototype.$http = axios;
ReactDOM.render(
  <BrowserRouter>
    <MapRoute routes={routes}/>
  </BrowserRouter>,
  document.getElementById('root')
);
