export interface uiState {
  modalOpen: boolean;
};

export enum uiActionType {
  OPENMODAL = '[ui] Open modal',
  CLOSEMODAL = '[ui] Close modal'
}

export interface uiAction {
  type: uiActionType.OPENMODAL | uiActionType.CLOSEMODAL;
}
