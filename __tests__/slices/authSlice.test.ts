import { type User } from 'firebase/auth';

import { authActions, authReducer } from '@/slices/authSlice.ts';

const { setUser, setLoading, clearUser } = authActions;

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
      user: null,
      loading: false
    });
  });

  it('sets the user', () => {
    const previousState = { user: null, loading: true };
    const action = setUser(mockUser);
    const result = authReducer(previousState, action);

    expect(result.user).toStrictEqual(mockUser);
    expect(result.loading).toBe(false);
  });

  it('sets loading to true', () => {
    const action = setLoading(true);
    const result = authReducer(initialState, action);

    expect(result.loading).toBe(true);
  });

  it('logs out the user', () => {
    const previousState = { user: mockUser, loading: true };
    const action = clearUser();
    const result = authReducer(previousState, action);

    expect(result.user).toBeNull();
    expect(result.loading).toBe(false);
  });
});
