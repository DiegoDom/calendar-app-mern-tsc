import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { startLogin } from '../../actions/auth';
import { AppDispatch } from '../../store/store';

export const LoginForm = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { email, password, onChange, reset, isValidEmail } = useForm({
    email: 'ddominguez@dev.com',
    password: 'ddom344',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValid()) {
      return;
    }

    await dispatch(startLogin(email, password));

    reset();
  };

  const isFormValid = () => {
    setErrors({
      email: '',
      password: '',
    });

    if (email.trim().length === 0) {
      setErrors((oldErrors) => ({
        ...oldErrors,
        email: 'El correo electrónico es requerido',
      }));
      return false;
    } else if (!isValidEmail(email)) {
      setErrors((oldErrors) => ({
        ...oldErrors,
        email: 'Este correo electrónico no es válido',
      }));
      return false;
    } else if (password.trim().length === 0) {
      setErrors((oldErrors) => ({
        ...oldErrors,
        password: 'La contraseña es requerida',
      }));
      return false;
    }

    return true;
  };

  return (
    <>
      <h3>Ingreso</h3>
      <form noValidate onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Ingresa tú correo electrónico"
            name="email"
            id="email"
            value={email}
            onChange={onChange}
            autoComplete="new-email"
            className={`form-control ${errors.email && 'is-invalid'}`}
          />
          {errors.email && <span className="text-danger"> {errors.email}</span>}
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Contraseña"
            name="password"
            id="password"
            value={password}
            onChange={onChange}
            autoComplete="new-password"
            className={`form-control ${errors.password && 'is-invalid'}`}
          />
          {errors.password && (
            <span className="text-danger">{errors.password}</span>
          )}
        </div>
        <div className="form-group">
          <input type="submit" className="btnSubmit" value="Login" />
        </div>
      </form>
    </>
  );
};
