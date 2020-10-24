import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Galery from './galery';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Galery />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();