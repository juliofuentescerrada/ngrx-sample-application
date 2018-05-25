import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '@core/state';
import { Observable } from 'rxjs/Observable';
import * as fromLayout from '@core/state/layout';

@Component({
  selector: 'app-app-shell-container',
  templateUrl: './app-shell-container.component.html',
  styleUrls: ['./app-shell-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppShellContainerComponent implements OnInit {

  ngOnInit() {
  }
}
