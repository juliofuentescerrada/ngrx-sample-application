import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportsContainerComponent } from '@reports/containers/reports-container/reports-container.component';

const routes: Routes = [  { path: '', component: ReportsContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
