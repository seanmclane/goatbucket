import {UPDATE_BALANCE_SUCCESS, UPDATE_BALANCE_FAILURE, UPDATE_BALANCE_LOADING, SET_ACCOUNT_ID} from './WalletActions';

const initialState = {
  accountId: '',
  balance: 0,
  sequence: 0,
  hasErrored: false,
  isLoading: false,
};

export default function walletReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ACCOUNT_ID:
      return {
        ...state,
        accountId: action.accountId,
      };
    case UPDATE_BALANCE_SUCCESS:
      return {
        ...state,
        balance: action.wallet.balance,
        sequence: action.wallet.sequence,
      };
    case UPDATE_BALANCE_FAILURE:
      return {
        ...state,
        hasErrored: action.hasErrored,
      };
    case UPDATE_BALANCE_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
}
