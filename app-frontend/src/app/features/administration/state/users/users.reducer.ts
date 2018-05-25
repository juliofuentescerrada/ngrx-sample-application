import { State, initialState } from '@administration/state/users/users.state';
import { UserActions, UserActionTypes } from '@administration/state/users/users.actions';

export function reducer(state: State = initialState, action: UserActions): State {

  switch (action.type) {

    case UserActionTypes.LoadUsersSuccess:
      return {
        ...state,
        list: action.payload
      };

    case UserActionTypes.CreateUserSuccess:
      return {
        ...state,
        list: [...state.list, action.payload]
      };

    case UserActionTypes.EditUserSuccess:
      return {
        ...state,
        list: state.list.map(e => e.id === action.payload.id ? action.payload : e)
      };

    case UserActionTypes.DeleteUserSuccess:
      return {
        ...state,
        list: state.list.filter(e => e.id !== action.payload.id)
      };
  }

  return state;

}
