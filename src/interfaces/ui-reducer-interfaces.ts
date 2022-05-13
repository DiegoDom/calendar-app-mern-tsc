export interface uiState {
  modalOpen: boolean;
};

export type UIActionType =
  | { type: '[UI] - Open modal' }
  | { type: '[UI] - Close close' };
