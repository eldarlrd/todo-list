import { onAuthStateChanged, type User } from 'firebase/auth';

import { useAppDispatch } from '@/hooks/useAppState.ts';
import { auth } from '@/lib/firebase.ts';
import { fetchAllData } from '@/lib/firestore.ts';
import { authActions } from '@/slices/authSlice.ts';
import { projectActions } from '@/slices/projectSlice.ts';
import { todoActions } from '@/slices/todoSlice.ts';

export const useAuthListener = (): void => {
  const dispatch = useAppDispatch();
  const { setUser, clearUser } = authActions;
  const { setProjects } = projectActions;
  const { setTodos } = todoActions;

  onAuthStateChanged(auth, fbUser => {
    if (fbUser) {
      void (async (user: User): Promise<void> => {
        const { displayName, photoURL, email, uid } = user;

        dispatch(setUser({ displayName, photoURL, email, uid }));

        try {
          const { projects, todos } = await fetchAllData(uid);

          dispatch(setProjects(projects));
          dispatch(setTodos(todos));
        } catch (error: unknown) {
          if (error instanceof Error) {
            console.error('Failed to fetch user data:', error);
            dispatch(clearUser());
          }
        }
      })(fbUser);
    } else dispatch(clearUser());
  });
};
