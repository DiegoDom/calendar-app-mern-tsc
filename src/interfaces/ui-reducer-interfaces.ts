export type uiAction = { type: "uiOpenModal" } | { type: "uiCloseModal" };

export interface uiState {
  modalOpen: boolean;
};

export interface uiActions {
  uiOpenModal: () => { type: uiAction; }
  uiCloseModal: () => { type: uiAction; }
}