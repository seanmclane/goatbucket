import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import timerMiddleware from '../timer/TimerMiddleware'

const store = createStore(rootReducer, applyMiddleware(thunk, timerMiddleware));

export default store;
