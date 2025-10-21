import {
  signInWithPopup,
  signOut as fbSignOut,
  type User
} from 'firebase/auth';

import { auth, googleProvider } from '@/lib/firebase.ts';

const signInWithGoogle = async (): Promise<User> => {
  const result = await signInWithPopup(auth, googleProvider);

  return result.user;
};

const signOut = (): Promise<void> => fbSignOut(auth);

export { signInWithGoogle, signOut };
