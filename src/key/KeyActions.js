import {buildKeyStore} from '../crypto';
import {startTimer} from '../timer/TimerActions';
import {addNotification} from '../notification/NotificationActions';
import {routerActions} from 'react-router-redux';

import colors from '../styles/colors';

export const CREATE_BUCKET_REQUEST = 'CREATE_BUCKET_REQUEST';
export const CREATE_BUCKET_SUCCESS = 'CREATE_BUCKET_SUCCESS';
export const CREATE_BUCKET_FAILURE = 'CREATE_BUCKET_FAILURE';
export const CREATE_BUCKET_LOADING = 'CREATE_BUCKET_LOADING';

export function createBucketFailure(bool) {
  return {
    type: CREATE_BUCKET_FAILURE,
    hasErrored: bool,
  };
}

export function createBucketSuccess(accountId) {
  return {
    type: CREATE_BUCKET_SUCCESS,
    accountId: accountId,
  };
}

export function createBucketLoading(bool) {
  return {
    type: CREATE_BUCKET_FAILURE,
    isLoading: bool,
  };
}

export function createBucketRequest() {
  let request = buildKeyStore()

  return dispatch => {
    dispatch(createBucketLoading(true));

    request.then(accountId => {
      dispatch(createBucketLoading(false));
      dispatch(createBucketFailure(false));
      dispatch(createBucketSuccess(accountId));
      dispatch(startTimer(accountId));
      dispatch(
        addNotification({
          text: `Bucket created with account id beginning ${accountId.slice(0,15)}`,
        })
      );
      dispatch(routerActions.push('guide'));
    })
    .catch(error => {
      dispatch(createBucketFailure(true));
      dispatch(createBucketLoading(false));
      dispatch(addNotification({
        text: `Bucket creation failed - ${error}`,
        color: `${colors.red}`,
      }))
    })
  }
  
}