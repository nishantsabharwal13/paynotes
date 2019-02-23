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
  // axios.get('http://localhost:3001/books')
  //   .then(function (response) {
  // var myHtml = JSON.stringify(response.data);
  // res.render('index', {myHtml});

  // STEP-1 CREATE A REDUX STORE ON THE SERVER
  const store = createStore(reducers);

  // STEP-2 GET INITIAL STATE FROM THE STORE
  const initialState = JSON.stringify(store.getState()).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--');

  // STEP-3 IMPLEMENT REACT-ROUTER ON THE SERVER TO INTERCEPT CLIENT REQUESTs AND DEFINE WHAT TO DO WITH THEM
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
  // })
  // .catch(function (err) {
  //   console.log('#Initial Server-side rendering error', err);
  // })
}

module.exports = handleRender;