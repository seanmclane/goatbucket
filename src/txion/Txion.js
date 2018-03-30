import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {css} from 'glamor';

import {centerStyle, errorStyle, successStyle, greenButton} from '../styles';
import {sendTransactionRequest, handleToInputChange, handleAmountInputChange} from './TxionActions';
import {addNotification} from '../notification/NotificationActions';
import {signTransaction} from '../crypto';

let fieldStyle = css({
  border: 'none',
  textAlign: 'center',
});

let inputStyle = css({
  display: 'block',
  minWidth: '500px',
  fontSize: '16px',
  padding: '10px',
  margin: '20px 0px',
  border: 'none',
  borderRadius: '5px',
  WebkitAppRegion: 'no-drag',
});

class Txion extends Component{

  componentWillUnmount(){
    store.dispatch(handleToInputChange(''));
    store.dispatch(handleAmountInputChange(0));
  }

  render() {
    let props = this.props;

    return (
      <div {...centerStyle}>
        <h1>Send GoatNickels</h1>
        <h1 className={props.wallet.hasErrored ? errorStyle : ''}>{props.wallet.isLoading ? "loading..." : props.wallet.balance / 100000000}</h1>
        <fieldset {...fieldStyle}>
          <input 
            {...inputStyle} 
            placeholder="To" 
            type="text" 
            ame="to" 
            id="to"
            onChange={(event) => store.dispatch(handleToInputChange(event.target.value))}
          />
          <input 
            {...inputStyle}
            placeholder="Amount" 
            type="number" 
            name="amount" 
            id="amount"
            onChange={(event) => store.dispatch(handleAmountInputChange(Number(event.target.value)))} 
          />
        </fieldset>
        <button
          className={greenButton}
          onClick={() =>
            handleTransactionRequest({
              from: props.wallet.accountId,
              to: props.transactions.to,
              amount: props.transactions.amount * 100000000,
              sequence: props.wallet.sequence + 1,
            })
          }
        >
          Send
        </button>
      </div>
    );
  }
}

function handleTransactionRequest(payload) {
  let sig = signTransaction(payload);

  let txion = {
    from: payload.from,
    to: payload.to,
    amount: payload.amount,
    sequence: payload.sequence,
    r: sig.r,
    s: sig.s,
  };

  console.log(txion);
  store.dispatch(sendTransactionRequest(txion));
}

function mapStateToProps(state) {
  return {
    wallet: state.wallet,
    transactions: state.transactions,
  };
}

export default connect(mapStateToProps)(Txion);
