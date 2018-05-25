import { Action } from '@ngrx/store';

export enum RoleActionTypes {
  LoadRoles = '[ADMIN] Load Roles',
  LoadRolesSuccess = '[ADMIN] Load Roles Success',
  CreateRole = '[ADMIN] Create Role',
  CreateRoleSuccess = '[ADMIN] Create Role Success',
  EditRole = '[ADMIN] Edit Role',
  EditRoleSuccess = '[ADMIN] Edit Role Success',
  DeleteRole = '[ADMIN] Delete Role',
  DeleteRoleSuccess = '[ADMIN] Delete Role Success'
}

export class LoadRoles implements Action {
  readonly type: string = RoleActionTypes.LoadRoles;
  constructor(public payload: any = null) { }
}

export class LoadRolesSuccess implements Action {
  readonly type: string = RoleActionTypes.LoadRolesSuccess;
  constructor(public payload: any) { }
}

export class CreateRole implements Action {
  readonly type: string = RoleActionTypes.CreateRole;
  constructor(public payload: any) { }
}

export class CreateRoleSuccess implements Action {
  readonly type: string = RoleActionTypes.CreateRoleSuccess;
  constructor(public payload: any) { }
}

export class EditRole implements Action {
  readonly type: string = RoleActionTypes.EditRole;
  constructor(public payload: any) { }
}

export class EditRoleSuccess implements Action {
  readonly type: string = RoleActionTypes.EditRoleSuccess;
  constructor(public payload: any) { }
}

export class DeleteRole implements Action {
  readonly type: string = RoleActionTypes.DeleteRole;
  constructor(public payload: any) { }
}

export class DeleteRoleSuccess implements Action {
  readonly type: string = RoleActionTypes.DeleteRoleSuccess;
  constructor(public payload: any) { }
}

export type RoleActions =
  CreateRole |
  CreateRoleSuccess |
  EditRole |
  EditRoleSuccess |
  DeleteRole |
  DeleteRoleSuccess;
