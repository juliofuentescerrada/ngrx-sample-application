import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  LogIn = '[AUTH] Log In',
  LogOut = '[AUTH] Log Out'
}

export class LogIn implements Action {
  readonly type: string = AuthActionTypes.LogIn;
}

export class LogOut implements Action {
  readonly type: string = AuthActionTypes.LogOut;
}

export type AuthActions = LogIn | LogOut;
