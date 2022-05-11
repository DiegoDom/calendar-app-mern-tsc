import moment from 'moment';
import { calendarAction, calendarActionType, calendarState } from '../interfaces/calendar-interfaces';

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

export const calendarReducer = (state: calendarState = initialState, action: calendarAction) => {

  switch (action.type) {
    case calendarActionType.EVENTADD:
      return {
        ...state,
        events: [
          ...state.events,
          action.payload
        ]
      }
    case calendarActionType.EVENTSETACTIVE:
      return {
        ...state,
        activeEvent: action.payload
      }
    case calendarActionType.EVENTCLEARACTIVE:
      return {
        ...state,
        activeEvent: null
      }
    case calendarActionType.EVENTUPDATE:
      return {
        ...state,
        events: state.events.map(
          e => (e.id === action.payload.id) ? action.payload : e
        )
      }
      case calendarActionType.EVENTDELETE:
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