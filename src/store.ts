import type {} from 'immer';
import { configureStore } from '@reduxjs/toolkit';

import { projectReducer } from '@/slices/projectSlice.ts';
import { todoReducer } from '@/slices/todoSlice.ts';

interface InitState {
  projectReducer: ReturnType<typeof projectReducer>;
  todoReducer: ReturnType<typeof todoReducer>;
}

// Local Storage to Store
const preloadedState = localStorage.state
  ? (JSON.parse(localStorage.state as string) as InitState)
  : {};

// https://redux-toolkit.js.org/api/configureStore
const store = configureStore({
  reducer: {
    projectReducer,
    todoReducer
  },
  preloadedState
});

// Store to Local Storage
store.subscribe(() => {
  localStorage.setItem('state', JSON.stringify(store.getState()));
});

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;

export { type AppDispatch, type RootState, store };
