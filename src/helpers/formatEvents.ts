import moment from 'moment';
import { Event } from '../interfaces';

export const formatEvents = (events: Event[]) => {
  return events.map((e) => ({
    ...e,
    start: moment(e.start).toDate(),
    end: moment(e.end).toDate(),
  }));
};
