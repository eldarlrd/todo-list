import { type JSX } from 'preact/jsx-runtime';
import { useState, useEffect } from 'preact/hooks';
import { Sun, Moon } from 'lucide-preact';

const rootTheme = document.documentElement.style;
const bodyTheme = document.body.classList;

const themeCheck = (): void => {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    rootTheme.colorScheme = 'dark';
    bodyTheme.add('dark');
  } else {
    rootTheme.colorScheme = 'light';
    bodyTheme.remove('dark');
  }
};

export const ThemeToggle = (): JSX.Element => {
  const [dark, setDark] = useState<boolean>();
  const iconSwitch = (): void => {
    bodyTheme.contains('dark') ? setDark(true) : setDark(false);
  };

  useEffect(iconSwitch, []);

  const themeToggle = (): void => {
    dark ? (localStorage.theme = 'light') : (localStorage.theme = 'dark');
    rootTheme.colorScheme === 'dark'
      ? (rootTheme.colorScheme = 'light')
      : (rootTheme.colorScheme = 'dark');
    bodyTheme.toggle('dark');
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
          aria-label='Sun'
          strokeWidth='2.25'
          class='scale-110 transition-transform lg:scale-125 xl:scale-150'
        />
      ) : (
        <Moon
          aria-label='Moon'
          strokeWidth='2.25'
          class='scale-110 transition-transform lg:scale-125 xl:scale-150'
        />
      )}
    </button>
  );
};

themeCheck();
