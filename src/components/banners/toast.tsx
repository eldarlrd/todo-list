import { useEffect } from 'preact/hooks';
import { type JSX } from 'preact/jsx-runtime';
import { Toaster, useToasterStore, toast } from 'react-hot-toast';

import { TOAST_LIMIT } from '@/config/options.ts';

export const Toast = (): JSX.Element => {
  const { toasts } = useToasterStore();

  useEffect(() => {
    toasts
      .filter(t => t.visible)
      .filter((_, i) => i >= TOAST_LIMIT)
      .forEach(t => {
        toast.dismiss(t.id);
      });
  }, [toasts]);

  return (
    <Toaster
      reverseOrder
      position='bottom-center'
      toastOptions={{
        duration: 3000,
        removeDelay: 500,
        className:
          'w-56 select-none ring-slate-300 ring-1 !shadow-none !rounded dark:(bg-slate-900,' +
          ' accent-sky-600,' +
          'text-slate-50, ring-slate-600 selection:bg-sky-600) selection:bg-emerald-400 bg-slate-50' +
          ' accent-emerald-400 text-slate-900'
      }}
    />
  );
};
