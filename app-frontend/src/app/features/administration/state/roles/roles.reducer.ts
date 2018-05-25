import { State, initialState } from '@administration/state/roles/roles.state';
import { RoleActions, RoleActionTypes } from '@administration/state/roles/roles.actions';

export function reducer(state: State = initialState, action: RoleActions): State {
  switch (action.type) {

    case RoleActionTypes.LoadRolesSuccess:
      return {
        ...state,
        list: action.payload
      };

    case RoleActionTypes.CreateRoleSuccess:
      return {
        ...state,
        list: [...state.list, action.payload]
      };

    case RoleActionTypes.EditRoleSuccess:
      return {
        ...state,
        list: state.list.map(e => e.id === action.payload.id ? action.payload : e)
      };

    case RoleActionTypes.DeleteRoleSuccess:
      return {
        ...state,
        list: state.list.filter(e => e.id !== action.payload.id)
      };
  }

  return state;
}
