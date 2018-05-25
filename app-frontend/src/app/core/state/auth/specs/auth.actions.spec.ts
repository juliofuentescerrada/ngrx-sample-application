import { LogIn, AuthActionTypes, LogOut } from '@core/state/auth/auth.actions';

describe('Authentication actions:', () => {

  describe('LogIn', () => {
    it('should be of type [AUTH] Log In', () => {
      const action = new LogIn();
      expect(action.type).toBe(AuthActionTypes.LogIn);
    });
  });

  describe('LogOut', () => {
    it('should be of type [AUTH] Log Out', () => {
      const action = new LogOut();
      expect(action.type).toBe(AuthActionTypes.LogOut);
    });
  });
});
