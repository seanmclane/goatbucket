import {combineReducers} from 'redux';
import walletReducer from '../wallet/WalletReducers';
import timerReducer from '../timer/TimerReducer';

const rootReducer = combineReducers({
  wallet: walletReducer,
  timer: timerReducer,
});

export default rootReducer;
