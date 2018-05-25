import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';
import { AppState, getLoading } from '@core/state';

@Component({
  selector: 'app-administration-shell-container',
  templateUrl: './administration-shell-container.component.html',
  styleUrls: ['./administration-shell-container.component.scss']
})
export class AdministrationShellContainerComponent implements OnInit {

  loading$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.loading$ = this.store.pipe(select(getLoading));
  }

  ngOnInit() {
  }
}
