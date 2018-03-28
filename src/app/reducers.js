import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import walletReducer from '../wallet/WalletReducers';
import txionReducer from '../txion/TxionReducers';

const rootReducer = combineReducers({
  wallet: walletReducer,
  transactions: txionReducer,
  routing: routerReducer,
});

export default rootReducer;
