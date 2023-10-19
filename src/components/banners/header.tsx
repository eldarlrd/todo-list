import { type JSX } from 'preact/jsx-runtime';

import Logo from '@/assets/logo.webp';
import { ThemeToggle } from '@/components/controls/themeToggle.tsx';
import { UserSignIn } from '@/components/controls/userSignIn.tsx';

export const Header = (): JSX.Element => {
  return (
    <header class='lg:(flex-row, justify-between, gap-4, px-6, py-4) dark:(bg-slate-800, text-pink-500) xl:(py-2, text-4xl) flex select-none items-center justify-center bg-slate-100 p-4 pt-16 text-3xl font-bold text-violet-800 transition-all'>
      <span
        id='logo'
        class='md:(flex-row, gap-3) flex flex-col items-center justify-center gap-2'>
        <img
          class='xl:(h-24, w-24, text-base) dark:(text-violet-400, hue-rotate-60, brightness-125) pointer-events-none h-20 w-20 text-center text-sm transition-all'
          alt='Check icon originally by HJ Studio'
          src={Logo}
        />
        <h1 class='-skew-x-6'>Todo List</h1>
      </span>

      <span class='hidden gap-2 font-normal not-italic lg:flex'>
        <ThemeToggle identifier='theme-toggle' />
        <UserSignIn />
      </span>
    </header>
  );
};
