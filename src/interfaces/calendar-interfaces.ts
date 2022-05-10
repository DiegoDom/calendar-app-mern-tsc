export interface Event {
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
};

export interface calendarState {
  events: Event[],
  activeEvent?: Event | null
};

export type calendarAction = { type: "eventSetActive" } | { type: "eventAdd" };

export const types = {
  eventSetActive: '[calendar] Set active',
  eventAdd: '[calendar] Add new',
}
