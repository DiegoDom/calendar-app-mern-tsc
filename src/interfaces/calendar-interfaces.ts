export interface Event {
  id: number;
  bgcolor?: string;
  end: Date;
  start: Date;
  title: string;
  user: User;
  notes?: string;
}

export interface User {
  _id: string;
  name: string;
}

export interface calendarFormValues {
  title: string;
  start: Date;
  end: Date;
  notes?: string;
}

export interface calendarState {
  events: Event[];
  activeEvent?: Event | null;
}

export enum calendarActionType {
  EVENTSETACTIVE = "[calendar] Event set active",
  EVENTADD = "[calendar] Event add",
  EVENTCLEARACTIVE = "[calendar] Event clear active",
  EVENTUPDATE = '[calendar] Event update',
  EVENTDELETE = '[calendar] Event delete'
}

export interface addEventAction {
  type: calendarActionType.EVENTADD;
  payload: Event;
}

export interface updateEventAction {
  type: calendarActionType.EVENTUPDATE;
  payload: Event;
}

export interface setActiveEventAction {
  type: calendarActionType.EVENTSETACTIVE;
  payload: Event;
}

export interface clearActiveEventAction {
  type: calendarActionType.EVENTCLEARACTIVE;
}

export interface deleteEventAction {
  type: calendarActionType.EVENTDELETE;
}

export type calendarAction =
  | addEventAction
  | setActiveEventAction
  | clearActiveEventAction
  | updateEventAction
  | deleteEventAction;
