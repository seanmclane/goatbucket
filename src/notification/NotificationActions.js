import createNotification from './NotificationFactory';

export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';

export function addNotification(options) {
  let notification = createNotification(options);
  setTimeout(() => {
    store.dispatch(removeNotification(notification.id));
  }, 6000);
  return {
    type: ADD_NOTIFICATION,
    payload: notification,
  };
}

export function removeNotification(id) {
  return {
    type: REMOVE_NOTIFICATION,
    id: id,
  };
}
