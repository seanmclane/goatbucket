import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Routes from './routes';
import {ConnectedRouter} from 'react-router-redux';

export default class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <ConnectedRouter history={this.props.history}>
          <Routes />
        </ConnectedRouter>
      </Provider>
    );
  }
}
