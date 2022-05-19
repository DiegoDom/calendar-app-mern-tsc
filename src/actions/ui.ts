import { UIActionType } from '../interfaces';

export const uiOpenModal = (): UIActionType => ({ type: '[UI] open modal' });
export const uiCloseModal = (): UIActionType => ({ type: '[UI] close modal' });