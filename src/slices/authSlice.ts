import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type User } from 'firebase/auth';

const initialState: {
  user: User | null;
} = {
  user: null
};

// TODO: Tie this correctly to state
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
    clearUser: state => {
      state.user = null;
    }
  }
});

const authActions = authSlice.actions;
const authReducer = authSlice.reducer;

export { authActions, authReducer };
