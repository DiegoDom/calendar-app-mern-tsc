import { UIActionType } from '../interfaces';

export const uiOpenModal = (): UIActionType => ({ type: '[UI] - Open modal' });
export const uiCloseModal = (): UIActionType => ({ type: '[UI] - Close close' });