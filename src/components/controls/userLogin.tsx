import { User2 } from 'lucide-preact';
import { type JSX } from 'preact/jsx-runtime';

export const UserLogin = (): JSX.Element => {
  return (
    <button
      type='button'
      title='Login'
      id='user-login'
      onClick={(): void => {
        console.log('Login');
      }}
      class='hover:(bg-slate-200, active:bg-slate-300, dark:(bg-slate-700, active:bg-slate-600)) lg:(w-14, px-4, py-3) xl:(w-16, px-5, py-4) w-12 rounded px-3 py-2 leading-4 transition-colors'>
      <User2
        aria-label='User'
        strokeWidth='2.25'
        class='scale-110 transition-transform lg:scale-125 xl:scale-150'
      />
    </button>
  );
};
