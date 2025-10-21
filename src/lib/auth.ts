import {
  signInWithPopup,
  signOut as fbSignOut,
  type User
} from 'firebase/auth';

import { auth, googleProvider } from '@/lib/firebase.ts';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const signInWithGoogle = async (): Promise<User> => {
  const result = await signInWithPopup(auth, googleProvider);

  return result.user;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const signOut = (): Promise<void> => fbSignOut(auth);
