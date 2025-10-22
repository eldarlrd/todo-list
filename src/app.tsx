import { signOut } from '@/lib/auth.ts';
import { projectActions } from '@/slices/projectSlice.ts';
import { todoActions } from '@/slices/todoSlice.ts';
import { onAuthStateChanged } from 'firebase/auth';
import { type JSX } from 'preact/jsx-runtime';

import { Footer } from '@/components/banners/footer.tsx';
import { Header } from '@/components/banners/header.tsx';
import { Sidebar } from '@/components/controls/sidebar.tsx';
import { TodoList } from '@/components/lists/todoList.tsx';
import { useAppDispatch } from '@/hooks/useAppState.ts';
import { auth } from '@/lib/firebase.ts';
import { authActions } from '@/slices/authSlice.ts';

export const App = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { setUser, clearUser } = authActions;
  const { setProjects } = projectActions;
  const { setTodos } = todoActions;

  onAuthStateChanged(auth, fbUser => {
    if (fbUser) {
      const { displayName, photoURL, email, uid } = fbUser;

      dispatch(setUser({ displayName, photoURL, email, uid }));

      try {
        // const { projects, todos } = await fetchAllData(uid);
        //
        // dispatch(setProjects(projects));
        // dispatch(setTodos(todos));
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error('Failed to fetch user data:', error);
          dispatch(clearUser());
        }
      }
    } else dispatch(clearUser());
  });

  return (
    <div
      id='app'
      class='font-main dark:(bg-slate-900, accent-sky-600, selection:bg-sky-600) flex min-h-[100svh] flex-col justify-between bg-slate-50 accent-emerald-400 selection:bg-emerald-400'>
      <Header />
      <main class='flex max-h-screen grow'>
        <Sidebar />
        <TodoList />
      </main>
      <Footer />
    </div>
  );
};

// Easter Egg
console.log(`"Give me six hours to chop down a tree & I will
spend the first four sharpening the axe." - Abraham Lincoln`);
