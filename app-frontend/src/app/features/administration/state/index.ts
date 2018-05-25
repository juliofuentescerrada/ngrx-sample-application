import { AppState } from '@core/state';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoles from './roles';
import * as fromUsers from './users';

export interface AdministrationState {
  users: fromUsers.State;
  roles: fromRoles.State;
}

export interface State extends AppState {
  administration: AdministrationState;
}

export const reducers: ActionReducerMap<AdministrationState> = {
  users: fromUsers.reducer,
  roles: fromRoles.reducer
};

export const getAdministrationState = createFeatureSelector<AdministrationState>('administration');
export const getUsers = createSelector(getAdministrationState, state => state.users.list);
export const getRoles = createSelector(getAdministrationState, state => state.roles.list);
