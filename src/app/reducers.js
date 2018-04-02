import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import walletReducer from '../wallet/WalletReducers';
import txionReducer from '../txion/TxionReducers';
import notificationReducer from '../notification/NotificationReducers';
import keyReducer from '../key/KeyReducers';

const rootReducer = combineReducers({
  wallet: walletReducer,
  transactions: txionReducer,
  notifications: notificationReducer,
  key: keyReducer,
  routing: routerReducer,
});

export default rootReducer;
