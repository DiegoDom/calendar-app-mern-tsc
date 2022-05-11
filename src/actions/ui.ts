import { uiActionType } from '../interfaces/ui-reducer-interfaces';

export const uiOpenModal = () => ({ type: uiActionType.OPENMODAL });
export const uiCloseModal = () => ({ type: uiActionType.CLOSEMODAL });