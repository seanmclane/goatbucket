import {
  CREATE_BUCKET_REQUEST,
  CREATE_BUCKET_SUCCESS,
  CREATE_BUCKET_FAILURE,
  CREATE_BUCKET_LOADING,
} from './KeyActions';

const initialState = {
  newAccountId: '',
  hasErrored: false,
  isLoading: false,
};

export default function keyReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_BUCKET_SUCCESS:
      return {
        ...state,
        newAccountId: action.accountId,
      };
    case CREATE_BUCKET_FAILURE:
      return {
        ...state,
        hasErrored: action.hasErrored,
      };
    case CREATE_BUCKET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
}
