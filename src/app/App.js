import React, {Component} from 'react';
import {hot} from 'react-hot-loader';
import store from './AppStore';

import {css, style} from 'glamor';
import combinedStyles from '../styles'

import Wallet from '../wallet/Wallet';
import {startTimer} from '../timer/TimerActions';

class App extends Component {
  componentDidMount() {
    store.dispatch(startTimer());
  }

  render() {
    return (
      <div {...combinedStyles} >
        <Wallet store={store} />
      </div>
    );
  }
}

export default hot(module)(App);
