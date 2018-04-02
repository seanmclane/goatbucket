import React from 'react';
import {connect} from 'react-redux';
import {createBucketRequest} from './KeyActions';

import {centerStyle, greenButton} from '../styles';

function Key(props) {
  return (
    <div {...centerStyle}>
      <h1>Welcome to GoatBucket</h1>
      <h2>Let's make you a bucket to keep your GoatNickels in.</h2>
      <button 
        {...greenButton}
        onClick={() => store.dispatch(createBucketRequest())}>
        Create Bucket
      </button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    wallet: state.wallet,
    transactions: state.transactions,
  };
}

export default connect(mapStateToProps)(Key);