// REACT
import React from 'react';
import { render } from 'react-dom';
// REACT-ROUTER

//import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import { Route, Switch } from 'react-router-dom';
import Header from '.././components/header';
import loadable from 'loadable-components';
// END REACT- ROUTER


// RETRIVES COMPONENTS BASED ON STATUS
const Status = function ({ code, children }) {
  return (
    <Route render={function ({ staticContext }) {
      if (staticContext)
        staticContext.status = code;
      return children;
    }} />
  );
};

//NOT-FOUND COMPONENT
const NotFound = function () {
  return (
    <Status code={404}>
      <div className="error-404">
        <img src='/images/404/error-404.png' />
      </div>
    </Status>
  );
};

//Loadable Components
const Home = loadable(() => import('.././pages/home' /* webpackChunkName: 'home' */));
const Login = loadable(() => import('.././pages/login' /* webpackChunkName: 'login' */));

// CLIENT-SERVER SHARED ROUTES
const routes = (
  <div>
    <Header />
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route path="/login/:path?" component={Login} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

if (typeof require.ensure !== 'function')
  require.ensure = (d, c) => {
    c(require);
  };
if (typeof require.include !== 'function') require.include = () => { };


export default routes;