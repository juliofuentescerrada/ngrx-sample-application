import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Navigate, BrowserActionTypes } from '@core/state/router/router.actions';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class RouterEffects {

  @Effect({ dispatch: false })
  navigate$ = this.actions$.pipe(
    ofType<Navigate>(BrowserActionTypes.Navigate),
    map(e => e.payload),
    tap(({ path, query: queryParams, extras }) => this.router.navigate(path, { queryParams, ...extras })));

  constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location
  ) { }
}
