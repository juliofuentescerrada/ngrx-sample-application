import { Action } from '@ngrx/store';

export enum LayoutActionTypes {
  ShowLoader = '[LAYOUT] Show Loader',
  HideLoader = '[LAYOUT] Hide Loader'
}

export class ShowLoader implements Action {
  readonly type: string = LayoutActionTypes.ShowLoader;
}

export class HideLoader implements Action {
  readonly type: string = LayoutActionTypes.HideLoader;
}

export type LayoutActions = ShowLoader | HideLoader;
