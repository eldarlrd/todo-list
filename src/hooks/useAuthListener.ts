import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useRef } from 'preact/hooks';

import { useAppDispatch, useAppSelector } from '@/hooks/useAppState.ts';
import { auth } from '@/lib/firebase.ts';
import { taskMerger } from '@/lib/taskMerger.ts';
import { authActions } from '@/slices/authSlice.ts';
import { projectActions } from '@/slices/projectSlice.ts';
import { todoActions } from '@/slices/todoSlice.ts';

export const useAuthListener = (): void => {
  const { projectList: localProjects } = useAppSelector(
    state => state.projectReducer
  );
  const { todoList: localTodos } = useAppSelector(state => state.todoReducer);
  const dispatch = useAppDispatch();

  const { clearUser } = authActions;
  const { setProjects, setSelectedProject } = projectActions;
  const { setTodos } = todoActions;
  const hasSynced = useRef(false);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    const unsubscribe = onAuthStateChanged(auth, async fbUser => {
      if (fbUser) {
        if (hasSynced.current) return;
        hasSynced.current = true;

        try {
          const { uid } = fbUser;

          const [mergedProjects, mergedTodos] = await taskMerger({
            uid,
            localProjects,
            localTodos
          });

          if (!localProjects.length)
            dispatch(setSelectedProject(mergedProjects[0]?.id));
          dispatch(setProjects(mergedProjects));
          dispatch(setTodos(mergedTodos));
        } catch (error: unknown) {
          if (error instanceof Error) throw error;
        }
      } else {
        dispatch(clearUser());
        hasSynced.current = false;
      }
    });

    return (): void => {
      unsubscribe();
    };
  }, [
    dispatch,
    localProjects,
    localTodos,
    setProjects,
    setTodos,
    clearUser,
    setSelectedProject
  ]);
};
