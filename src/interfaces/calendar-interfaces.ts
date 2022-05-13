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

export type calendarActionType =
  | { type: '[EVENT] Event add', payload: Event}
  | { type: '[EVENT] Event update', payload: Event }
  | { type: '[EVENT] Event set active', payload: Event }
  | { type: '[EVENT] Event clear active' }
  | { type: '[EVENT] Event delete' };
