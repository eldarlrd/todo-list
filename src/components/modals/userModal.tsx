import { type Dispatch, type StateUpdater, useState } from 'preact/hooks';
import { type JSX } from 'preact/jsx-runtime';

import { CancelButton } from '@/components/buttons/cancelButton.tsx';
import { ConfirmButton } from '@/components/buttons/confirmButton.tsx';
// import { useAppSelector } from '@/hooks/useAppState.ts';
import { signInWithGoogle } from '@/lib/auth.ts';

interface UserControls {
  setIsVisible: Dispatch<StateUpdater<boolean>>;
}

// TODO: Implement a modal for login & logout
export const UserModal = ({ setIsVisible }: UserControls): JSX.Element => {
  // const { user } = useAppSelector(state => state.authReducer);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (): Promise<void> => {
    try {
      setIsLoading(true);
      await signInWithGoogle();
    } catch (error: unknown) {
      if (error instanceof Error) console.error('Failed to login:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div class='flex flex-col gap-1.5 text-center text-base break-words select-none xl:text-lg'>
      <p>
        Login using your{' '}
        <span class='font-semibold'>
          <span class='text-blue-500'>G</span>
          <span class='text-red-500'>o</span>
          <span class='text-amber-500'>o</span>
          <span class='text-blue-500'>g</span>
          <span class='text-green-600'>l</span>
          <span class='text-red-500'>e</span>
        </span>{' '}
        Account
      </p>
      <p>to store projects & todos online for remote access.</p>
      <span class='mt-4 flex justify-end gap-2'>
        <CancelButton
          id='user-cancel'
          handleCancel={(): void => {
            setIsVisible(false);
          }}
        />
        <ConfirmButton
          id='user-login'
          action='Login'
          styleClass='hover:(bg-emerald-700, active:bg-emerald-600, dark:(bg-sky-700, active:bg-sky-800)) bg-emerald-800 dark:bg-sky-600'
          isDisabled={isLoading}
          isLoading={isLoading}
          handleConfirm={() => void handleLogin()}
        />
      </span>
    </div>
  );
};
