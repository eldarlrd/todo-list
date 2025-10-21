import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type User } from 'firebase/auth';

const initialState: {
  user: User | null;
  loading: boolean;
} = {
  user: null,
  loading: false
};

// FIXME: Tie this correctly to state
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
      state.loading = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    clearUser: state => {
      state.user = null;
      state.loading = false;
    }
  }
});

const authActions = authSlice.actions;
const authReducer = authSlice.reducer;

export { authActions, authReducer };
