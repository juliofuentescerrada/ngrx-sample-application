
// tslint:disable-next-line:max-line-length
import { CreateUser, CreateUserSuccess, DeleteUser, DeleteUserSuccess, EditUser, EditUserSuccess, LoadUsers, LoadUsersSuccess, UserActionTypes } from '@administration/state/users/users.actions';
import { Injectable } from '@angular/core';
import { HideLoader, ShowLoader } from '@core/state/layout/layout.actions';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ToastService } from '@shared/services/toast.service';
import { of } from 'rxjs/observable/of';
import { map, switchMap, tap, delay } from 'rxjs/operators';

@Injectable()
export class UserEffects {

  @Effect()
  loadUsers$ = this.actions$.pipe(
    ofType<LoadUsers>(UserActionTypes.LoadUsers),
    delay(2000),
    switchMap(e => of(new LoadUsersSuccess([
      { id: 1, name: 'Bob' },
      { id: 2, name: 'Kevin' },
      { id: 3, name: 'Stuart' }
    ]))));

  @Effect()
  createUser$ = this.actions$.pipe(
    ofType<CreateUser>(UserActionTypes.CreateUser),
    map(e => e.payload),
    switchMap(e => of(new CreateUserSuccess(e))));

  @Effect({ dispatch: false })
  showSuccessToast$ = this.actions$.pipe(
    ofType<CreateUserSuccess | EditUserSuccess | DeleteUserSuccess>(
      UserActionTypes.CreateUserSuccess,
      UserActionTypes.EditUserSuccess,
      UserActionTypes.DeleteUserSuccess),
    map(e => e.type),
    tap(type => this.toastService.show(type))
  );

  @Effect()
  editUser$ = this.actions$.pipe(
    ofType<EditUser>(UserActionTypes.EditUser),
    map(e => e.payload),
    switchMap(e => of(new EditUserSuccess(e)))
  );

  @Effect()
  deleteUser$ = this.actions$.pipe(
    ofType<DeleteUser>(UserActionTypes.DeleteUser),
    map(e => e.payload),
    switchMap(e => of(new DeleteUserSuccess(e)))
  );

  @Effect()
  showLoadIndicator$ = this.actions$.pipe(
    ofType<LoadUsers>(UserActionTypes.LoadUsers),
    switchMap(e => of(new ShowLoader()))
  );

  @Effect()
  hideLoadIndicator$ = this.actions$.pipe(
    ofType<LoadUsersSuccess>(UserActionTypes.LoadUsersSuccess),
    switchMap(e => of(new HideLoader()))
  );

  constructor(private actions$: Actions, private toastService: ToastService) {
  }
}
