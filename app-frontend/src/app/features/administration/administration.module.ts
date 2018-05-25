import { AdministrationRoutingModule } from '@administration/administration-routing.module';
import { RolesContainerComponent } from '@administration/containers/roles-container/roles-container.component';
import { UsersContainerComponent } from '@administration/containers/users-container/users-container.component';
import { reducers } from '@administration/state';
import { RoleEffects } from '@administration/state/roles/roles.effects';
import { UserEffects } from '@administration/state/users/users.effects';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@shared/shared.module';
// tslint:disable-next-line:max-line-length
import { AdministrationShellContainerComponent } from './containers/administration-shell-container/administration-shell-container.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    AdministrationRoutingModule,
    StoreModule.forFeature('administration', reducers),
    EffectsModule.forFeature([UserEffects, RoleEffects]),
  ],
  declarations: [UsersContainerComponent, RolesContainerComponent,  AdministrationShellContainerComponent]
})
export class AdministrationModule { }
