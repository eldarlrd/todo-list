import { type JSX } from 'preact/jsx-runtime';
import { useState, useEffect } from 'preact/hooks';
import { Sun, Moon } from 'lucide-preact';

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
      id='themeToggle'
      onClick={themeToggle}
      title='Toggle Theme'
      class='hover:(bg-slate-200, active:bg-slate-300, dark:(bg-slate-700, active:bg-slate-600)) lg:(w-14, px-4, py-3) xl:(w-16, px-5, py-4) w-12 rounded-lg px-3 py-2 leading-4 transition-colors'>
      {dark ? (
        <Sun
          strokeWidth='2.25'
          class='scale-110 transition-transform lg:scale-125 xl:scale-150'
        />
      ) : (
        <Moon
          strokeWidth='2.25'
          class='scale-110 transition-transform lg:scale-125 xl:scale-150'
        />
      )}
    </button>
  );
};

themeCheck();
