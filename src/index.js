import React from 'react';
import ReactDOM from 'react-dom';
import store from './store'
import App from './App';
import { StoreContext } from './utils/context'

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>
  ,
  document.getElementById('root')
);

