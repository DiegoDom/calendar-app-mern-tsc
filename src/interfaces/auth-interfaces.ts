import { User } from './';

export interface authState {
  checking: boolean;
  _id?: string | null;
  name?: string | null;
}

export type authActionType =
  | { type: '[AUTH] Auth checking finish' }
  | { type: '[AUTH] Auth start login' }
  | { type: '[AUTH] Auth login'; payload: User }
  | { type: '[AUTH] Auth start register' }
  | { type: '[AUTH] Auth register' }
  | { type: '[AUTH] Auth start token renew' }
  | { type: '[AUTH] Auth logout' };
