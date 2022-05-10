import { useState } from 'react';
import { Calendar, momentLocalizer, View } from 'react-big-calendar';
import { Event } from '../../interfaces/calendar-interfaces';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import { Navbar } from '../ui/Navbar';
import { messages } from '../../helpers/calendar-messages-es';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';

import { uiOpenModal } from '../../actions/ui';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es-mx';
import { calendarSetActive } from '../../actions/calendar';
import { AddNewFab } from '../ui/AddNewFab';

moment.locale('es-mx');

const localizer = momentLocalizer(moment);

const events: Event[] = [
  {
    title: 'Boss birthday',
    start: moment().toDate(),
    end: moment().add(2,'hours').toDate(),
    bgcolor: '#367CF7',
    user: {
      _id: '123',
      name: 'DiegoDom'
    }
  }
];

export const CalendarScreen = () => {

  const [lastView, setLastView] = useState<View>((localStorage.getItem('lastView') as View) || 'month');

  const dispatch = useDispatch();

  const onDoubleClick = (e: Event) => {
    dispatch(uiOpenModal());
  };

  const onSelectEvent = (e: Event) => {
    dispatch(calendarSetActive(e));
    dispatch(uiOpenModal());
  };

  const onViewChange = (e: View) => {
    setLastView(e);
    localStorage.setItem('lastView', e);
  };

  const eventStyleGetter = (event: Event, start: Date, end: Date, isSelected: boolean) => {

    const style = {
      backgroundColor: event.bgcolor || '#367CF7',
      borderRadius: '0px',
      color: 'white',
      display: 'block',
      opacity: 0.8
    };

    return {
      style
    };
  };

  return (
    <div className='calendar-screen'>
      <Navbar/>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
        eventPropGetter={eventStyleGetter}
        onDoubleClickEvent= {onDoubleClick}
        onSelectEvent={ onSelectEvent }
        onView={ onViewChange }
        view={ lastView }
        components={{
          event: CalendarEvent,
        }}
      />
      <AddNewFab/>
      <CalendarModal/>
    </div>
  )
}
