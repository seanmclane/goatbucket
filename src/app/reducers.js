import {combineReducers} from 'redux';
import walletReducer from '../wallet/WalletReducers';

const rootReducer = combineReducers({
  wallet: walletReducer,
});

export default rootReducer;
