import React, {Component} from 'react';
import {hot} from 'react-hot-loader';
import store from './AppStore'
import Wallet from '../wallet/Wallet';
import {startTimer} from '../timer/TimerActions'

class App extends Component {
  componentDidMount(){
    store.dispatch(startTimer())
  }

  render() {
    return (
      <div>
        <h1>GoatBucket</h1>
        <h2>The GoatNickels Wallet</h2>
        <Wallet store={store} />
      </div>
    );
  }
}

export default hot(module)(App);
