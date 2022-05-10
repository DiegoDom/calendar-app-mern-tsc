import { Event } from "../interfaces/calendar-interfaces";

export const calendarAddNew = (event: Event) => ({
  type: 'eventAdd',
  payload: event
});

export const calendarSetActive = (event: Event) => ({
  type: 'eventSetActive',
  payload: event
});
