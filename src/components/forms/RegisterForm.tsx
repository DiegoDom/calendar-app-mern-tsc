import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { startRegister } from '../../actions/auth';
import { AppDispatch } from '../../store/store';

export const RegisterForm = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { name, email, password, password2, onChange, reset, isValidEmail } =
    useForm({
      name: 'Alberto Dominguez',
      email: 'ddominguez@example.com',
      password: '',
      password2: '',
    });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValid()) {
      return;
    }

    await dispatch(startRegister(name, email, password));

    reset();
  };

  const isFormValid = () => {
    setErrors({
      name: '',
      email: '',
      password: '',
      password2: '',
    });

    if (name.trim().length === 0) {
      setErrors((oldErrors) => ({
        ...oldErrors,
        name: 'El nombre es requerido',
      }));
      return false;
    } else if (email.trim().length === 0) {
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
    } else if (password.trim().length < 6) {
      setErrors((oldErrors) => ({
        ...oldErrors,
        password: 'La contraseña debe contener al menos 6 caracteres',
      }));
      return false;
    }
    else if (password2.trim().length === 0) {
      setErrors((oldErrors) => ({
        ...oldErrors,
        password2: 'Repite tú contraseña',
      }));
      return false;
    } else if (password !== password2) {
      setErrors((oldErrors) => ({
        ...oldErrors,
        password2: 'Las contraseñas no coinciden',
      }));
      return false;
    }

    return true;
  };

  return (
    <>
      <h3>Registro</h3>
      <form noValidate onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Ingresa tú nombre"
            name="name"
            id="name"
            value={name}
            onChange={onChange}
            autoComplete="new-username"
            className={`form-control ${errors.name && 'is-invalid'}`}
          />
          {errors.name && <span className="text-danger"> {errors.name}</span>}
        </div>
        <div className="form-group">
          <input
            type="email"
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
            placeholder="Crea una contraseña"
            name="password"
            id="password"
            value={password}
            onChange={onChange}
            autoComplete="new-password"
            className={`form-control ${errors.password && 'is-invalid'}`}
          />
          {errors.password && <span className="text-danger"> {errors.password}</span>}
        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder="Repite tú contraseña"
            name="password2"
            id="password2"
            value={password2}
            onChange={onChange}
            autoComplete="new-password"
            className={`form-control ${errors.password2 && 'is-invalid'}`}
          />
          {errors.password2 && <span className="text-danger"> {errors.password2}</span>}
        </div>

        <div className="form-group">
          <input type="submit" className="btnSubmit" value="Crear cuenta" />
        </div>
      </form>
    </>
  );
};
