import {ADD_NOTIFICATION, REMOVE_NOTIFICATION} from './NotificationActions';

export default function notificationReducer(state = [], action) {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return [action.payload, ...state];
    case REMOVE_NOTIFICATION:
      return state.filter(notification => notification.id !== action.id);
    default:
      return state;
  }
}