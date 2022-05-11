import { addEventAction, calendarActionType, clearActiveEventAction, Event, setActiveEventAction, updateEventAction, deleteEventAction } from '../interfaces/calendar-interfaces';

export const calendarAddNew = (event: Event): addEventAction => ({
  type: calendarActionType.EVENTADD,
  payload: event
});

export const calendarSetActive = (event: Event): setActiveEventAction => ({
  type: calendarActionType.EVENTSETACTIVE,
  payload: event
});

export const calendarClearActive = (): clearActiveEventAction => ({
  type: calendarActionType.EVENTCLEARACTIVE
});

export const calendarUpdatedEvent = (event: Event): updateEventAction => ({
  type: calendarActionType.EVENTUPDATE,
  payload: event
});


export const calendarDeleteEvent = (): deleteEventAction => ({
  type: calendarActionType.EVENTDELETE
});
