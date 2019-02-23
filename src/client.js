// REACT
import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { loadComponents } from 'loadable-components';
import { BrowserRouter } from 'react-router-dom';

import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// IMPORT COMBINED REDUCERS
import reducers from './reducers/index';

const middleware = applyMiddleware(thunk, logger);

const initialState = window.INITIAL_STATE;
const store = createStore(reducers, initialState, middleware);

import routes from './routes';

const Routes = (
  <Provider store={store}>
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  </Provider>
);

  loadComponents().then(() => hydrate(Routes, document.getElementById('app')));