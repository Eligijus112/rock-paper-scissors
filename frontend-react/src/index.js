import React from 'react';
import ReactDOM from 'react-dom';

// Global store for all components
import { Provider } from 'react-redux';

import './index.css';
import App from './App';

// Creating the global store
import store from './redux/store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
