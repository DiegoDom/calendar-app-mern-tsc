import { Event } from '../../interfaces/calendar-interfaces';

interface Props {
  event: Event
};

export const CalendarEvent = ({ event }: Props) => {
  
  const { title, user: { name } } = event;

  return (
    <>
      <strong>{ title }</strong> - <span>{ name }</span>
    </>
  )
}
