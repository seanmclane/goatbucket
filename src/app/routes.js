import React from 'react';
import { Switch, Route } from 'react-router';
import App from './App';
import WalletRoute from '../wallet/WalletRoute';
import TxionRoute from '../txion/TxionRoute';

export default () => (
  <App>
    <Switch>
      <Route exact path="/txion" component={TxionRoute} />
      <Route exact path="/" component={WalletRoute} />
      <Route component={WalletRoute} />
    </Switch>
  </App>
);
