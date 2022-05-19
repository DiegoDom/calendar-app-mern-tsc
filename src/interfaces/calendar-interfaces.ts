export interface Event {
  id?: number;
  bgcolor?: string;
  end: Date;
  start: Date;
  title: string;
  user?: User;
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
  | { type: '[EVENT] set active', payload: Event }
  | { type: '[EVENT] start add new', payload: Event}
  | { type: '[EVENT] add new', payload: Event}
  | { type: '[EVENT] update', payload: Event }
  | { type: '[EVENT] clear active' }
  | { type: '[EVENT] clear logout' }
  | { type: '[EVENT] delete' }
  | { type: '[EVENT] list loaded', payload: Event[]};
