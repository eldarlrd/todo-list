import { type JSX } from 'preact/jsx-runtime';
import { useState, useEffect } from 'preact/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const themeCheck = (): void => {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  )
    document.body.classList.add('dark');
  else document.body.classList.remove('dark');
};

export const ThemeToggle = (): JSX.Element => {
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
    <button
      onClick={themeToggle}
      title='Switch Theme'
      class='hover:(bg-slate-200, active:bg-slate-300, dark:(bg-slate-700, active:bg-slate-600)) w-12 rounded-lg py-2 leading-4 transition-colors lg:w-14 xl:w-16'>
      <FontAwesomeIcon icon={dark ? faSun : faMoon} />
    </button>
  );
};

themeCheck();
