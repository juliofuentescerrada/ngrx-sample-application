// tslint:disable-next-line:max-line-length
import { CreateRole, CreateRoleSuccess, DeleteRole, EditRole, EditRoleSuccess, LoadRoles, LoadRolesSuccess, RoleActionTypes, DeleteRoleSuccess } from '@administration/state/roles/roles.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class RoleEffects {

  @Effect()
  loadRoles$ = this.actions$.pipe(
    ofType<LoadRoles>(RoleActionTypes.LoadRoles),
    switchMap(e => of(new LoadRolesSuccess([
      { id: 1, name: 'Administrator' },
      { id: 2, name: 'User' }
    ]))));

  @Effect()
  createRole$ = this.actions$.pipe(
    ofType<CreateRole>(RoleActionTypes.CreateRole),
    map(e => e.payload),
    switchMap(e => of(new CreateRoleSuccess(e))));

  @Effect()
  editRole$ = this.actions$.pipe(
    ofType<EditRole>(RoleActionTypes.EditRole),
    map(e => e.payload),
    switchMap(e => of(new EditRoleSuccess(e))));

  @Effect()
  deleteRole$ = this.actions$.pipe(
    ofType<DeleteRole>(RoleActionTypes.DeleteRole),
    map(e => e.payload),
    switchMap(e => of(new DeleteRoleSuccess(e))));

  constructor(private actions$: Actions) {
  }
}
