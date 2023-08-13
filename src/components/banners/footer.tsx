import { type JSX } from 'preact/jsx-runtime';
import { Github, Gavel } from 'lucide-preact';

export const Footer = (): JSX.Element => {
  return (
    <footer class='lg:(items-start, px-6) dark:(bg-slate-800, text-pink-400) flex select-none flex-col items-center justify-center gap-1.5 bg-slate-100 p-4 text-lg font-semibold text-violet-900 transition-all xl:text-xl'>
      <p id='author' class='flex gap-2'>
        by
        <a
          class='flex items-center gap-0.5 text-indigo-800 transition-transform hover:scale-105 dark:text-indigo-300 xl:gap-1'
          title='Go to GitHub'
          target='_blank'
          rel='noreferrer'
          href='https://github.com/eldarlrd'>
          <Github size='20' class='transition-transform xl:scale-110' />
          eldarlrd
        </a>
      </p>
      <p id='curriculum' class='flex gap-2'>
        for
        <a
          class='flex items-center gap-1 text-yellow-800 transition-transform hover:scale-105 dark:text-yellow-500 xl:gap-1.5'
          title='Go to The Odin Project'
          target='_blank'
          rel='noreferrer'
          href='https://theodinproject.com'>
          <Gavel size='20' class='transition-transform xl:scale-110' />
          The Odin Project
        </a>
      </p>
    </footer>
  );
};
