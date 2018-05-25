import { reducer } from '@core/state/auth';
import { LogIn, LogOut } from '@core/state/auth/auth.actions';
import { initialState } from '@core/state/auth/auth.state';

describe('The authentication reducer', () => {

  describe('with an action of type Log In', () => {
    it('should set authenticated to true', () => {
      const action = new LogIn();
      const state = reducer(initialState, action);
      expect(state.authenticated).toBe(true);
    });
  });

  describe('with an action of type Log Out', () => {
    it('should set authenticated to false', () => {
      const action = new LogOut();
      const state = reducer(initialState, action);
      expect(state.authenticated).toBe(false);
    });
  });
});
