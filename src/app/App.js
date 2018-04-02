import * as React from 'react';
import {accountId} from '../utils/config';
import {startTimer} from '../timer/TimerActions';

import combinedStyles from '../styles';

import Header from './Header';
import Notifications from '../notification/Notifications';

type Props = {
  children: React.Node
};

export default class App extends React.Component<Props> {
  props: Props;

  componentDidMount() {
    if (accountId !== ''){
      store.dispatch(startTimer(accountId));
    }
    console.log(accountId);
  }

  render() {
    return (
      <div {...combinedStyles}>
        <Header />
        {this.props.children}
        <Notifications />
      </div>
    );
  }
}