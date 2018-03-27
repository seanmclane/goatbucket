import axios from 'axios';

export const UPDATE_BALANCE_REQUEST = 'UPDATE_BALANCE_REQUEST';
export const UPDATE_BALANCE_LOADING = 'UPDATE_BALANCE_LOADING';
export const UPDATE_BALANCE_SUCCESS = 'UPDATE_BALANCE_SUCCESS';
export const UPDATE_BALANCE_FAILURE = 'UPDATE_BALANCE_FAILURE';
export const SET_ACCOUNT_ID = 'SET_ACCOUNT_ID';

export function updateBalanceFailure(bool) {
  return {
    type: UPDATE_BALANCE_FAILURE,
    hasErrored: bool,
  };
}

export function updateBalanceLoading(bool) {
  return {
    type: UPDATE_BALANCE_LOADING,
    isLoading: bool,
  };
}
export function updateBalanceSuccess(wallet) {
  return {
    type: UPDATE_BALANCE_SUCCESS,
    wallet,
  };
}

export function setAccountId(accountId) {
  return {
    type: SET_ACCOUNT_ID,
    accountId
  }
}

export function updateBalanceRequest(accountId) {
  const request = axios.get('http://localhost:3000/api/v1/acct/' + accountId);

  return dispatch => {
    dispatch(updateBalanceLoading(true));

    request
      .then(response => {
        if (response.status != '200') {
          throw Error(response.statusText);
        }
        dispatch(updateBalanceLoading(false));
        dispatch(updateBalanceFailure(false));

        return response;
      })
      .then(({data}) => {
        dispatch(updateBalanceSuccess(data));
      })
      .catch(error => {
        dispatch(updateBalanceFailure(true));
        dispatch(updateBalanceLoading(false));
      });
  };
}
