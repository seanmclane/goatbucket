import axios from 'axios';
import {node} from '../utils/config';
import {addNotification} from '../notification/NotificationActions';

import colors from '../styles/colors';

export const SEND_TRANSACTION_REQUEST = 'SEND_TRANSACTION_REQUEST';
export const SEND_TRANSACTION_LOADING = 'SEND_TRANSACTION_LOADING';
export const SEND_TRANSACTION_SUCCESS = 'SEND_TRANSACTION_SUCCESS';
export const SEND_TRANSACTION_FAILURE = 'SEND_TRANSACTION_FAILURE';
export const TO_INPUT_CHANGE = 'TO_INPUT_CHANGE';
export const AMOUNT_INPUT_CHANGE = 'AMOUNT_INPUT_CHANGE';

export function sendTransactionFailure(bool) {
  return {
    type: SEND_TRANSACTION_FAILURE,
    hasErrored: bool,
  };
}

export function sendTransactionLoading(bool) {
  return {
    type: SEND_TRANSACTION_LOADING,
    isLoading: bool,
  };
}
export function sendTransactionSuccess(txion) {
  return {
    type: SEND_TRANSACTION_SUCCESS,
    transaction: txion,
  };
}

export function handleToInputChange(to) {
  return {
    type: TO_INPUT_CHANGE,
    to,
  };
}

export function handleAmountInputChange(amount) {
  return {
    type: AMOUNT_INPUT_CHANGE,
    amount,
  };
}

export function sendTransactionRequest(txion) {
  const request = axios.post('http://' + node + ':3000/api/v1/txion', txion);

  return dispatch => {
    dispatch(sendTransactionLoading(true));

    request
      .then(response => {
        if (response.status != '201') {
          throw Error(response.statusText);
        }
        dispatch(sendTransactionLoading(false));
        dispatch(sendTransactionFailure(false));

        return response;
      })
      .then(({data}) => {
        console.log(data);
        dispatch(sendTransactionSuccess(txion));
        dispatch(
          addNotification({
            text: `Transaction #${txion.sequence} submitted successfully for ${txion.amount/100000000} GoatNickels`,
          })
        );
      })
      .catch(error => {
        dispatch(sendTransactionFailure(true));
        dispatch(sendTransactionLoading(false));
        dispatch(
          addNotification({
            text: `Transaction #${txion.sequence} failed for ${txion.amount/100000000} GoatNickels`,
            color: `${colors.red}`,
          })
        );
      });
  };
}
