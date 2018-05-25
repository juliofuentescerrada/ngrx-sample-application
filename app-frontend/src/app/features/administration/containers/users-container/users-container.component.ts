import { State, getUsers } from '@administration/state';
import { CreateUser, EditUser, DeleteUser, LoadUsers } from '@administration/state/users/users.actions';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HideLoader } from '@core/state/layout/layout.actions';
import { Navigate } from '@core/state/router/router.actions';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-users-container',
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersContainerComponent implements OnInit {

  users$: Observable<Array<any>>;

  constructor(private store: Store<State>) {
    this.users$ = store.pipe(select(getUsers));
  }

  ngOnInit() {
    this.store.dispatch(new LoadUsers());
  }

  newUser() {
    this.store.dispatch(new CreateUser({ id: 10, name: 'new' }));
  }

  editUser() {
    this.store.dispatch(new EditUser({ id: 10, name: 'edit' }));
  }

  deleteUser() {
    this.store.dispatch(new DeleteUser({ id: 10, name: 'delete' }));
    // this.store.dispatch(new Navigate({ path: ['/dashboard'] }));
  }
}
