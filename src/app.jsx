import React, {Component} from 'react';
import {hot} from 'react-hot-loader';

class App extends Component {
  render() {
    return (
      <div>
        <h1>GoatBucket</h1>
        <h2>The GoatNickels Wallet</h2>
      </div>
    );
  }
}

export default hot(module)(App);
