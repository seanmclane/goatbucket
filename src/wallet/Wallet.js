import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {updateBalanceRequest} from './WalletActions';

//TODO: load this from local keystore
const accountId =
  'goat_04dbb67ae9650ca3258071909f74be5400fe53fc2e5dcc82103020f3aeefeee5f9980c4c05bb8696215458dfa7ddaa1505d2826cab3d246b8930b0694f766a22f8bb63932368c0b12bf80cfaee8a18db1d7ce19df0a84215d20b0bbfbd30d95c25';

function Wallet(props) {
  return (
    <div>
      <h3>Balance:</h3>
      <p>{props.wallet.balance / 100000000}</p>
      <p>{props.wallet.hasErrored ? "true" : "false"}</p>
      <p>{props.timer.time}</p>
      <button onClick={() => props.updateBalanceRequest(accountId)}>Update</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {wallet: state.wallet, timer: state.timer};
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
