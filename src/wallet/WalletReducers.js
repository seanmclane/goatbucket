import {UPDATE_BALANCE_SUCCESS, UPDATE_BALANCE_FAILURE, UPDATE_BALANCE_LOADING, SET_ACCOUNT_ID} from './WalletActions';

const initialState = {
  accountId: '',
  balance: 0,
  hasErrored: false,
  isLoading: false,
};

export default function walletReducer(walletState = initialState, action) {
  switch (action.type) {
    case SET_ACCOUNT_ID:
      return {
        ...walletState,
        accountId: action.accountId
      }
    case UPDATE_BALANCE_SUCCESS:
      return {
        ...walletState,
        balance: action.wallet.balance
      };
    case UPDATE_BALANCE_FAILURE:
      return {
        ...walletState,
        hasErrored: action.hasErrored
      };
    case UPDATE_BALANCE_LOADING:
      return {
        ...walletState,
        isLoading: action.isLoading
      };
    default:
      return walletState;
  }
}
