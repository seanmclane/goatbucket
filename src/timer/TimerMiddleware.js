import {START_TIMER} from './TimerActions';
import {updateBalanceRequest, setAccountId} from '../wallet/WalletActions';

const timerMiddleware = store => next => action => {
  if (action.type === START_TIMER) {
    store.dispatch(updateBalanceRequest(action.accountId));
    store.dispatch(setAccountId(action.accountId))
    setInterval(() => {
      //probably the wrong way to do this but it works
      store.dispatch(updateBalanceRequest(action.accountId));
    }, 5000);
  }
  return next(action);
};

export default timerMiddleware;
