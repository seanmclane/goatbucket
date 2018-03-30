import {
  SEND_TRANSACTION_LOADING,
  SEND_TRANSACTION_SUCCESS,
  SEND_TRANSACTION_FAILURE,
  TO_INPUT_CHANGE,
  AMOUNT_INPUT_CHANGE,
} from './TxionActions';

const initialState = {
  to: '',
  amount: 0,
  count: 0,
  transactions: [],
  hasErrored: false,
  isLoading: false,
};

export default function txionReducer(state = initialState, action) {
  switch (action.type) {
    case TO_INPUT_CHANGE:
      return {
        ...state,
        to: action.to,
      };
    case AMOUNT_INPUT_CHANGE:
      return {
        ...state,
        amount: action.amount,
      };
    case SEND_TRANSACTION_SUCCESS:
      return {
        ...state,
        transactions: [
          action.transaction,
          ...state.transactions,
        ],
        count: state.count + 1,
      };
    case SEND_TRANSACTION_FAILURE:
      return {
        ...state,
        hasErrored: action.hasErrored,
      };
    case SEND_TRANSACTION_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
}
