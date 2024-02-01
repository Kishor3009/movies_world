// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';  // Import BrowserRouter
import App from './App';

const shows = [/* Your shows data here */];
ReactDOM.render(
  <BrowserRouter>
    <App shows={shows} />
  </BrowserRouter>,
  document.getElementById('root')
);
