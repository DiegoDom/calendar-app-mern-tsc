import { uiState, UIActionType } from '../interfaces';

const initialState: uiState = {
  modalOpen: false
};



export const uiReducer = (state: uiState = initialState, action: UIActionType): uiState => {

  switch (action.type) {
    case '[UI] - Open modal':
      return {
        ...state,
        modalOpen: true
      }
    case '[UI] - Close close':
      return {
        ...state,
        modalOpen: false
      }
    default:
      return state;
  }


}