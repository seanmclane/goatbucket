import {TICK} from './TimerActions';

export default function timerReducer(state = {}, action) {
  switch (action.type) {
    case TICK:
      return {
        ...state,
        time: action.currentTime,
      };
    default:
      return state;
  }
}
