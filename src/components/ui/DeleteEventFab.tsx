import { useDispatch } from 'react-redux';
import { calendarStartEventDelete } from '../../actions/calendar';
import { AppDispatch } from '../../store/store';

export const DeleteEventFab = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleDeleteEvent = () => {
    dispatch(calendarStartEventDelete());
  };

  return (
    <button
      type="button"
      className="btn btn-sm btn-danger fab-danger"
      onClick={handleDeleteEvent}
    >
      <i className="fas fa-trash"></i>
      <span> Borrar evento</span>
    </button>
  );
};
