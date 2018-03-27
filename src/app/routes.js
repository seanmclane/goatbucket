import React from 'react';
import { Switch, Route } from 'react-router';
import App from './App';
import WalletRoute from '../wallet/WalletRoute';
import Txion from '../txion/Txion';

export default () => (
  <App>
    <Switch>
      <Route exact path="/txion" component={Txion} />
      <Route exact path="/" component={WalletRoute} />
      <Route component={WalletRoute} />
    </Switch>
  </App>
);
