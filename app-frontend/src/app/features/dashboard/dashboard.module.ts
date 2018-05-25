import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { DashboardContainerComponent } from '@dashboard/containers/dashboard-container/dashboard-container.component';
import { DashboardRoutingModule } from '@dashboard/dashboard-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardContainerComponent]
})
export class DashboardModule { }
