import { Event } from '../../interfaces/calendar-interfaces';

interface Props {
  event: Event
};

export const CalendarEvent = ({ event }: Props) => {
  
  const { title, user } = event;

  return (
    <>
      <strong>{ title }</strong> - <span>{ user?.name }</span>
    </>
  )
}
