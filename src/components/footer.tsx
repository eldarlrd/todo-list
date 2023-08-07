import { type JSX } from 'preact/jsx-runtime';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSchoolFlag } from '@fortawesome/free-solid-svg-icons';

export const Footer = (): JSX.Element => {
  return (
    <footer class='flex flex-col select-none items-center justify-center gap-1.5 bg-slate-100 dark:bg-slate-800 dark:text-pink-600 text-lg px-4 py-5 font-bold text-violet-800'>
      <p class='gap-2.5 flex'>
        by
        <a
          class='text-indigo-300 transition-transform hover:scale-105'
          title='Go to GitHub'
          target='_blank'
          rel='noreferrer'
          href='https://github.com/eldarlrd'>
          <FontAwesomeIcon icon={faGithub} /> eldarlrd
        </a>
      </p>
      <p class='gap-2.5 flex'>
        for
        <a
          class='text-yellow-500 transition-transform hover:scale-105'
          title='Go to The Odin Project'
          target='_blank'
          rel='noreferrer'
          href='https://theodinproject.com'>
          <FontAwesomeIcon icon={faSchoolFlag} /> The Odin Project
        </a>
      </p>
    </footer>
  );
};
