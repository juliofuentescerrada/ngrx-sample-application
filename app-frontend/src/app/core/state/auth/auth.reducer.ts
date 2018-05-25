import { AuthActionTypes, AuthActions } from '@core/state/auth/auth.actions';
import { State, initialState } from '@core/state/auth/auth.state';

export function reducer(state: State = initialState, action: AuthActions): State {
  switch (action.type) {

    case AuthActionTypes.LogIn:
      return { ...state, authenticated: true };

    case AuthActionTypes.LogOut:
      return { ...state, authenticated: false };

    default:
      return state;
  }
}
