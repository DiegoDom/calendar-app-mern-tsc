import { Dispatch } from 'redux';
import { fetchConToken, fetchSinToken } from '../helpers';
import { authActionType, calendarActionType, User } from '../interfaces';
import Swal from 'sweetalert2';
import { calendarCleanLogout } from './calendar';

export const startLogin = (email: string, password: string) => {
  return async (disapath: Dispatch<authActionType>) => {
    const resp = await fetchSinToken('auth', { email, password }, 'POST');
    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem('token', body.token);
      localStorage.setItem('token-init-date', new Date().getTime().toString());

      disapath(
        login({
          _id: body.uid,
          name: body.name,
        })
      );
    } else {
      Swal.fire('Error', body.msg, 'error');
    }
  };
};

export const startRegister = (
  name: string,
  email: string,
  password: string
) => {
  return async (disapath: Dispatch<authActionType>) => {
    const resp = await fetchSinToken(
      'auth/new',
      { name, email, password },
      'POST'
    );
    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem('token', body.token);
      localStorage.setItem('token-init-date', new Date().getTime().toString());

      disapath(
        login({
          _id: body.uid,
          name: body.name,
        })
      );
    } else {
      Swal.fire('Error', body.msg, 'error');
    }
  };
};

export const startChecking = () => {
  return async (disapath: Dispatch<authActionType>) => {
    const resp = await fetchConToken('auth/renew');
    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem('token', body.token);
      localStorage.setItem('token-init-date', new Date().getTime().toString());

      disapath(
        login({
          _id: body.uid,
          name: body.name,
        })
      );
    } else {
      disapath(checkingFinish());
      disapath(logout());
    }
  };
};

const checkingFinish = (): authActionType => ({
  type: '[AUTH] checking finish',
});

const login = (user: User): authActionType => ({
  type: '[AUTH] login',
  payload: user,
});

export const startLogout = () => {
  return (disapath: Dispatch<authActionType | calendarActionType>) => {
    localStorage.clear();
    disapath(calendarCleanLogout())
    disapath(logout());
  };
};

const logout = (): authActionType => ({
  type: '[AUTH] logout',
});
