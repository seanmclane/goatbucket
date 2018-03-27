import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import walletReducer from '../wallet/WalletReducers';

const rootReducer = combineReducers({
  wallet: walletReducer,
  routing: routerReducer,
});

export default rootReducer;
