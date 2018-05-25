import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsRoutingModule } from '@reports/reports-routing.module';
import { ReportsContainerComponent } from '@reports/containers/reports-container/reports-container.component';

@NgModule({
  imports: [CommonModule, ReportsRoutingModule],
  declarations: [ReportsContainerComponent]
})
export class ReportsModule { }
