import { RouterStateUrl } from '@core/state/router/router.utils';
import * as fromRouter from '@ngrx/router-store';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from './auth';
import * as fromLayout from './layout';
export { RouterStateUrl, CustomRouterStateSerializer } from '@core/state/router/router.utils';

export interface AppState {
  auth: fromAuth.State;
  layout: fromLayout.State;
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.reducer,
  layout: fromLayout.reducer,
  router: fromRouter.routerReducer
};

export const getLayoutState = createFeatureSelector<fromLayout.State>('layout');
export const getLoading = createSelector(getLayoutState, state => state.loading);
