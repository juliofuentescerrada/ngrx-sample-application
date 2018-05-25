import * as fromAdministration from '@administration/state';
import { getRoles } from '@administration/state';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { LoadRoles, CreateRole, EditRole, DeleteRole } from '@administration/state/roles/roles.actions';

@Component({
  selector: 'app-roles-container',
  templateUrl: './roles-container.component.html',
  styleUrls: ['./roles-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RolesContainerComponent implements OnInit {

  roles$: Observable<Array<any>>;

  constructor(private store: Store<fromAdministration.State>) {
    this.roles$ = store.pipe(select(getRoles));
  }

  ngOnInit() {
    this.store.dispatch(new LoadRoles());
  }

  newRole() {
    this.store.dispatch(new CreateRole({ id: 10, name: 'new' }));
  }

  editRole() {
    this.store.dispatch(new EditRole({ id: 10, name: 'edit' }));
  }

  deleteRole() {
    this.store.dispatch(new DeleteRole({ id: 10, name: 'delete' }));
  }
}
