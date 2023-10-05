import { Github, Gavel } from 'lucide-preact';
import { type JSX } from 'preact/jsx-runtime';

export const Footer = (): JSX.Element => {
  return (
    <footer class='lg:(items-start, px-6) dark:(bg-slate-800, text-pink-400, border-slate-700) flex select-none flex-col items-center justify-center gap-1.5 border-t border-slate-200 bg-slate-100 p-4 text-lg font-semibold text-violet-900 transition-all xl:text-xl'>
      <p id='author' class='flex gap-2'>
        © 2023
        <a
          class='flex items-center gap-0.5 rounded text-indigo-800 transition-transform hover:scale-105 dark:text-indigo-300 xl:gap-1'
          title='Go to the Source'
          target='_blank'
          type='text/html'
          rel='noopener noreferrer nofollow external author'
          href='https://github.com/eldarlrd/todo-list'>
          <Github
            aria-label='GitHub Octocat'
            size='20'
            class='transition-transform xl:scale-110'
          />
          eldarlrd
        </a>
      </p>

      <p id='curriculum' class='flex gap-2'>
        for
        <a
          class='flex items-center gap-1 rounded text-yellow-800 transition-transform hover:scale-105 dark:text-yellow-500 xl:gap-1.5'
          title='Go to the Task'
          target='_blank'
          type='text/html'
          rel='noopener noreferrer nofollow external'
          href='https://theodinproject.com/lessons/node-path-javascript-todo-list'>
          <Gavel
            aria-label='Hammer'
            size='20'
            class='transition-transform xl:scale-110'
          />
          The Odin Project
        </a>
      </p>
    </footer>
  );
};
