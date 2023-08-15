import { type JSX } from 'preact/jsx-runtime';
import { ThemeToggle } from '@/components/controls/themeToggle.tsx';
import Logo from '@/assets/todoList.webp';

export const Header = (): JSX.Element => {
  return (
    <header class='lg:(flex-row, justify-between, gap-4, px-6, py-4) dark:(bg-slate-800, text-pink-500) xl:(py-2, text-4xl) flex select-none items-center justify-center bg-slate-100 p-4 pt-16 text-3xl font-bold italic text-violet-800 transition-all'>
      <span
        id='logo'
        class='md:(flex-row, gap-4) flex flex-col items-center justify-center gap-2 transition-all'>
        <img
          class='xl:(h-24, w-24) h-20 w-20 text-center text-sm transition-all dark:hue-rotate-60 xl:text-base'
          alt='A Pinned Note originally by Freepik'
          src={Logo}
        />
        Todo List
      </span>
      <span class='hidden font-normal not-italic lg:block'>
        <ThemeToggle />
      </span>
    </header>
  );
};
