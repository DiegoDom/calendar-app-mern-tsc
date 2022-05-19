import { calendarActionType, calendarState } from '../interfaces';

const initialState: calendarState = {
  events: [],
  activeEvent: null,
};

export const calendarReducer = (
  state: calendarState = initialState,
  action: calendarActionType
): calendarState => {
  switch (action.type) {
    case '[EVENT] add new':
      return {
        ...state,
        events: [...state.events, action.payload],
      };
    case '[EVENT] set active':
      return {
        ...state,
        activeEvent: action.payload,
      };
    case '[EVENT] clear active':
      return {
        ...state,
        activeEvent: null,
      };
    case '[EVENT] update':
      return {
        ...state,
        events: state.events.map((e) =>
          e.id === action.payload.id ? action.payload : e
        ),
      };
    case '[EVENT] delete':
      return {
        ...state,
        events: state.events.filter((e) => e.id !== state.activeEvent?.id),
        activeEvent: null,
      };
    case '[EVENT] list loaded':
      return {
        ...state,
        events: [...action.payload],
      };
    case '[EVENT] clear logout':
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
