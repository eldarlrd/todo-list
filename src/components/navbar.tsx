import { type JSX } from 'preact/jsx-runtime';
import { useState, useEffect } from 'preact/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faBars } from '@fortawesome/free-solid-svg-icons';

const themeCheck = (): void => {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  )
    document.body.classList.add('dark');
  else document.body.classList.remove('dark');
};

export const Navbar = (): JSX.Element => {
  const [dark, setDark] = useState<boolean>();
  const iconSwitch = (): void => {
    document.body.classList.contains('dark') ? setDark(true) : setDark(false);
  };

  useEffect(iconSwitch, []);

  const themeToggle = (): void => {
    dark ? (localStorage.theme = 'light') : (localStorage.theme = 'dark');
    document.body.classList.toggle('dark');
    setDark(!dark);
  };

  return (
    <nav class='dark:(bg-slate-700, text-pink-600) flex select-none items-center justify-end gap-2 bg-slate-200 px-6 py-3 text-2xl text-violet-800 xl:text-3xl'>
      <button
        onClick={themeToggle}
        class='hover:(bg-slate-300, active:bg-slate-400, dark:bg-slate-800, dark:active:bg-slate-900) w-12 rounded-lg px-3 py-2 leading-4 outline-none transition-colors'>
        <FontAwesomeIcon icon={dark ? faSun : faMoon} />
      </button>
      <button class='hover:(bg-slate-300, active:bg-slate-400, dark:bg-slate-800, dark:active:bg-slate-900) w-12 rounded-lg px-3 py-2 leading-4 outline-none transition-colors'>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </nav>
  );
};

themeCheck();
