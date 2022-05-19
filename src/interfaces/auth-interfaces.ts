import { User } from './';

export interface authState {
  checking: boolean;
  _id?: string | null;
  name?: string | null;
}

export type authActionType =
  | { type: '[AUTH] checking finish' }
  | { type: '[AUTH] start login' }
  | { type: '[AUTH] login'; payload: User }
  | { type: '[AUTH] start register' }
  | { type: '[AUTH] register' }
  | { type: '[AUTH] start token renew' }
  | { type: '[AUTH] logout' };
