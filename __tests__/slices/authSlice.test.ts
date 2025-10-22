import { type User } from 'firebase/auth';

import { authActions, authReducer } from '@/slices/authSlice.ts';

const { setUser, clearUser } = authActions;

describe('auth reducer', () => {
  const mockUser = {
    uid: 'test-uid',
    email: 'test@example.com',
    displayName: 'Test User'
  } as User;

  const initialState = undefined;

  it('returns the initial state', () => {
    const action = { type: '' };
    const result = authReducer(initialState, action);

    expect(result).toStrictEqual({
      user: null
    });
  });

  it('sets the user', () => {
    const previousState = { user: null };
    const action = setUser(mockUser);
    const result = authReducer(previousState, action);

    expect(result.user).toStrictEqual(mockUser);
  });

  it('logs out the user', () => {
    const previousState = { user: mockUser };
    const action = clearUser();
    const result = authReducer(previousState, action);

    expect(result.user).toBeNull();
  });
});
