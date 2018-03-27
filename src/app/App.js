import React, {Component} from 'react';
import {hot} from 'react-hot-loader';
import store from './AppStore';

import {css, style} from 'glamor';
import combinedStyles from '../styles';

import Wallet from '../wallet/Wallet';
import Header from './Header';
import {startTimer} from '../timer/TimerActions';

import os from 'os';
import fs from 'fs';
import path from 'path';

const filePath = os.homedir() + '/.goatnickels/config.json';

const config = require(filePath);
const accountId = config.account;

class App extends Component {
  componentDidMount() {
    store.dispatch(startTimer(accountId));
  }

  render() {
    return (
      <div {...combinedStyles}>
        <Header />
        <Wallet store={store} />
      </div>
    );
  }
}

export default hot(module)(App);
