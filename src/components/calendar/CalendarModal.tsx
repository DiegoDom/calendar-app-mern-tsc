import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Modal from 'react-modal';

import { useSelector, useDispatch } from 'react-redux';

import Swal from 'sweetalert2';
import moment from 'moment';
import Datetime from 'react-datetime';

import { AppDispatch, RootState } from '../../store/store';
import { uiCloseModal } from '../../actions/ui';
import {
  calendarStartAddNew,
  calendarClearActive,
  calendarStartUpdate,
} from '../../actions/calendar';
import { calendarFormValues } from '../../interfaces/calendar-interfaces';

import 'moment/locale/es-mx';
import 'react-datetime/css/react-datetime.css';

moment.locale('es-mx');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const now = moment().minutes(0).seconds(0).add(1, 'hours');
const nowPlus1 = now.clone().add(1, 'hour');

const initEvent: calendarFormValues = {
  title: 'Nuevo evento',
  notes: '',
  start: now.toDate(),
  end: nowPlus1.toDate(),
};

export const CalendarModal = () => {
  const {
    ui: { modalOpen },
    calendar: { activeEvent },
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();

  const [dateStart, setDateStart] = useState(now.toDate());
  const [dateEnd, setDateEnd] = useState(nowPlus1.toDate());
  const [titleValid, setTitleValid] = useState(true);

  const [formValues, setFormValues] = useState<calendarFormValues>(initEvent);

  const { title, notes, start, end } = formValues;

  useEffect(() => {
    if (activeEvent) {
      setFormValues(activeEvent);
    } else {
      setFormValues(initEvent);
    }
  }, [activeEvent]);

  const handleInputChange = ({
    target,
  }: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const closeModal = () => {
    dispatch(uiCloseModal());
    dispatch(calendarClearActive());
    setFormValues(initEvent);
  };

  const handleStartDateChange = (e: string | moment.Moment) => {
    const start = (e as moment.Moment).toDate();
    setDateStart(start);
    setFormValues({
      ...formValues,
      start,
    });
  };

  const handleEndDateChange = (e: string | moment.Moment) => {
    const end = (e as moment.Moment).toDate();
    setDateEnd(end);
    setFormValues({
      ...formValues,
      end,
    });
  };

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const momentStart = moment(start);
    const momentEnd = moment(end);

    if (momentStart.isSameOrAfter(momentEnd)) {
      console.log('Fecha final debe ser mayor');
      Swal.fire(
        'Error',
        'La fecha de fin debe ser mayor a la fecha de inicio',
        'error'
      );
      return;
    }

    if (title.trim().length < 2) {
      setTitleValid(false);
      return;
    }

    setTitleValid(true);

    //TODO: Realizar grabación a la DB
    if (activeEvent) {
      const { id, user } = activeEvent;
      dispatch(
        calendarStartUpdate({
          ...formValues,
          id,
          user,
        })
      );
    } else {
      dispatch(
        calendarStartAddNew(formValues)
      );
    }
    closeModal();
  };

  return (
    <Modal
      isOpen={modalOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={200}
      className="modal"
      overlayClassName="modal-fondo"
    >
      <h3> {activeEvent ? 'Editar' : 'Nuevo'} evento</h3>
      <hr />
      <form className="container" onSubmit={handleSubmitForm}>
        <div className="form-group">
          <label>Fecha y hora inicio</label>
          <Datetime
            locale="es-mx"
            initialValue={dateStart}
            onChange={handleStartDateChange}
            value={dateStart}
            dateFormat="DD-MM-YYYY"
            timeFormat="h:mm:ss A"
          />
        </div>

        <div className="form-group">
          <label>Fecha y hora fin</label>
          <Datetime
            locale="es-mx"
            initialValue={nowPlus1.toDate()}
            onChange={handleEndDateChange}
            value={dateEnd}
            dateFormat="DD-MM-YYYY"
            timeFormat="h:mm:ss A"
          />
        </div>

        <hr />
        <div className="form-group">
          <label>Titulo y notas</label>
          <input
            type="text"
            className={`form-control ${!titleValid && 'is-invalid'}`}
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            value={title}
            onChange={handleInputChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            Una descripción corta
          </small>
        </div>

        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Notas"
            rows={5}
            name="notes"
            value={notes}
            onChange={handleInputChange}
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">
            Información adicional
          </small>
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  );
};
