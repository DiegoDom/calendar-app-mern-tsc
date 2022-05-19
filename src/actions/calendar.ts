import { Dispatch } from 'redux';
import { calendarActionType, Event } from '../interfaces';
import Swal from 'sweetalert2';
import { RootState } from '../store/store';
import { formatEvents, fetchConToken } from '../helpers';

export const calendarStartAddNew = (event: Event) => {
  return async (
    disapath: Dispatch<calendarActionType>,
    getState: () => RootState
  ) => {
    const { _id, name } = getState().auth;

    try {
      const resp = await fetchConToken('events', event, 'POST');
      const body = await resp.json();

      if (body.ok) {
        event.id = body.data.id;
        event.user = {
          _id: _id as string,
          name: name as string,
        };
        disapath(calendarAddNew(event));
      } else {
        Swal.fire('Error', body.msg, 'error');
      }
    } catch (error) {
      console.log(error);
      Swal.fire('Error', 'Ocurrio un error inesperado', 'error');
    }
  };
};

const calendarAddNew = (event: Event): calendarActionType => ({
  type: '[EVENT] add new',
  payload: event,
});

export const calendarStartUpdate = (event: Event) => {
  return async (disapath: Dispatch<calendarActionType>) => {
    try {
      const resp = await fetchConToken(`events/${event.id}`, event, 'PUT');
      const body = await resp.json();

      if (body.ok) {
        disapath(calendarUpdatedEvent(event));
      } else {
        Swal.fire('Error', body.msg, 'error');
      }
    } catch (error) {
      console.log(error);
      Swal.fire('Error', 'Ocurrio un error inesperado', 'error');
    }
  };
};

const calendarUpdatedEvent = (event: Event): calendarActionType => ({
  type: '[EVENT] update',
  payload: event,
});

export const calendarSetActive = (event: Event): calendarActionType => ({
  type: '[EVENT] set active',
  payload: event,
});

export const calendarClearActive = (): calendarActionType => ({
  type: '[EVENT] clear active',
});

export const calendarStartEventDelete = () => {
  return async (
    disapath: Dispatch<calendarActionType>,
    getState: () => RootState
  ) => {
    const { activeEvent } = getState().calendar;
    try {
      const resp = await fetchConToken(
        `events/${activeEvent?.id}`,
        {},
        'DELETE'
      );
      const body = await resp.json();

      if (body.ok) {
        disapath(calendarDeleteEvent());
      } else {
        Swal.fire('Error', body.msg, 'error');
      }
    } catch (error) {
      console.log(error);
      Swal.fire('Error', 'Ocurrio un error inesperado', 'error');
    }
  };
};

const calendarDeleteEvent = (): calendarActionType => ({
  type: '[EVENT] delete',
});

export const calendarGetevents = () => {
  return async (disapath: Dispatch<calendarActionType>) => {
    try {
      const resp = await fetchConToken('events');
      const body = await resp.json();

      if (body.ok) {
        const events = formatEvents(body.data);
        disapath(eventsListLoaded(events));
      } else {
        Swal.fire('Error', body.msg, 'error');
      }
    } catch (error) {
      console.log(error);
      Swal.fire('Error', 'Ocurrio un error inesperado', 'error');
    }
  };
};

const eventsListLoaded = (events: Event[]): calendarActionType => ({
  type: '[EVENT] list loaded',
  payload: events,
});

export const calendarCleanLogout = (): calendarActionType => ({
  type: '[EVENT] clear logout',
});
