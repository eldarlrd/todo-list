import { type JSX } from 'preact/jsx-runtime';
import Logo from '@/assets/todoList.webp';

export const Header = (): JSX.Element => {
  return (
    <header class='md:(flex-row, justify-start, gap-4, px-6) dark:(bg-slate-800, text-pink-600) xl:(py-2, text-4xl) flex select-none flex-col items-center justify-center gap-2 bg-slate-100 p-4 pt-20 text-3xl font-bold italic text-violet-800 lg:py-4'>
      <img
        class='xl:(h-24, w-24) h-20 w-20 dark:hue-rotate-60'
        alt='A Pinned Note'
        src={Logo}
      />
      Todo List
    </header>
  );
};
