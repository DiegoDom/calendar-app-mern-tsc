import { useEffect, useState } from 'react';
import { Calendar, momentLocalizer, View } from 'react-big-calendar';
import { Event } from '../../interfaces/calendar-interfaces';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { Navbar } from '../ui/Navbar';
import { messages } from '../../helpers';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';

import { AppDispatch, RootState } from '../../store/store';
import { AddNewFab } from '../ui/AddNewFab';
import { DeleteEventFab } from '../ui/DeleteEventFab';
import { uiOpenModal } from '../../actions/ui';
import {
  calendarClearActive,
  calendarGetevents,
  calendarSetActive,
} from '../../actions/calendar';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es-mx';

moment.locale('es-mx');

const localizer = momentLocalizer(moment);

export const CalendarScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    calendar: { events, activeEvent },
    auth: { _id },
  } = useSelector((state: RootState) => state);

  const [lastView, setLastView] = useState<View>(
    (localStorage.getItem('lastView') as View) || 'month'
  );

  useEffect(() => {
    dispatch(calendarGetevents());
  }, [dispatch]);

  const onDoubleClick = (e: Event) => {
    dispatch(uiOpenModal());
  };

  const onSelectEvent = (e: Event) => {
    dispatch(calendarSetActive(e));
  };

  const onViewChange = (e: View) => {
    setLastView(e);
    localStorage.setItem('lastView', e);
  };

  const onSelectSlot = () => {
    dispatch(calendarClearActive());
  };

  const eventStyleGetter = (event: Event) => {
    const style = {
      backgroundColor: _id === event.user?._id ? '#5C62C5' : '#c5c5c5',
      borderRadius: '0px',
      color: 'white',
      display: 'block',
      opacity: 0.8,
    };

    return {
      style,
    };
  };

  return (
    <div className="calendar-screen">
      <Navbar />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
        eventPropGetter={eventStyleGetter}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onView={onViewChange}
        onSelectSlot={onSelectSlot}
        selectable
        view={lastView}
        components={{
          event: CalendarEvent,
        }}
      />
      {activeEvent && <DeleteEventFab />}
      <AddNewFab />
      <CalendarModal />
    </div>
  );
};
