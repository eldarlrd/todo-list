import {
  signInWithPopup,
  signOut as firebaseSignOut,
  type User
} from 'firebase/auth';

import { auth, googleProvider } from '@/lib/firebase.ts';

const signInWithGoogle = async (): Promise<User> => {
  const result = await signInWithPopup(auth, googleProvider);

  return result.user;
};

const signOut = (): Promise<void> => firebaseSignOut(auth);
