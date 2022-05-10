import { uiState, uiAction } from '../interfaces/ui-reducer-interfaces';

const initialState: uiState = {
  modalOpen: false
};

export const uiReducer = (state = initialState, action: uiAction) => {

  switch (action.type) {
    case 'uiOpenModal':
      return {
        ...state,
        modalOpen: true
      }
    case 'uiCloseModal':
      return {
        ...state,
        modalOpen: false
      }
    default:
      return state;
  }


}