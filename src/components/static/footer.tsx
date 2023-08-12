import { type JSX } from 'preact/jsx-runtime';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGavel } from '@fortawesome/free-solid-svg-icons';

export const Footer = (): JSX.Element => {
  return (
    <footer class='lg:(items-start, px-6) dark:(bg-slate-800, text-pink-400) flex select-none flex-col items-center justify-center gap-1.5 bg-slate-100 p-4 text-lg font-semibold text-violet-900 transition-all xl:text-xl'>
      <p id='author' class='flex gap-2'>
        by
        <a
          class='text-indigo-800 transition-transform hover:scale-105 dark:text-indigo-300'
          title='Go to GitHub'
          target='_blank'
          rel='noreferrer'
          href='https://github.com/eldarlrd'>
          <FontAwesomeIcon icon={faGithub} /> eldarlrd
        </a>
      </p>
      <p id='curriculum' class='flex gap-2.5'>
        for
        <a
          class='text-yellow-800 transition-transform hover:scale-105 dark:text-yellow-500'
          title='Go to The Odin Project'
          target='_blank'
          rel='noreferrer'
          href='https://theodinproject.com'>
          <FontAwesomeIcon icon={faGavel} /> The Odin Project
        </a>
      </p>
    </footer>
  );
};
