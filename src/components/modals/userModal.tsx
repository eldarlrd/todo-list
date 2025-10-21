import { type JSX } from 'preact/jsx-runtime';

import { useAppSelector } from '@/hooks/useAppState.ts';
import { signInWithGoogle } from '@/lib/auth.ts';

// TODO: Implement a modal for login & logout
export const UserModal = (): JSX.Element => {
  const { user, loading } = useAppSelector(state => state.authReducer);

  return (
    <div class='flex flex-col gap-1.5 text-center break-words select-none xl:text-lg'>
      <button
        onClick={() => {
          void signInWithGoogle();
          console.log('user', user);
          console.log('loading', loading);
        }}>
        CLICK
      </button>
    </div>
  );
};
