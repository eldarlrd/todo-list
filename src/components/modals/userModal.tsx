import { CircleUserRound } from 'lucide-preact';
import { type Dispatch, type StateUpdater, useState } from 'preact/hooks';
import { type JSX } from 'preact/jsx-runtime';

import { CancelButton } from '@/components/buttons/cancelButton.tsx';
import { ConfirmButton } from '@/components/buttons/confirmButton.tsx';
import { SyncButton } from '@/components/buttons/syncButton.tsx';
import { ERROR_LOGIN, ERROR_LOGOUT } from '@/config/errors.ts';
import { SUCCESS_LOGIN, SUCCESS_LOGOUT } from '@/config/successes.ts';
import { useAppDispatch, useAppSelector } from '@/hooks/useAppState.ts';
import { signInWithGoogle, signOut } from '@/lib/auth.ts';
import { errorToast, successToast } from '@/lib/toast.ts';
import { authActions } from '@/slices/authSlice.ts';

interface UserControls {
  setIsVisible: Dispatch<StateUpdater<boolean>>;
}

export const UserModal = ({ setIsVisible }: UserControls): JSX.Element => {
  const { user } = useAppSelector(state => state.authReducer);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useAppDispatch();
  const { setUser, clearUser } = authActions;

  const handleLogin = async (): Promise<void> => {
    try {
      setIsLoading(true);
      const { displayName, photoURL, email, uid } = await signInWithGoogle();

      dispatch(setUser({ displayName, photoURL, email, uid }));
      setIsVisible(false);

      successToast(SUCCESS_LOGIN);
    } catch (error: unknown) {
      if (error instanceof Error) {
        errorToast(ERROR_LOGIN);
        console.error(ERROR_LOGIN, error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async (): Promise<void> => {
    try {
      setIsLoading(true);

      await signOut();

      dispatch(clearUser());
      setIsVisible(false);

      successToast(SUCCESS_LOGOUT);
    } catch (error: unknown) {
      if (error instanceof Error) {
        errorToast(ERROR_LOGOUT);
        console.error(ERROR_LOGOUT, error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const buttonStyle =
    user ?
      'hover:(bg-rose-700, active:bg-rose-600, dark:(bg-rose-700, active:bg-rose-800))' +
      ' bg-rose-800 dark:bg-rose-600'
    : 'hover:(bg-emerald-700, active:bg-emerald-600, dark:(bg-sky-700, active:bg-sky-800)) bg-emerald-800 dark:bg-sky-600';

  return (
    <div class='flex flex-col gap-1.5 text-center text-base break-words select-none xl:text-lg'>
      {user ?
        <>
          <p class='font-medium'>
            <span>
              {user.photoURL ?
                <img
                  class='pointer-events-none mr-1.5 inline h-8 w-8 rounded-full text-sm transition-all'
                  alt='User Avatar'
                  src={user.photoURL}
                />
              : <CircleUserRound
                  aria-label='Circle User'
                  strokeWidth='2'
                  class='mr-1.5 inline h-8 w-8'
                />
              }
              {user.displayName}{' '}
            </span>
            <span class='inline-block font-light'>({user.email})</span>
          </p>
          <p>Logout if you no longer wish to store projects & todos online.</p>
        </>
      : <>
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
        </>
      }

      <span class='mt-4 flex justify-end gap-2'>
        <CancelButton
          id='user-cancel'
          handleCancel={(): void => {
            setIsVisible(false);
          }}
        />
        <ConfirmButton
          id='user-action'
          action={user ? 'Logout' : 'Login'}
          styleClass={buttonStyle}
          isLoading={isLoading}
          handleConfirm={() =>
            user ? void handleLogout() : void handleLogin()
          }
        />{' '}
        {user && <SyncButton />}
      </span>
    </div>
  );
};
