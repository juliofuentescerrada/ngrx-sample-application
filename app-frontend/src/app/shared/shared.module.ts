import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// tslint:disable-next-line:max-line-length
import { MatButtonModule, MatIconModule, MatListModule, MatMenuModule, MatProgressBarModule, MatRippleModule, MatSidenavModule, MatToolbarModule, MatSnackBarModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { TopMenuComponent } from '@shared/components/top-menu/top-menu.component';
import { LoadIndicatorComponent } from './components/load-indicator/load-indicator.component';
import { ToastService } from '@shared/services/toast.service';

const materialModules = [
  MatToolbarModule,
  MatButtonModule,
  MatProgressBarModule,
  MatRippleModule,
  MatMenuModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatSnackBarModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule
];

const sharedComponents = [TopMenuComponent, LoadIndicatorComponent];

@NgModule({
  imports: [CommonModule, RouterModule, ...materialModules],
  declarations: [...sharedComponents],
  exports: [...sharedComponents, ...materialModules],
  providers: [ToastService]
})
export class SharedModule { }
