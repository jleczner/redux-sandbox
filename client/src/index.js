import React from 'react';
import {render} from 'react-dom';

import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import App from './app/App';
import configureStore from './store/configureStore';

const store = configureStore();

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

render(app, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
