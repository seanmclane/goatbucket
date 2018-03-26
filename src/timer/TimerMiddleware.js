import {START_TIMER, TICK} from './TimerActions';
import {updateBalanceRequest} from '../wallet/WalletActions';

const accountId =
  'goat_04dbb67ae9650ca3258071909f74be5400fe53fc2e5dcc82103020f3aeefeee5f9980c4c05bb8696215458dfa7ddaa1505d2826cab3d246b8930b0694f766a22f8bb63932368c0b12bf80cfaee8a18db1d7ce19df0a84215d20b0bbfbd30d95c25';

const timerMiddleware = store => next => action => {
  if (action.type === START_TIMER) {
    setInterval(() => {
      //probably the wrong way to do this but it works
      store.dispatch(updateBalanceRequest(accountId));
      store.dispatch({type: TICK, currentTime: Date.now()});
    }, 1000);
  }
  return next(action);
};

export default timerMiddleware;
