import { authActionType, authState } from '../interfaces';

const initialState: authState = {
  checking: true
};

export const authReducer = (
  state: authState = initialState,
  action: authActionType
): authState => {
  switch (action.type) {
    case '[AUTH] login':
      return {
        ...state,
        ...action.payload,
        checking: false,
      };
    case '[AUTH] checking finish':
      return {
        ...state,
        checking: false,
      };
    case '[AUTH] logout':
      return {
        checking: false
      }
    default:
      return state;
  }
};
