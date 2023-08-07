import { type JSX } from 'preact/jsx-runtime';
import Logo from '@/assets/todoList.webp';

export const Header = (): JSX.Element => {
  return (
    <header class='md:(flex-row, justify-start, gap-4, px-6, py-3) dark:(bg-slate-800, text-pink-600) flex select-none flex-col items-center justify-center gap-2 bg-slate-100 px-4 py-5 text-3xl font-bold italic text-violet-800 xl:text-4xl'>
      <img
        class='xl:(h-28, w-28) h-24 w-24 dark:hue-rotate-60'
        alt='A Pinned Todo'
        src={Logo}
      />
      Todo List
    </header>
  );
};
