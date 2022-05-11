import { uiState, uiAction, uiActionType } from '../interfaces/ui-reducer-interfaces';

const initialState: uiState = {
  modalOpen: false
};

export const uiReducer = (state: uiState = initialState, action: uiAction) => {

  switch (action.type) {
    case uiActionType.OPENMODAL:
      return {
        ...state,
        modalOpen: true
      }
    case uiActionType.CLOSEMODAL:
      return {
        ...state,
        modalOpen: false
      }
    default:
      return state;
  }


}