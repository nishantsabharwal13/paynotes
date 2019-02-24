// import axios from 'axios';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { getLoadableState } from 'loadable-components/server';

//import {match, RouterContext} from 'react-router';

import { StaticRouter } from 'react-router-dom';

import reducers from './src/reducers/index';
import routes from './src/routes';

function handleRender(req, res) {

  const store = createStore(reducers);

  const initialState = JSON.stringify(store.getState()).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--');

  const context = {};
  const appWithRouter = (
    <Provider store={store}>
      <StaticRouter
        location={req.url}
        context={context}>
        {routes}
      </StaticRouter>
    </Provider>
  );

  getLoadableState(appWithRouter).then(() => {
    const reactComponent = renderToString(appWithRouter);
    res.status(200).render('index', { reactComponent, initialState });
  });

}

module.exports = handleRender;