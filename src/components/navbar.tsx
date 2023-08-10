import { type JSX } from 'preact/jsx-runtime';
import { ThemeToggle } from '@/components/static/themeToggle.tsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPlus } from '@fortawesome/free-solid-svg-icons';

const MobileNav = (): JSX.Element => {
  return (
    <nav class='dark:(bg-slate-800, text-pink-600) absolute top-0 min-w-full select-none bg-slate-100 p-3 text-2xl text-violet-800 lg:hidden'>
      <button
        title='Open Drawer'
        class='hover:(bg-slate-200, active:bg-slate-300, dark:(bg-slate-700, active:bg-slate-600)) mr-2 w-12 rounded-lg px-3 py-2 leading-4 transition-colors'>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <ThemeToggle />
    </nav>
  );
};

const Sidebar = (): JSX.Element => {
  return (
    <nav class='dark:(bg-slate-700, text-pink-600) hidden w-72 select-none flex-col items-start gap-2 bg-slate-200 p-3 text-2xl text-violet-800 lg:flex xl:w-80 2xl:w-96'>
      <button class='hover:(bg-slate-100, active:bg-slate-50, dark:(bg-slate-800, active:bg-slate-900)) flex h-12 min-w-full items-center gap-3 break-all rounded-lg px-3 leading-4 outline-none transition-colors'>
        <FontAwesomeIcon icon={faPlus} />
        Add Project
      </button>
    </nav>
  );
};

export const Navbar = (): JSX.Element => {
  return (
    <>
      <MobileNav />
      <Sidebar />
    </>
  );
};
