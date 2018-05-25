import { Action } from '@ngrx/store';

export enum UserActionTypes {
  LoadUsers = '[ADMIN] Load Users',
  LoadUsersSuccess = '[ADMIN] Load Users Success',
  CreateUser = '[ADMIN] Create User',
  CreateUserSuccess = '[ADMIN] Create User Success',
  EditUser = '[ADMIN] Edit User',
  EditUserSuccess = '[ADMIN] Edit User Success',
  DeleteUser = '[ADMIN] Delete User',
  DeleteUserSuccess = '[ADMIN] Delete User Success'
}

export class LoadUsers implements Action {
  readonly type: string = UserActionTypes.LoadUsers;
  constructor(public payload: any = null) { }
}

export class LoadUsersSuccess implements Action {
  readonly type: string = UserActionTypes.LoadUsersSuccess;
  constructor(public payload: Array<any>) { }
}

export class CreateUser implements Action {
  readonly type: string = UserActionTypes.CreateUser;
  constructor(public payload: any) { }
}

export class CreateUserSuccess implements Action {
  readonly type: string = UserActionTypes.CreateUserSuccess;
  constructor(public payload: any) { }
}

export class EditUser implements Action {
  readonly type: string = UserActionTypes.EditUser;
  constructor(public payload: any) { }
}

export class EditUserSuccess implements Action {
  readonly type: string = UserActionTypes.EditUserSuccess;
  constructor(public payload: any) { }
}

export class DeleteUser implements Action {
  readonly type: string = UserActionTypes.DeleteUser;
  constructor(public payload: any) { }
}

export class DeleteUserSuccess implements Action {
  readonly type: string = UserActionTypes.DeleteUserSuccess;
  constructor(public payload: any) { }
}

export type UserActions =
  LoadUsers |
  LoadUsersSuccess |
  CreateUser |
  CreateUserSuccess |
  EditUser |
  EditUserSuccess |
  DeleteUser |
  DeleteUserSuccess;
