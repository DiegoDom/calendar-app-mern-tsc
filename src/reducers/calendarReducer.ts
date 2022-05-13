import moment from 'moment';
import { calendarActionType, calendarState } from '../interfaces';

const initialState: calendarState = {
  events: [
    {
      id: new Date().getTime(),
      title: 'Boss birthday',
      start: moment().toDate(),
      end: moment().add(2,'hours').toDate(),
      bgcolor: '#5C62C5',
      user: {
        _id: '123',
        name: 'DiegoDom'
      }
    }
  ],
  activeEvent: null
};

export const calendarReducer = (state: calendarState = initialState, action: calendarActionType): calendarState => {

  switch (action.type) {
    case '[EVENT] Event add':
      return {
        ...state,
        events: [
          ...state.events,
          action.payload
        ]
      }
    case '[EVENT] Event set active':
      return {
        ...state,
        activeEvent: action.payload
      }
    case '[EVENT] Event clear active':
      return {
        ...state,
        activeEvent: null
      }
    case '[EVENT] Event update':
      return {
        ...state,
        events: state.events.map(
          e => (e.id === action.payload.id) ? action.payload : e
        )
      }
      case '[EVENT] Event delete':
        return {
          ...state,
          events: state.events.filter(
            e => (e.id !== state.activeEvent?.id)
          ),
          activeEvent: null
        }
    default:
      return state;
  }

}