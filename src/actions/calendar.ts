import { calendarActionType, Event } from '../interfaces';

export const calendarAddNew = (event: Event): calendarActionType => ({
  type: '[EVENT] Event add',
  payload: event
});

export const calendarSetActive = (event: Event): calendarActionType => ({
  type: '[EVENT] Event set active',
  payload: event
});

export const calendarClearActive = (): calendarActionType => ({
  type: '[EVENT] Event clear active'
});

export const calendarUpdatedEvent = (event: Event): calendarActionType => ({
  type: '[EVENT] Event update',
  payload: event
});


export const calendarDeleteEvent = (): calendarActionType => ({
  type: '[EVENT] Event delete'
});
