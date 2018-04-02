import React from 'react';
import {Switch, Route} from 'react-router';
import App from './App';
import WalletRoute from '../wallet/WalletRoute';
import TxionRoute from '../txion/TxionRoute';
import KeyRoute from '../key/KeyRoute';
import GuideRoute from '../guide/GuideRoute';

import {readKey} from '../utils/keystore';
import {readConfig} from '../utils/config';

let defaultRoute;

try {
  readKey();
  readConfig();
  defaultRoute = WalletRoute;
} catch (e) {
  console.log(e);
  defaultRoute = KeyRoute;
}

export default () => (
  <App>
    <Switch>
      <Route exact path="/txion" component={TxionRoute} />
      <Route exact path="/wallet" component={WalletRoute} />
      <Route exact path="/guide" component={GuideRoute} />
      <Route component={defaultRoute} />
    </Switch>
  </App>
);
