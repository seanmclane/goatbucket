import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createHashHistory';
import {routerMiddleware} from 'react-router-redux';
import rootReducer from './reducers';
import timerMiddleware from '../timer/TimerMiddleware';

export const history = createHistory();

export function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(thunk, timerMiddleware, routerMiddleware(history)));

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(require('./reducers').default);
    });
  }

  return store;
}
