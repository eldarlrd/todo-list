import { type JSX } from 'preact/jsx-runtime';
import { type StateUpdater, useState, useEffect } from 'preact/hooks';
import { ThemeToggle } from '@/components/controls/themeToggle.tsx';
import { Menu, Plus, X } from 'lucide-preact';

interface DrawerControls {
  drawer?: boolean | undefined;
  setDrawer: StateUpdater<boolean | undefined>;
}

const MobileNav = ({ setDrawer }: DrawerControls): JSX.Element => {
  useEffect(() => {
    window.addEventListener('resize', () => {
      window.innerWidth >= 1024 ? setDrawer(false) : null;
    });
  }, [setDrawer]);

  return (
    <nav
      id='mobileNavbar'
      class='dark:(bg-slate-800, text-pink-500) absolute top-0 min-w-full select-none bg-slate-100 p-3 text-2xl text-violet-800 transition-colors lg:hidden'>
      <button
        id='hamburgerMenu'
        onClick={(): void => {
          setDrawer(true);
        }}
        title='Open Drawer'
        class='hover:(bg-slate-200, active:bg-slate-300, dark:(bg-slate-700, active:bg-slate-600)) mr-2 w-12 rounded-lg px-3 py-2 leading-4 transition-colors'>
        <Menu strokeWidth='2.25' class='scale-125' />
      </button>
      <ThemeToggle />
    </nav>
  );
};

const Sidebar = ({ drawer, setDrawer }: DrawerControls): JSX.Element => {
  return (
    <nav
      id='sidebar'
      class={`${
        drawer
          ? 'lg:(relative, min-w-0) absolute top-0 min-h-full w-full transition-all duration-500'
          : 'lg:(ml-0, transition-all) -ml-72'
      } dark:(bg-slate-700, text-pink-400) w-72 select-none flex-col items-start overflow-y-auto bg-slate-200 p-3 text-violet-900 lg:flex xl:w-80 2xl:w-96`}>
      <span class='flex min-w-full gap-2 text-2xl'>
        <button
          id='addProject'
          class='hover:(bg-slate-100, active:bg-slate-50, dark:(bg-slate-800, active:bg-slate-900)) flex grow items-center gap-1.5 break-all rounded-lg p-3 font-medium leading-4 transition-colors'>
          <Plus strokeWidth='2.25' class='scale-110' />
          Add Project
        </button>
        {drawer ? (
          <button
            id='mobileCloseDrawer'
            onClick={(): void => {
              setDrawer(false);
            }}
            title='Close Drawer'
            class='hover:(bg-slate-100, active:bg-slate-50, dark:(bg-slate-800, active:bg-slate-900)) w-12 rounded-lg p-3 leading-4 transition-colors lg:hidden'>
            <X strokeWidth='2.25' class='scale-110' />
          </button>
        ) : null}
      </span>
      <div id='projectList' class='mt-2 flex min-w-full flex-col gap-2'>
        <span>
          <button class='hover:(bg-slate-100, active:bg-slate-50, dark:(bg-slate-800, active:bg-slate-900)) flex min-w-full items-center break-all rounded-lg px-3 py-2 text-xl leading-4 text-slate-900 transition-colors dark:text-slate-50'>
            Default
          </button>
        </span>
      </div>
    </nav>
  );
};

export const Navbar = (): JSX.Element => {
  const [drawer, setDrawer] = useState<boolean>();
  return (
    <>
      <MobileNav setDrawer={setDrawer} />
      <Sidebar drawer={drawer} setDrawer={setDrawer} />
    </>
  );
};
