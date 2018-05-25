import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppShellContainerComponent } from '@root/containers/app-shell-container/app-shell-container.component';
import { LoginContainerComponent } from '@root/containers/login-container/login-container.component';

const routes: Routes = [
  {
    path: '',
    component: AppShellContainerComponent,
    children: [
      { path: 'dashboard', loadChildren: 'app/features/dashboard/dashboard.module#DashboardModule' },
      { path: 'reports', loadChildren: 'app/features/reports/reports.module#ReportsModule' },
      { path: 'products', loadChildren: 'app/features/products/products.module#ProductsModule' },
      { path: 'administration', loadChildren: 'app/features/administration/administration.module#AdministrationModule' },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ],
  },
  { path: 'login', component: LoginContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RootRoutingModule { }
