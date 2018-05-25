// tslint:disable-next-line:max-line-length
import { AdministrationShellContainerComponent } from '@administration/containers/administration-shell-container/administration-shell-container.component';
import { RolesContainerComponent } from '@administration/containers/roles-container/roles-container.component';
import { UsersContainerComponent } from '@administration/containers/users-container/users-container.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdministrationShellContainerComponent,
    children: [
      { path: 'users', component: UsersContainerComponent },
      { path: 'roles', component: RolesContainerComponent },
      { path: '', redirectTo: '/administration/users', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
