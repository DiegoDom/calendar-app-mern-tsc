import { useDispatch } from 'react-redux';
import { calendarDeleteEvent } from '../../actions/calendar';

export const DeleteEventFab = () => {

  const dispatch = useDispatch();

  const handleDeleteEvent = () => {
    dispatch(calendarDeleteEvent());
  };

  return (
    <button type="button" className="btn btn-sm btn-danger fab-danger" onClick={handleDeleteEvent}>
      <i className="fas fa-trash"></i>
      <span> Borrar evento</span>
    </button>
  )
}
