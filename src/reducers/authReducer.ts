import { authActionType, authState } from '../interfaces';

const initialState: authState = {
  checking: true,
  /* _id: null,
  name: null, */
};

export const authReducer = (
  state: authState = initialState,
  action: authActionType
): authState => {
  switch (action.type) {
    case '[AUTH] Auth login':
      return {
        ...state,
        ...action.payload,
        checking: false,
      };
    case '[AUTH] Auth checking finish':
      return {
        ...state,
        checking: false,
      };
    case '[AUTH] Auth logout':
      return {
        checking: false
      }
    default:
      return state;
  }
};
