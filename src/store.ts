import { configureStore } from '@reduxjs/toolkit';

import { projectReducer } from '@/slices/projectSlice.ts';

// https://redux-toolkit.js.org/api/configureStore
const store = configureStore({
  reducer: {
    projectReducer
  }
});

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;

export { type AppDispatch, type RootState, store };
