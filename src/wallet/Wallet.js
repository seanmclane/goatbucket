import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import {updateBalanceRequest} from './WalletActions';
import {css} from 'glamor';
import {centerStyle, errorStyle, greenButton, blueButton} from '../styles';

let balanceStyle = css({
  fontSize: '50px',
});

let accountStyle = css({
  maxWidth: '700px',
  wordWrap: 'break-word',
  fontWeight: '400',
});

function Wallet(props) {
  return (
    <div {...centerStyle}>
      <h1>Your Wallet</h1>
      <h1 {...balanceStyle} className={props.wallet.hasErrored ? errorStyle : ''}>{props.wallet.isLoading ? "loading..." : props.wallet.balance / 100000000 + ' '}<span style={{fontSize: '28px'}}>{`\ud83d\udc10`}</span></h1>
      <p {...errorStyle}>{props.wallet.hasErrored ? 'Unable to sync balance or inital account deposit not made' : ''}</p>
      <h3>Account</h3>
      <h4 className={accountStyle}>{props.wallet.accountId}</h4>
      <button className={greenButton} onClick={() => props.updateBalanceRequest(props.wallet.accountId)}>
        Refresh Balance
      </button>
      <button className={blueButton} onClick={() => store.dispatch(push('/txion'))}>
        Send GoatNickels
      </button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    wallet: state.wallet
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      updateBalanceRequest,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
