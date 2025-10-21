import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'preact/hooks';
import { useDispatch } from 'react-redux';

import { auth } from '@/lib/firebase.ts';
import { syncLocalToFirestore } from '@/lib/firestore.ts';
import { authActions } from '@/slices/authSlice.ts';
import { projectActions } from '@/slices/projectSlice.ts';
import { todoActions } from '@/slices/todoSlice.ts';
import { type AppDispatch, store } from '@/store.ts';

export const useAuth = (): void => {
  const dispatch = useDispatch<AppDispatch>();
  const { setLoading, setUser, clearUser } = authActions;
  const { setProjects, setSelectedProject } = projectActions;
  const { setTodos, setViewMode, setSortMode, setSortAscending } = todoActions;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      const handleAuthChange = async (): Promise<void> => {
        dispatch(setLoading(true));

        if (user) {
          dispatch(setUser(user));

          try {
            const { todoReducer, projectReducer } = store.getState();
            const localData = {
              todos: todoReducer.todoList,
              projects: projectReducer.projectList,
              selectedProject: projectReducer.selectedProject,
              viewMode: todoReducer.viewMode,
              sortMode: todoReducer.sortMode,
              sortAscending: todoReducer.sortAscending
            };

            const mergedData = await syncLocalToFirestore(user.uid, localData);

            dispatch(setTodos(mergedData.todos));
            dispatch(setProjects(mergedData.projects));
            dispatch(setSelectedProject(mergedData.selectedProject));
            dispatch(setViewMode(mergedData.viewMode));
            dispatch(setSortMode(mergedData.sortMode));
            dispatch(setSortAscending(mergedData.sortAscending));
          } catch (error: unknown) {
            if (error instanceof Error)
              console.error('Failed to sync data on login', error);
          }
        } else dispatch(clearUser());

        dispatch(setLoading(false));
      };

      void handleAuthChange();
    });

    return (): void => {
      unsubscribe();
    };
  }, [dispatch]); // eslint-disable-line react-hooks/exhaustive-deps
};
