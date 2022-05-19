export interface uiState {
  modalOpen: boolean;
};

export type UIActionType =
  | { type: '[UI] open modal' }
  | { type: '[UI] close modal' };
