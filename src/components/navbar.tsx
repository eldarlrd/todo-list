import { type JSX } from 'preact/jsx-runtime';
import { useState, useEffect } from 'preact/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faBars } from '@fortawesome/free-solid-svg-icons';

interface Theme {
  darkMode: boolean | undefined;
  darkToggle: () => void;
}

const themeCheck = (): void => {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  )
    document.body.classList.add('dark');
  else document.body.classList.remove('dark');
};

const MobileNav = ({ darkMode, darkToggle }: Theme): JSX.Element => {
  return (
    <nav class='dark:(bg-slate-700, text-pink-600) absolute top-0 min-w-full select-none items-center gap-2 bg-slate-200 p-3 text-2xl text-violet-800 lg:hidden'>
      <button class='hover:(bg-slate-300, active:bg-slate-400, dark:(bg-slate-800, active:bg-slate-900)) w-12 rounded-lg px-3 py-2 leading-4 outline-none transition-colors'>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <button
        onClick={darkToggle}
        class='hover:(bg-slate-300, active:bg-slate-400, dark:(bg-slate-800, active:bg-slate-900)) w-12 rounded-lg px-3 py-2 leading-4 outline-none transition-colors'>
        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
      </button>
    </nav>
  );
};

const Sidebar = ({ darkMode, darkToggle }: Theme): JSX.Element => {
  return (
    <nav class='dark:(bg-slate-700, text-pink-600) xl:(w-80, text-3xl) hidden w-72 select-none items-center gap-2 bg-slate-200 p-3 text-2xl text-violet-800 lg:flex 2xl:w-96'>
      <button
        onClick={darkToggle}
        class='hover:(bg-slate-300, active:bg-slate-400, dark:(bg-slate-800, active:bg-slate-900)) w-12 rounded-lg px-3 py-2 leading-4 outline-none transition-colors'>
        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
      </button>
    </nav>
  );
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
    <>
      <MobileNav darkMode={dark} darkToggle={themeToggle} />
      <Sidebar darkMode={dark} darkToggle={themeToggle} />
    </>
  );
};

themeCheck();
