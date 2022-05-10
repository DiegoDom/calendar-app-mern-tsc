import moment from 'moment';
import { calendarState } from '../interfaces/calendar-interfaces';

const initialState: calendarState = {
  events: [
    {
      title: 'Boss birthday',
      start: moment().toDate(),
      end: moment().add(2,'hours').toDate(),
      user: {
        _id: '123',
        name: 'DiegoDom'
      }
    }
  ],
  activeEvent: null
};

export const calendarReducer = (state = initialState, action: any) => {

  switch (action.type) {
    case 'eventSetActive':
      return {
        ...state,
        activeEvent: action.payload
      }
    default:
      return state;
  }

}