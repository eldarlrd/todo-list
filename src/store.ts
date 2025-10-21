import { configureStore } from '@reduxjs/toolkit';
import { useDebouncedCallback } from 'use-debounce';

import { savePreferences, saveProjects, saveTodos } from '@/lib/firestore.ts';
import { authReducer } from '@/slices/authSlice.ts';
import { projectReducer } from '@/slices/projectSlice.ts';
import { todoReducer } from '@/slices/todoSlice.ts';

interface InitState {
  projectReducer: ReturnType<typeof projectReducer>;
  todoReducer: ReturnType<typeof todoReducer>;
}

// Local Storage to Store
const preloadedState =
  localStorage.state ?
    (JSON.parse(localStorage.state as string) as InitState)
  : {};

// https://redux-toolkit.js.org/api/configureStore
const store = configureStore({
  reducer: {
    authReducer,
    projectReducer,
    todoReducer
  },
  preloadedState
});

// Detect changes on previous state
let prevTodos: string | null = null;
let prevProjects: string | null = null;
let prevPreferences: string | null = null;

// Store to Local Storage
store.subscribe(() => {
  const { todoReducer, projectReducer, authReducer } = store.getState();
  const { user } = authReducer;

  localStorage.setItem(
    'state',
    JSON.stringify({
      projectReducer,
      todoReducer
    })
  );

  if (!user) return;

  const currentTodos = JSON.stringify(todoReducer.todoList);

  if (currentTodos !== prevTodos) {
    prevTodos = currentTodos;

    useDebouncedCallback(() => {
      saveTodos(user.uid, todoReducer.todoList).catch((error: unknown) => {
        if (error instanceof Error)
          console.error('Failed to sync todos', error);
      });
    }, 1000);
  }

  // Debounced Firestore sync for projects
  const currentProjects = JSON.stringify({
    list: projectReducer.projectList,
    selected: projectReducer.selectedProject
  });

  if (currentProjects !== prevProjects) {
    prevProjects = currentProjects;

    useDebouncedCallback(() => {
      saveProjects(
        user.uid,
        projectReducer.projectList,
        projectReducer.selectedProject
      ).catch((error: unknown) => {
        if (error instanceof Error)
          console.error('Failed to sync projects', error);
      });
    }, 1000);
  }

  // Debounced Firestore sync for preferences
  const currentPreferences = JSON.stringify({
    viewMode: todoReducer.viewMode,
    sortMode: todoReducer.sortMode,
    sortAscending: todoReducer.sortAscending
  });

  if (currentPreferences !== prevPreferences) {
    prevPreferences = currentPreferences;

    useDebouncedCallback(() => {
      savePreferences(user.uid, {
        viewMode: todoReducer.viewMode,
        sortMode: todoReducer.sortMode,
        sortAscending: todoReducer.sortAscending
      }).catch((error: unknown) => {
        if (error instanceof Error)
          console.error('Failed to sync preferences', error);
      });
    }, 500);
  }
});

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;

export { type AppDispatch, type RootState, store };
