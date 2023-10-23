import { useDispatch } from 'react-redux';

import { type AppDispatch } from '@/store.ts';

export const useAppDispatch: () => AppDispatch = useDispatch;
