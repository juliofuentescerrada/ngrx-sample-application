import { Action } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

export enum BrowserActionTypes {
  Navigate = '[ROUTER] Navigate'
}

export class Navigate implements Action {
  readonly type = BrowserActionTypes.Navigate;
  constructor(public payload: { path: any[]; query?: object; extras?: NavigationExtras; }) { }
}

export type RouterActionsUnion = Navigate;
