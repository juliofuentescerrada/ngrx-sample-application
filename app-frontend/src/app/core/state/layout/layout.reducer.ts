import { LayoutActionTypes, LayoutActions } from '@core/state/layout/layout.actions';
import { State, initialState } from '@core/state/layout/layout.state';

export function reducer(state: State = initialState, action: LayoutActions): State {
  switch (action.type) {

    case LayoutActionTypes.ShowLoader:
      return { ...state, loading: true };

    case LayoutActionTypes.HideLoader:
      return { ...state, loading: false };

    default:
      return state;
  }
}
