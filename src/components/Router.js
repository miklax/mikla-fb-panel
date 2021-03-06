import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Login} />
    </Switch>
  </BrowserRouter>
)

export default Router;