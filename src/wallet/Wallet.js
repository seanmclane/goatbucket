import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {updateBalanceRequest} from './WalletActions';
import {css} from 'glamor';
import {centerStyle, errorStyle, greenButton, blueButton} from '../styles';

let balanceStyle = css({
  fontSize: '50px',
});

let accountStyle = css({
  maxWidth: '600px',
  wordWrap: 'break-word',
  fontWeight: '400',
});

function Wallet(props) {
  return (
    <div {...centerStyle}>
      <h2>Your Account</h2>
      <h1 {...balanceStyle} className={props.wallet.hasErrored ? errorStyle : ''}>{props.wallet.balance / 100000000}</h1>
      <p {...errorStyle}>{props.wallet.hasErrored ? 'Error retrieving balance' : ''}</p>
      <h4 className={accountStyle}>{props.wallet.accountId}</h4>
      <button className={greenButton} onClick={() => props.updateBalanceRequest(props.wallet.accountId)}>
        Update Balance
      </button>
      <button className={blueButton}>
        Send GoatNickels
      </button>
    </div>
  );
}

function mapStateToProps(state) {
  return {wallet: state.wallet};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      updateBalanceRequest: updateBalanceRequest,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
